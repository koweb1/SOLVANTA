"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import LinkArrow from "@/components/ui/LinkArrow";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const audiences = [
  {
    id: "residential",
    label: "Residential",
    caption: "For homes",
    href: "/residential",
    image: "/images/res.jpg",
    position: "object-center",
    alt: "Modern home with solar panels on a flat roof at dusk",
    line: "Lower bills and steady power for your home.",
    cta: "Explore residential",
  },
  {
    id: "commercial",
    label: "Commercial",
    caption: "For businesses",
    href: "/commercial",
    image: "/images/com.jpg",
    position: "object-[50%_52%]",
    alt: "Aerial view of a factory rooftop covered in solar panels",
    line: "Cut operating costs and keep your business running.",
    cta: "Explore commercial",
  },
] as const;

export default function AudienceSelector() {
  const rootRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Each block reveals on its own, only once it is actually near the viewport.
        gsap.utils.toArray<HTMLElement>("[data-reveal]", root).forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            },
          );
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = audiences.length - 1;
    let next = i;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      next = i === 0 ? last : i - 1;
    else return;

    e.preventDefault();
    setCurrent(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      ref={rootRef}
      className="bg-ivory pt-[clamp(0px,2vw,24px)] pb-[clamp(72px,10vw,132px)] text-ink"
    >
      {/* Mobile only: a short gap and a divider so the story clearly ends first */}
      <div aria-hidden="true" className="hidden max-[820px]:block">
        <Container>
          <div className="h-[clamp(40px,9svh,88px)]" />
          <div className="h-px bg-line-light" />
          <div className="h-[clamp(32px,6svh,56px)]" />
        </Container>
      </div>

      <Container>
        <div
          data-reveal
          className="mb-[clamp(32px,4vw,56px)] flex flex-wrap items-end justify-between gap-8 opacity-0 max-[820px]:mb-5 max-[820px]:gap-2 motion-reduce:opacity-100"
        >
          <h3 className="max-w-[18ch] text-[clamp(2rem,3.6vw,3rem)] max-[820px]:max-w-none max-[820px]:text-[1.5rem]">
            What are you powering?
          </h3>
          <p className="max-w-[40ch] text-steel max-[820px]:text-[.95rem]">
            Choose where you want clean, reliable power.
          </p>
        </div>

        <div
          data-reveal
          className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-[clamp(24px,4vw,56px)] opacity-0 max-[980px]:grid-cols-1 max-[980px]:gap-4 motion-reduce:opacity-100"
        >
          {/* Desktop: big vertical tabs. Mobile: a compact two-button switch. */}
          <div
            role="tablist"
            aria-label="What are you powering?"
            className="flex flex-col gap-4 max-[980px]:flex-row max-[980px]:gap-1.5 max-[980px]:rounded-full max-[980px]:border max-[980px]:border-line-light max-[980px]:p-1.5"
          >
            {audiences.map((a, i) => {
              const active = i === current;
              return (
                <button
                  key={a.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${a.id}`}
                  aria-selected={active}
                  aria-controls={`panel-${a.id}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => setCurrent(i)}
                  onMouseEnter={() => setCurrent(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group flex w-full cursor-pointer items-center justify-between gap-4 rounded-[10px] border px-6 py-6 text-left transition-colors duration-300 max-[980px]:flex-1 max-[980px]:justify-center max-[980px]:rounded-full max-[980px]:border-0 max-[980px]:px-4 max-[980px]:py-3 max-[980px]:text-center motion-reduce:transition-none ${
                    active
                      ? "border-ink bg-ink text-ivory"
                      : "border-line-light text-ink hover:border-ink"
                  }`}
                >
                  <span className="flex items-center gap-5">
                    <span
                      className={`font-head text-[.85rem] font-semibold max-[980px]:hidden ${
                        active ? "text-gold" : "text-steel"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-head text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.1] font-semibold tracking-[-.02em] max-[980px]:text-[1rem]">
                        {a.label}
                      </span>
                      <span
                        className={`mt-1 block text-[.9rem] max-[980px]:hidden ${
                          active ? "text-silver" : "text-steel"
                        }`}
                      >
                        {a.caption}
                      </span>
                    </span>
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 max-[980px]:hidden motion-reduce:transition-none"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[10px] bg-navy text-ivory max-[980px]:h-[440px] max-[980px]:min-h-0">
            {audiences.map((a, i) => {
              const active = i === current;
              return (
                <div
                  key={a.id}
                  id={`panel-${a.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${a.id}`}
                  inert={!active}
                  className={`absolute inset-0 flex flex-col ${active ? "" : "pointer-events-none"}`}
                >
                  {/* Image area: fills the space above the caption on mobile, the whole panel on desktop */}
                  <div className="relative min-h-0 flex-1 min-[981px]:absolute min-[981px]:inset-0">
                    <Image
                      src={a.image}
                      alt={a.alt}
                      fill
                      sizes="(max-width: 980px) 100vw, 58vw"
                      className={`object-cover ${a.position} transition-all duration-700 ease-out motion-reduce:transition-none ${
                        active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                      }`}
                    />
                  </div>

                  {/* Caption: solid bar under the image on mobile, frosted card on desktop */}
                  <div
                    className={`relative bg-navy p-5 transition-[opacity,transform] delay-150 duration-500 min-[981px]:absolute min-[981px]:bottom-6 min-[981px]:left-6 min-[981px]:max-w-[380px] min-[981px]:rounded-[10px] min-[981px]:bg-navy/80 min-[981px]:p-6 min-[981px]:backdrop-blur-md motion-reduce:transition-none ${
                      active
                        ? "translate-y-0 opacity-100"
                        : "translate-y-3 opacity-0"
                    }`}
                  >
                    <p className="font-head text-[1.15rem] leading-[1.3] font-medium min-[981px]:text-[1.35rem]">
                      {a.line}
                    </p>
                    <div className="mt-4 min-[981px]:mt-5">
                      <LinkArrow href={a.href} tone="dark">
                        {a.cta}
                      </LinkArrow>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}
