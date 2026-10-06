"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Bar heights (% of the chart) while the bill is "high", and the flat height after the fix.
const BAR_HEIGHTS = [34, 42, 48, 56, 64, 74, 86, 98];
const FLAT_BAR = 22;

// Timeline length in abstract units. Scroll position maps onto 0..TOTAL.
const TOTAL = 10;

const STATUS = {
  up: "Grid connected",
  down: "Grid down",
  solar: "Solar + battery online",
} as const;
type PowerState = keyof typeof STATUS;

const COPY = [
  {
    key: "bills",
    eyebrow: "The problem",
    title: "Your bill only goes one way.",
    text: "Every month you pay for power you do not control, and you have no say in the price.",
  },
  {
    key: "outage",
    eyebrow: "The problem",
    title: "Then the lights go out.",
    text: "Outages stop work, interrupt your day, and leave you waiting on someone else to fix it.",
  },
  {
    key: "solution",
    eyebrow: "The solution",
    title: "One system fixes both.",
    text: "Solar generates your own power. Batteries keep it running when the grid fails. You pay less and stay on.",
  },
] as const;

// Each step marker lights up for its own phase. The phase lives on the root as data-phase.
const STEPS = [
  {
    key: "bills",
    label: "Bills",
    li: "group-data-[phase=bills]/stage:text-ivory group-data-[phase=solution]/stage:text-ink/50",
    bar: "group-data-[phase=bills]/stage:w-14 group-data-[phase=bills]/stage:bg-gold",
  },
  {
    key: "outage",
    label: "Outages",
    li: "group-data-[phase=outage]/stage:text-ivory group-data-[phase=solution]/stage:text-ink/50",
    bar: "group-data-[phase=outage]/stage:w-14 group-data-[phase=outage]/stage:bg-gold",
  },
  {
    key: "solution",
    label: "Solution",
    li: "group-data-[phase=solution]/stage:text-ink",
    bar: "group-data-[phase=solution]/stage:w-14 group-data-[phase=solution]/stage:bg-gold-deep",
  },
] as const;

