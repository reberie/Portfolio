'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { Suspense, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import * as THREE from 'three';

const PRIMARY = new THREE.Color('#cf96ff'); // neon purple
const SECONDARY = new THREE.Color('#00f1fe'); // neon cyan

// Deterministic [0,1) hash — pure (depends only on its input), so it satisfies
// react-hooks/purity and stays stable across renders instead of Math.random().
const hash = (n: number) => {
  const x = Math.sin(n * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

/** A shell of points distributed on a sphere, tinted purple→cyan by height. */
function ParticleSphere({ count = 2400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    const golden = Math.PI * (1 + Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      // Even spread via the fibonacci spiral, with a little shell thickness.
      const t = i / count;
      const phi = Math.acos(1 - 2 * t);
      const theta = golden * i;
      const radius = 2.4 + (hash(i) - 0.5) * 0.3;

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
    if (ref.current) ref.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
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

/** A faintly glowing wireframe icosahedron at the centre of the field. */
function Core() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.08;
    ref.current.rotation.y -= delta * 0.06;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color={PRIMARY} wireframe transparent opacity={0.45} />
      </mesh>
    </Float>
  );
}

/** Tilts the whole group gently toward the pointer for subtle parallax. */
function Rig({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.15,
      0.04,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.current.x * 0.2,
      0.04,
    );
  });

  return <group ref={group}>{children}</group>;
}

export default function HeroScene() {
  const [ready, setReady] = useState(false);

  return (
    <Canvas
      className={`hero__canvas${ready ? ' hero__canvas--ready' : ''}`}
      style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}
      dpr={[1, 2]}
      gl={{ powerPreference: 'high-performance', antialias: false, alpha: true, stencil: false }}
      camera={{ position: [0, 0, 6], fov: 40 }}
      onCreated={() => requestAnimationFrame(() => setReady(true))}
    >
      <Suspense fallback={null}>
        <Rig>
          <ParticleSphere />
          <Core />
        </Rig>
        <EffectComposer>
          <Bloom
            intensity={0.85}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.25}
            mipmapBlur
            radius={0.7}
          />
          <Vignette eskil={false} offset={0.35} darkness={0.75} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
