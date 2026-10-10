import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Sequence from "@/components/ui/Sequence";

type Appliance = { label: string; icon: ReactNode };

const appliances = {
  lights: {
    label: "Lights",
    icon: (
      <>
        <path d="M11.5 18.5a8 8 0 1 1 9 0V22h-9z" />
        <path d="M13 26h6" />
      </>
    ),
  },
  fans: {
    label: "Fans",
    icon: (
      <>
        <circle cx="16" cy="16" r="2" />
        <path d="M16 14c-1-5 1-9 4-9 2 0 3 3 0 6M18 16c5-1 9 1 9 4 0 2-3 3-6 0M16 18c1 5-1 9-4 9-2 0-3-3 0-6M14 16c-5 1-9-1-9-4 0-2 3-3 6 0" />
      </>
    ),
  },
  tv: {
    label: "TV",
    icon: (
      <>
        <rect x="3" y="7" width="26" height="16" rx="2" />
        <path d="M11 27h10M16 23v4" />
      </>
    ),
  },
  wifi: {
    label: "Wi-Fi",
    icon: (
      <>
        <path d="M4 12a17 17 0 0 1 24 0M8 17a11 11 0 0 1 16 0M12 21.5a5 5 0 0 1 8 0" />
        <path d="M16 25.5h.01" />
      </>
    ),
  },
  fridge: {
    label: "Fridge",
    icon: (
      <>
        <rect x="8" y="3" width="16" height="26" rx="2" />
        <path d="M8 13h16M12 8v2M12 17v4" />
      </>
    ),
  },
  charging: {
    label: "Phone and laptop charging",
    icon: <path d="M12 4v6M20 4v6M9 10h14v4a7 7 0 0 1-14 0zM16 21v7" />,
  },
  freezer: {
    label: "Freezer",
    icon: (
      <path d="M16 3v26M5 9.5l22 13M27 9.5L5 22.5M12 5l4 3 4-3M12 27l4-3 4 3" />
    ),
  },
  washer: {
    label: "Washing machine",
    icon: (
      <>
        <rect x="5" y="3" width="22" height="26" rx="2.5" />
        <circle cx="16" cy="18" r="6.5" />
        <path d="M9 8h4M12.5 18c1.2-1.5 2.3-1.5 3.5 0s2.3 1.5 3.5 0" />
      </>
    ),
  },
  pump: {
    label: "Water pump",
    icon: <path d="M16 4s8 8.5 8 14a8 8 0 0 1-16 0c0-5.5 8-14 8-14z" />,
  },
  ac: {
    label: "One air conditioner",
    icon: (
      <>
        <rect x="3" y="6" width="26" height="9" rx="2" />
        <path d="M7 11h10M8 19c0 2-1 3-1 5M16 19c0 2-1 3-1 5M24 19c0 2-1 3-1 5" />
      </>
    ),
  },
  acs: {
    label: "Several air conditioners",
    icon: (
      <>
        <rect x="3" y="3" width="26" height="9" rx="2" />
        <rect x="3" y="15" width="26" height="9" rx="2" />
        <path d="M8 8h9M8 20h9M10 27v2M16 27v2M22 27v2" />
      </>
    ),
  },
  kitchen: {
    label: "Kitchen appliances",
    icon: (
      <>
        <rect x="3" y="7" width="26" height="18" rx="2" />
        <rect x="7" y="11" width="13" height="10" rx="1" />
        <path d="M23 12h2M23 16h2M23 20h2" />
      </>
    ),
  },
  office: {
    label: "Home office or workshop",
    icon: (
      <>
        <rect x="6" y="6" width="20" height="14" rx="2" />
        <path d="M3 24h26M12 20l-1 4M20 20l1 4" />
      </>
    ),
  },
} satisfies Record<string, Appliance>;

type Tier = {
  name: string;
  audience: string;
  intro: string;
  runs: Appliance[];
  specs: { label: string; value: string }[];
  /** How many panels / battery modules to draw in the illustration. */
  panels: number;
  batteries: number;
};

const tiers: Tier[] = [
  {
    name: "Essential",
    audience: "For apartments and smaller homes.",
    intro: "What it runs",
    runs: [
      appliances.lights,
      appliances.fans,
      appliances.tv,
      appliances.wifi,
      appliances.fridge,
      appliances.charging,
    ],
    specs: [
      { label: "Solar panels", value: "4 to 6" },
      { label: "Inverter", value: "3 to 5 kVA" },
      { label: "Battery", value: "5 kWh" },
    ],
    panels: 5,
    batteries: 1,
  },
  {
    name: "Comfort",
    audience: "For family homes.",
    intro: "Everything in Essential, plus",
    runs: [
      appliances.freezer,
      appliances.washer,
      appliances.pump,
      appliances.ac,
    ],
    specs: [
      { label: "Solar panels", value: "8 to 12" },
      { label: "Inverter", value: "5 to 8 kVA" },
      { label: "Battery", value: "10 kWh" },
    ],
    panels: 10,
    batteries: 2,
  },
  {
    name: "Whole-home",
    audience: "For large homes and heavy daily use.",
    intro: "Everything in Comfort, plus",
    runs: [appliances.acs, appliances.kitchen, appliances.office],
    specs: [
      { label: "Solar panels", value: "16 to 24" },
      { label: "Inverter", value: "10 to 15 kVA" },
      { label: "Battery", value: "15 to 20 kWh" },
    ],
    panels: 20,
    batteries: 3,
  },
];

const COLS = 6;
const ROWS = 4;

