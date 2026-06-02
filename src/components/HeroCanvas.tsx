'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import CanvasErrorBoundary from './CanvasErrorBoundary';

// The WebGL scene touches `window`, so it must never render on the server.
const HeroScene = dynamic(() => import('@/three/HeroScene'), { ssr: false });

/**
 * Client-only mount point for the hero's Three.js scene. Stays unmounted when
 * the user prefers reduced motion (the CSS glows carry the hero instead) and is
 * wrapped in an error boundary for devices without WebGL.
 */
export default function HeroCanvas() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setEnabled(!mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  if (!enabled) return null;

  return (
    <CanvasErrorBoundary>
      <HeroScene />
    </CanvasErrorBoundary>
  );
}
