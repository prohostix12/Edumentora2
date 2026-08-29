'use client';

import React from 'react';
import { useIframePlayOverlay } from '@/lib/useIframePlayOverlay';

// See useIframePlayOverlay for why this exists. Use this wrapper when the
// embed is a plain iframe you don't otherwise need to manage a container
// for; use the hook directly (as InstagramEmbed does) when you already have
// your own sizing/positioning container to attach the refs to.
export default function IframePlayOverlay({
  onPlay,
  onPause,
  className,
  children,
}: {
  onPlay?: () => void;
  onPause?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  const { containerRef, overlayRef } = useIframePlayOverlay({ onPlay, onPause });

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative', overflow: 'hidden' }}>
      {children}
      <div ref={overlayRef} style={{ position: 'absolute', inset: 0, background: 'transparent', cursor: 'pointer' }} />
    </div>
  );
}
