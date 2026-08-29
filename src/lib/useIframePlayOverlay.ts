'use client';

import { useEffect, useRef } from 'react';

// Cross-origin video iframes (YouTube/Instagram/Facebook/Vimeo/Google Drive)
// never give us real play/pause events. As a proxy: a transparent overlay
// sits on top of the iframe and catches the very first tap/click — treated
// as "started playing" — then switches itself to pointer-events:none
// *before* the click event finishes, so the same tap still reaches the
// platform's own play button underneath. Clicking anywhere else on the page
// afterwards is treated as "done watching".
//
// Returns refs to attach: `containerRef` on the element that bounds the whole
// embed (used to detect "clicked outside"), and `overlayRef` on a transparent
// absolutely-positioned div stacked on top of the iframe.
export function useIframePlayOverlay({ onPlay, onPause }: { onPlay?: () => void; onPause?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Refs for the latest callbacks so the document listener below doesn't
  // need to be torn down/rebuilt every time the parent re-renders with new
  // (inline, identity-unstable) onPlay/onPause functions.
  const onPlayRef = useRef(onPlay);
  onPlayRef.current = onPlay;
  const onPauseRef = useRef(onPause);
  onPauseRef.current = onPause;

  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      const overlay = overlayRef.current;
      if (overlay && e.target === overlay) {
        overlay.style.pointerEvents = 'none';
      }
      onPlayRef.current?.();
    };
    const handleDocumentClick = (e: MouseEvent) => {
      const container = containerRef.current;
      if (container && e.target instanceof Node && !container.contains(e.target)) {
        onPauseRef.current?.();
      }
    };

    const overlay = overlayRef.current;
    overlay?.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('click', handleDocumentClick, true);
    return () => {
      overlay?.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('click', handleDocumentClick, true);
    };
  }, []);

  return { containerRef, overlayRef };
}