/* Splits "3 to 5 kVA" into the amount and its unit, so the unit can sit on its
   own line on small screens. */
function splitUnit(value: string) {
  const match = value.match(/^(.+?)\s+(kVA|kWh)$/);
  return match
    ? { amount: match[1], unit: match[2] }
    : { amount: value, unit: null };
}

/* Decorative size illustration: filled slots show how big each system is.
   The filled slots switch on one by one when the card scrolls into view. */
function TierVisual({
  panels,
  batteries,
}: {
  panels: number;
  batteries: number;
}) {
  return (
    <div aria-hidden="true">
      <Sequence
        delay={0.25}
        className="rounded-[10px] border border-line-dark bg-navy p-5 max-[560px]:p-4"
      >
        <div className="mb-4 flex items-center justify-between text-[.7rem] font-semibold tracking-[.16em] text-silver uppercase">
          <span>Solar panels</span>
          <span>Battery</span>
        </div>

        <svg viewBox="0 0 360 126" className="block h-auto w-full">
          {Array.from({ length: COLS * ROWS }).map((_, i) => {
            const x = (i % COLS) * 40;
            const y = 6 + Math.floor(i / COLS) * 30;
            const filled = i < panels;
            return filled ? (
              <g key={i} data-seq="cell">
                <rect
                  x={x}
                  y={y}
                  width="34"
                  height="24"
                  rx="3"
                  className="fill-steel stroke-silver"
                />
                <path
                  d={`M${x + 17} ${y}v24M${x} ${y + 12}h34`}
                  className="stroke-silver/50"
                />
              </g>
            ) : (
              <rect
                key={i}
                x={x}
                y={y}
                width="34"
                height="24"
                rx="3"
                strokeDasharray="3 3"
                className="fill-none stroke-silver/30"
              />
            );
          })}

          <g data-seq="fade">
            <path
              d="M246 63h26"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              strokeLinecap="round"
              className="stroke-gold"
            />
            <path
              d="M268 58l6 5-6 5"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-gold"
            />
          </g>

          <rect
            x="318"
            y="0"
            width="20"
            height="5"
            rx="1.5"
            className="fill-silver/60"
          />
          {/* Drawn bottom to top so the battery fills upward */}
          {Array.from({ length: 4 }).map((_, k) => {
            const j = 3 - k;
            const y = 6 + j * 30;
            const filled = j >= 4 - batteries;
            return filled ? (
              <rect
                key={j}
                data-seq="cell"
                x="296"
                y={y}
                width="64"
                height="24"
                rx="4"
                className="fill-gold stroke-gold-deep"
              />
            ) : (
              <rect
                key={j}
                x="296"
                y={y}
                width="64"
                height="24"
                rx="4"
                strokeDasharray="3 3"
                className="fill-none stroke-silver/30"
              />
            );
          })}
        </svg>
      </Sequence>
    </div>
  );
}

export default function ResidentialSizes() {
  return (
    <section
      id="sizes"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead
            title="Pick a system that fits your home"
            description="Sizing depends on what you run. These three starting points cover most homes, and we adjust them after a site assessment."
          />
        </Reveal>

        <div className="border-t border-line-light max-[560px]:grid max-[560px]:gap-14 max-[560px]:border-t-0">
          {tiers.map((tier) => (
            <Reveal
              as="article"
              key={tier.name}
              className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(24px,5vw,80px)] border-b border-line-light py-11 max-[980px]:grid-cols-1 max-[980px]:gap-7 max-[560px]:border-b-0 max-[560px]:py-0"
            >
              <div>
                <h3 className="mb-1.5 text-[clamp(1.5rem,2.2vw,2rem)]">
                  {tier.name}
                </h3>
                <p className="mb-6 text-steel">{tier.audience}</p>

                <p className="mb-4 text-[.72rem] font-semibold tracking-[.14em] text-steel uppercase">
                  {tier.intro}
                </p>
                <ul
                  aria-label={`Appliances the ${tier.name} system runs`}
                  className="grid grid-cols-[repeat(auto-fill,minmax(92px,1fr))] gap-x-3 gap-y-5"
                >
                  {tier.runs.map((item) => (
                    <li
                      key={item.label}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <span className="grid h-12 w-12 place-items-center rounded-full border border-line-light bg-white">
                        <LineIcon className="h-6 w-6 text-gold-deep">
                          {item.icon}
                        </LineIcon>
                      </span>
                      <span className="text-[.82rem] leading-[1.3]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <TierVisual panels={tier.panels} batteries={tier.batteries} />
                <dl className="mt-6 grid grid-cols-3 gap-5 max-[560px]:gap-3">
                  {tier.specs.map((spec) => {
                    const { amount, unit } = splitUnit(spec.value);
                    return (
                      <div
                        key={spec.label}
                        className="border-l-2 border-gold pl-4 max-[560px]:pl-3"
                      >
                        <dt className="text-[.88rem] text-steel max-[560px]:text-[.8rem]">
                          {spec.label}
                        </dt>
                        <dd className="mt-1 font-head text-[1.35rem] leading-[1.25] font-semibold max-[560px]:text-[1.1rem]">
                          <span className="whitespace-nowrap">{amount}</span>
                          {unit && (
                            <>
                              {" "}
                              <span className="max-[560px]:block max-[560px]:text-[.8rem] max-[560px]:font-medium max-[560px]:text-steel">
                                {unit}
                              </span>
                            </>
                          )}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-[.92rem] text-steel max-[560px]:mt-10">
          Panel counts and sizes are indicative. We confirm the final system
          after a free site assessment.
        </p>
      </Container>
    </section>
  );
}
