'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const PRIMARY = new THREE.Color('#cf96ff'); // neon purple
const SECONDARY = new THREE.Color('#00f1fe'); // neon cyan

// Deterministic [0,1) hash — pure, stable across renders (no Math.random()).
const hash = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

type ScrollRef = { current: number };

/** Tracks page scroll as 0..1 progress without per-frame layout reads. */
function useScrollProgress(): ScrollRef {
  const progress = useRef(0);
  useEffect(() => {
    let max = 1;
    const update = () => {
      progress.current = Math.min(1, Math.max(0, window.scrollY / max));
    };
    const recalc = () => {
      max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      update();
    };
    const ro = new ResizeObserver(recalc);
    ro.observe(document.body);
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', recalc);
    recalc();
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', recalc);
    };
  }, []);
  return progress;
}

/** Dispersed shell of points filling the viewport, tinted purple→cyan. */
function ParticleField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    const golden = Math.PI * (1 + Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const t = i / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = golden * i;
      const radius = 3.0 + (hash(i) - 0.5) * 1.4; // thick, dispersed shell

      const y = radius * Math.cos(phi);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      color.copy(PRIMARY).lerp(SECONDARY, (y / radius + 1) / 2);
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.035;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Glowing wireframe icosahedron — the focal object. */
function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y -= delta * 0.06;
  });
  return (
    <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.3, 1]} />
        <meshBasicMaterial color={PRIMARY} wireframe transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

/**
 * Holds the field + offset core. Applies mouse parallax, a gentle scroll-driven
 * upward drift, and positions the core to the right on landscape (so it never
 * sits behind the hero copy) but recenters it on portrait/mobile.
 */
function World({ scroll, count }: { scroll: ScrollRef; count: number }) {
  const world = useRef<THREE.Group>(null);
  const coreGroup = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame((state) => {
    const p = scroll.current;
    const aspect = state.size.width / state.size.height;

    if (world.current) {
      world.current.rotation.x = THREE.MathUtils.lerp(
        world.current.rotation.x,
        pointer.current.y * 0.1,
        0.04,
      );
      world.current.rotation.y = THREE.MathUtils.lerp(
        world.current.rotation.y,
        pointer.current.x * 0.12,
        0.04,
      );
      // Drift the whole field up as the page scrolls down (parallax depth).
      world.current.position.y = THREE.MathUtils.lerp(world.current.position.y, p * 2.4, 0.06);
    }

    if (coreGroup.current) {
      const portrait = aspect < 1;
      // Right of the copy on desktop; lifted above it (smaller) on mobile.
      const targetX = portrait ? 0 : 2.3;
      const targetY = portrait ? 1.3 : 0;
      coreGroup.current.position.x = THREE.MathUtils.lerp(
        coreGroup.current.position.x,
        targetX,
        0.05,
      );
      coreGroup.current.position.y = THREE.MathUtils.lerp(
        coreGroup.current.position.y,
        targetY,
        0.05,
      );
      coreGroup.current.rotation.z = p * Math.PI * 0.6; // slow extra spin with scroll
      const base = portrait ? 0.7 : 1;
      coreGroup.current.scale.setScalar(base * (1 - p * 0.15)); // smaller on mobile, recede on scroll
    }
  });

  return (
    <group ref={world}>
      <ParticleField count={count} />
      <group ref={coreGroup}>
        <Core />
      </group>
    </group>
  );
}

export default function SceneBackground() {
  const [ready, setReady] = useState(false);
  const scroll = useScrollProgress();

  // Lighter load on small screens.
  const isMobile =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;
  const count = isMobile ? 1500 : 3200;
  const dpr: [number, number] = isMobile ? [1, 1.5] : [1, 2];

  return (
    <Canvas
      className={`bg-canvas${ready ? ' bg-canvas--ready' : ''}`}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      dpr={dpr}
      gl={{ powerPreference: 'high-performance', antialias: false, alpha: true, stencil: false }}
      camera={{ position: [0, 0, 6], fov: 42 }}
      onCreated={() => requestAnimationFrame(() => setReady(true))}
    >
      <Suspense fallback={null}>
        <World scroll={scroll} count={count} />
        <EffectComposer>
          <Bloom
            intensity={0.8}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.25}
            mipmapBlur
            radius={0.7}
          />
          <Vignette eskil={false} offset={0.3} darkness={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
