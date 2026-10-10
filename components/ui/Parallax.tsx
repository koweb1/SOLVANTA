"use client";

import { useRef, type ReactNode } from "react";
import { MOTION_OK_QUERY, gsap, useGSAP } from "@/lib/motion";

type ParallaxProps = {
  /** Usually a next/image with `fill`. */
  children: ReactNode;
  /** Drift in % of the image height. Keep at 8 or below. */
  amount?: number;
  /** Start zoomed in (e.g. 1.12) and settle to normal size on load. */
  introZoom?: number;
  className?: string;
};

/* Makes an image drift slowly inside its frame as you scroll.
   Place it inside a `relative overflow-hidden` parent. */
export default function Parallax({
  children,
  amount = 8,
  introZoom,
  className = "",
}: ParallaxProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      const inner = innerRef.current;
      if (!root || !inner) return;

      const mm = gsap.matchMedia();
      mm.add(MOTION_OK_QUERY, () => {
        gsap.fromTo(
          inner,
          { yPercent: -amount },
          {
            yPercent: amount,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );

        if (introZoom && introZoom > 1) {
          gsap.fromTo(
            inner,
            { scale: introZoom },
            { scale: 1, duration: 2.4, ease: "power2.out" },
          );
        }
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [amount, introZoom] },
  );

  return (
    <div
      ref={rootRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* 20% taller than the frame so there is room to drift */}
      <div ref={innerRef} className="absolute inset-[-10%]">
        {children}
      </div>
    </div>
  );
}
