"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import {
  EASE,
  MOBILE_QUERY,
  MOTION_OK_QUERY,
  gsap,
  useGSAP,
} from "@/lib/motion";

type Variant = "fade-up" | "fade" | "scale" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  /** Element to render. Use "ul", "ol", "section" etc. to keep semantics. */
  as?: ElementType;
  variant?: Variant;
  delay?: number;
  duration?: number;
  /** When set, the direct children animate one after another instead of the wrapper. */
  stagger?: number;
  /** ScrollTrigger start position. */
  start?: string;
  className?: string;
};

const FROM: Record<Variant, { x?: number; y?: number; scale?: number }> = {
  "fade-up": { y: 40 },
  fade: {},
  scale: { scale: 0.94, y: 20 },
  left: { x: -48 },
  right: { x: 48 },
};

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  duration = 0.9,
  stagger,
  start = "top 85%",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add({ motionOk: MOTION_OK_QUERY, mobile: MOBILE_QUERY }, (context) => {
        const { motionOk, mobile } = context.conditions as {
          motionOk: boolean;
          mobile: boolean;
        };
        if (!motionOk) return;

        // Smaller movement on phones.
        const k = mobile ? 0.6 : 1;
        const from = FROM[variant];
        const targets = stagger ? Array.from(el.children) : el;

        gsap.fromTo(
          targets,
          {
            autoAlpha: 0,
            x: (from.x ?? 0) * k,
            y: (from.y ?? 0) * k,
            scale: from.scale ?? 1,
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration,
            delay,
            ease: EASE.out,
            stagger: stagger ?? 0,
            clearProps: "transform",
            scrollTrigger: { trigger: el, start, once: true },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  // Hidden until GSAP runs. Reduced-motion users see everything straight away.
  const hidden = stagger
    ? "[&>*]:opacity-0 motion-reduce:[&>*]:opacity-100"
    : "opacity-0 motion-reduce:opacity-100";

  return (
    <Tag ref={ref} className={`${hidden} ${className}`}>
      {children}
    </Tag>
  );
}