function formatClock(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

export default function SolutionStory() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(
        {
          motionOk: "(prefers-reduced-motion: no-preference)",
          mobile: "(max-width: 820px)",
        },
        (context) => {
          const { motionOk, mobile } = context.conditions as {
            motionOk: boolean;
            mobile: boolean;
          };
          // Reduced motion: no animation. CSS shows a static, readable version.
          if (!motionOk) return;

          const bars = q<HTMLElement>("[data-bar]");
          const copyOutage = q<HTMLElement>('[data-copy="outage"]');
          const copySolution = q<HTMLElement>('[data-copy="solution"]');
          const copyBills = q<HTMLElement>('[data-copy="bills"]');
          const light = q<HTMLElement>("[data-light]");
          const glow = q<HTMLElement>("[data-glow]");
          const blackout = q<HTMLElement>("[data-blackout]");
          const chart = q<HTMLElement>("[data-chart]");
          const dot = root.querySelector<HTMLElement>("[data-dot]");
          const status = root.querySelector<HTMLElement>("[data-status]");
          const timer = root.querySelector<HTMLElement>("[data-timer]");

          // Where the "lights on" circle grows from: the status panel.
          const origin = mobile ? "50% 72%" : "72% 50%";

          // Starting state
          gsap.set(bars, { scaleY: 0.2, transformOrigin: "50% 100%" });
          gsap.set([...copyOutage, ...copySolution], { autoAlpha: 0, y: 24 });
          gsap.set(light, { clipPath: `circle(0% at ${origin})` });

          // Text and state are driven by scroll progress so they stay correct in both directions.
          let lastPhase = "";
          let lastState = "";
          const render = (progress: number) => {
            const t = progress * TOTAL;

            const phase = t < 3.2 ? "bills" : t < 7.2 ? "outage" : "solution";
            if (phase !== lastPhase) {
              root.dataset.phase = phase;
              lastPhase = phase;
            }

            const state: PowerState = t < 4 ? "up" : t < 6.8 ? "down" : "solar";
            if (state !== lastState) {
              lastState = state;
              if (dot) dot.dataset.state = state;
              if (status) status.textContent = STATUS[state];
            }

            // Illustrative clock: runs up to 4 hours while the grid is down.
            const seconds =
              state === "down" ? ((t - 4) / (6.8 - 4)) * 4 * 3600 : 0;
            if (timer) timer.textContent = formatClock(seconds);
          };

          const flicker = gsap.timeline({ defaults: { ease: "none" } });
          flicker
            .to(blackout, { opacity: 0.55, duration: 0.12 })
            .to(blackout, { opacity: 0.1, duration: 0.1 })
            .to(blackout, { opacity: 0.7, duration: 0.12 })
            .to(blackout, { opacity: 0.25, duration: 0.1 })
            .to(blackout, { opacity: 0.8, duration: 0.25 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: mobile ? "+=240%" : "+=320%",
              pin: true,
              scrub: 0.6,
              anticipatePin: 1,
              onUpdate: (self) => render(self.progress),
              onRefresh: (self) => render(self.progress),
            },
          });

          // 0 to 2.5: the bill climbs
          tl.to(bars, { scaleY: 1, stagger: 0.18, duration: 1.2 }, 0);

          // 3 to 4: bills copy out, outage copy in
          tl.to(copyBills, { autoAlpha: 0, y: -24, duration: 0.6 }, 3);
          tl.to(copyOutage, { autoAlpha: 1, y: 0, duration: 0.6 }, 3.4);

          // 3.8 to 4.5: the power cut flickers, then the screen stays dark
          tl.add(flicker, 3.8);
          tl.to(chart, { opacity: 0.45, duration: 0.5 }, 4.2);

          // 6 to 8: outage copy out, lights come on, bills drop flat, solution copy in
          tl.to(copyOutage, { autoAlpha: 0, y: -24, duration: 0.5 }, 6);
          tl.to(
            light,
            { clipPath: `circle(150% at ${origin})`, duration: 1.4 },
            6.4,
          );
          tl.to(blackout, { opacity: 0, duration: 1 }, 6.4);
          tl.to(glow, { opacity: 1, duration: 1 }, 6.8);
          tl.to(chart, { opacity: 1, duration: 0.8 }, 6.8);
          tl.to(
            bars,
            {
              scaleY: (i: number) => FLAT_BAR / BAR_HEIGHTS[i],
              backgroundColor: "#F2A93D",
              stagger: 0.06,
              duration: 1,
            },
            6.8,
          );
          tl.to(copySolution, { autoAlpha: 1, y: 0, duration: 0.8 }, 7.3);

          // 9 to 10: hold the finished state briefly before the pin releases
          tl.to({}, { duration: 1 }, 9);

          render(0);

          return () => {
            root.dataset.phase = "bills";
            if (dot) dot.dataset.state = "up";
            if (status) status.textContent = STATUS.up;
            if (timer) timer.textContent = "00:00:00";
          };
        },
      );

      return () => mm.revert();
    },
    { scope: rootRef },
  );

  return (
    <div
      ref={rootRef}
      data-phase="bills"
      className="group/stage relative h-svh min-h-[600px] overflow-hidden bg-navy-2 pt-[84px] text-ivory motion-reduce:h-auto motion-reduce:min-h-0 motion-reduce:pt-[clamp(72px,10vw,132px)] motion-reduce:pb-[clamp(48px,6vw,80px)] motion-reduce:text-ink"
    >
      {/* Light layer: grows from the status panel when the power comes back */}
      <div
        aria-hidden="true"
        data-light
        className="absolute inset-0 z-0 bg-ivory [clip-path:circle(0%_at_72%_50%)] motion-reduce:[clip-path:none]"
      >
        <div
          data-glow
          className="absolute inset-0 bg-[radial-gradient(circle_at_72%_50%,rgba(242,169,61,.32),transparent_52%)] opacity-0 max-[820px]:bg-[radial-gradient(circle_at_50%_72%,rgba(242,169,61,.32),transparent_52%)] motion-reduce:hidden"
        />
      </div>

      {/* Blackout layer: flickers during the outage */}
      <div
        aria-hidden="true"
        data-blackout
        className="pointer-events-none absolute inset-0 z-[1] bg-[#050a14] opacity-0"
      />

      <Container className="relative z-10 grid h-full grid-cols-[1.05fr_1fr] items-center gap-[clamp(32px,6vw,96px)] max-[820px]:grid-cols-1 max-[820px]:content-center max-[820px]:gap-6 motion-reduce:grid-cols-1">
        <div>
          <h2 id="solutions-title" className="sr-only">
            Solar built around how you use power
          </h2>

          <div className="relative min-h-[300px] max-[820px]:min-h-[240px] motion-reduce:min-h-0">
            {COPY.map((item) => {
              const isSolution = item.key === "solution";
              const isFirst = item.key === "bills";
              return (
                <div
                  key={item.key}
                  data-copy={item.key}
                  className={`absolute inset-0 motion-reduce:static motion-reduce:mb-12 ${
                    isFirst
                      ? ""
                      : "invisible opacity-0 motion-reduce:visible motion-reduce:opacity-100"
                  }`}
                >
                  <p
                    className={`font-head text-[.8rem] font-semibold tracking-[.2em] uppercase motion-reduce:text-gold-deep ${
                      isSolution ? "text-gold-deep" : "text-gold"
                    }`}
                  >
                    {item.eyebrow}
                  </p>
                  <h3
                    className={`mt-4 max-w-[16ch] text-[clamp(2.2rem,4.6vw,3.8rem)] motion-reduce:text-ink ${
                      isSolution ? "text-ink" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-5 max-w-[46ch] text-[1.1rem] ${
                      isSolution
                        ? "text-steel"
                        : "text-ivory/80 motion-reduce:text-steel"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <ol
            aria-hidden="true"
            className="mt-10 flex gap-5 max-[820px]:mt-5 motion-reduce:hidden"
          >
            {STEPS.map((step) => (
              <li
                key={step.key}
                className={`flex flex-col gap-2 text-ivory/50 transition-colors duration-500 ${step.li}`}
              >
                <span
                  className={`block h-[3px] w-8 rounded-full bg-current transition-all duration-500 ${step.bar}`}
                />
                <span className="font-head text-[.72rem] font-semibold tracking-[.16em] uppercase">
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Visual panel: decorative, so hidden from screen readers */}
        <div
          aria-hidden="true"
          className="w-full max-w-[460px] justify-self-end max-[820px]:max-w-none max-[820px]:justify-self-stretch motion-reduce:hidden"
        >
          <div className="rounded-[14px] border border-line-dark bg-navy p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,.65)] max-[820px]:p-5">
            <div className="flex items-center justify-between text-[.72rem] font-semibold tracking-[.16em] text-silver uppercase">
              <span>Monthly bill</span>
              <span>Illustration</span>
            </div>

            <div
              data-chart
              className="mt-5 flex h-[180px] items-end gap-2 max-[820px]:h-[110px]"
            >
              {BAR_HEIGHTS.map((h, i) => (
                <span
                  key={i}
                  data-bar
                  className="block flex-1 rounded-t-[3px] bg-silver"
                  style={{
                    height: `${h}%`,
                    transform: "scaleY(0.2)",
                    transformOrigin: "50% 100%",
                  }}
                />
              ))}
            </div>

            <div className="my-6 h-px bg-line-dark max-[820px]:my-4" />

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span
                  data-dot
                  data-state="up"
                  className="h-3 w-3 rounded-full bg-silver transition-all duration-300 data-[state=down]:bg-ivory/20 data-[state=solar]:bg-gold data-[state=solar]:shadow-[0_0_0_6px_rgba(242,169,61,.2)]"
                />
                <div>
                  <p className="text-[.72rem] tracking-[.14em] text-silver uppercase">
                    Power status
                  </p>
                  <p data-status className="font-head text-base font-semibold">
                    {STATUS.up}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p
                  data-timer
                  className="font-head text-[1.5rem] font-semibold tabular-nums max-[820px]:text-[1.25rem]"
                >
                  00:00:00
                </p>
                <p className="text-[.72rem] tracking-[.14em] text-silver uppercase">
                  Time without power
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
