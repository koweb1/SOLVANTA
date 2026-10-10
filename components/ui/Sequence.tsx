"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import {
  EASE,
  MOBILE_QUERY,
  MOTION_OK_QUERY,
  gsap,
  useGSAP,
} from "@/lib/motion";

type Kind = "node" | "text" | "pop" | "cell" | "fade" | "line";

type SequenceProps = {
  children: ReactNode;
  as?: ElementType;
  /** ScrollTrigger start position. */
  start?: string;
  /** Seconds to wait after the trigger fires. */
  delay?: number;
  className?: string;
};

/* Default length and position in the timeline for each kind.
   Override per element with data-seq-dur and data-seq-pos. */
const DEFAULTS: Record<Kind, { dur: number; pos: string }> = {
  node: { dur: 0.7, pos: ">-0.2" },
  text: { dur: 0.6, pos: ">-0.35" },
  pop: { dur: 0.5, pos: ">-0.2" },
  cell: { dur: 0.35, pos: "<0.06" },
  fade: { dur: 0.4, pos: ">-0.1" },
  line: { dur: 0.5, pos: ">-0.1" },
};

/* Plays every [data-seq] element inside it as one timeline, in page order,
   when the wrapper scrolls into view. */
export default function Sequence({
  children,
  as: Tag = "div",
  start = "top 80%",
  delay = 0,
  className = "",
}: SequenceProps) {
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

        const items = gsap.utils.toArray<HTMLElement>("[data-seq]", el);
        if (!items.length) return;

        const k = mobile ? 0.6 : 1;
        const tl = gsap.timeline({
          delay,
          defaults: { ease: EASE.out },
          scrollTrigger: { trigger: el, start, once: true },
        });

        items.forEach((item) => {
          const kind = (item.dataset.seq || "node") as Kind;
          const base = DEFAULTS[kind] ?? DEFAULTS.node;
          const duration = item.dataset.seqDur
            ? Number(item.dataset.seqDur)
            : base.dur;
          const pos = item.dataset.seqPos ?? base.pos;

          switch (kind) {
            case "line": {
              // Tall thin lines wipe downward, flat ones wipe left to right.
              // data-seq-dir="down" means "downward on phones".
              const vertical =
                item.dataset.seqDir === "down"
                  ? mobile
                  : item.offsetHeight > item.offsetWidth;
              tl.fromTo(
                item,
                {
                  autoAlpha: 1,
                  clipPath: vertical
                    ? "inset(0% 0% 100% 0%)"
                    : "inset(0% 100% 0% 0%)",
                },
                {
                  clipPath: "inset(0% 0% 0% 0%)",
                  duration,
                  ease: EASE.inOut,
                  clearProps: "clipPath",
                },
                pos,
              );
              break;
            }
            case "pop":
              tl.fromTo(
                item,
                { autoAlpha: 0, scale: 0.5 },
                {
                  autoAlpha: 1,
                  scale: 1,
                  duration,
                  ease: "back.out(1.7)",
                  clearProps: "transform",
                },
                pos,
              );
              break;
            case "cell":
              tl.fromTo(
                item,
                { autoAlpha: 0, scale: 0.6, transformOrigin: "50% 50%" },
                {
                  autoAlpha: 1,
                  scale: 1,
                  duration,
                  ease: "back.out(1.4)",
                  clearProps: "transform",
                },
                pos,
              );
              break;
            case "fade":
              tl.fromTo(
                item,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration },
                pos,
              );
              break;
            case "text":
              tl.fromTo(
                item,
                { autoAlpha: 0, y: 20 * k },
                { autoAlpha: 1, y: 0, duration, clearProps: "transform" },
                pos,
              );
              break;
            default:
              tl.fromTo(
                item,
                { autoAlpha: 0, y: 32 * k },
                { autoAlpha: 1, y: 0, duration, clearProps: "transform" },
                pos,
              );
          }
        });
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  // Hidden until GSAP runs. Reduced-motion users see everything straight away.
  return (
    <Tag
      ref={ref}
      className={`[&_[data-seq]]:opacity-0 motion-reduce:[&_[data-seq]]:opacity-100 ${className}`}
    >
      {children}
    </Tag>
  );
}
