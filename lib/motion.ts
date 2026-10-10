import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Stops the mobile address bar showing and hiding from recalculating every trigger.
if (typeof window !== "undefined") {
  ScrollTrigger.config({ ignoreMobileResize: true });
}

export const EASE = {
  out: "power3.out",
  inOut: "power2.inOut",
} as const;

export const MOBILE_QUERY = "(max-width: 820px)";
export const MOTION_OK_QUERY = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
