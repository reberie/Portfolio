'use client';

import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean };

/**
 * If WebGL is unavailable or the scene throws, render nothing — the hero
 * degrades gracefully to its ambient CSS glows instead of a blank screen.
 */
export default class CanvasErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[HeroCanvas] disabled after error:', error);
    }
  }

  render() {
    return this.state.hasError ? null : this.props.children;
  }
}
