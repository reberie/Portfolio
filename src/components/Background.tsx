'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import CanvasErrorBoundary from './CanvasErrorBoundary';

// The scene touches `window`, so it must never render on the server.
const SceneBackground = dynamic(() => import('@/three/SceneBackground'), { ssr: false });

/**
 * Mounts the persistent, page-wide WebGL background once (in the root layout, so
 * it survives client-side navigation). Unmounts under prefers-reduced-motion —
 * the page then sits on the flat --bg void — and is wrapped in an error boundary
 * so devices without WebGL degrade gracefully.
 */
export default function Background() {
  const [enabled, setEnabled] = useState(false);
  const pathname = usePathname();
  // Reading-heavy routes get a lighter scene (fewer points, no bloom).
  const lite = pathname !== '/';

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
      <SceneBackground lite={lite} />
    </CanvasErrorBoundary>
  );
}
