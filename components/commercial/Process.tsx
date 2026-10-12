import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Sequence from "@/components/ui/Sequence";

const steps = [
  {
    title: "Energy audit",
    text: "We study your bills, load profile, and operating hours.",
  },
  {
    title: "Site survey",
    text: "Engineers check roof strength, space, shading, and your electrical room.",
  },
  {
    title: "Design and ROI report",
    text: "You receive drawings, equipment lists, and a clear savings projection.",
  },
  {
    title: "Approvals and supply",
    text: "We prepare the paperwork your site needs and order the equipment.",
  },
  {
    title: "Installation",
    text: "Phased work planned around your operating hours.",
  },
  {
    title: "Commissioning and service",
    text: "Testing, staff training, live monitoring, and a maintenance plan.",
  },
];

const included = [
  "Engineering drawings and design report",
  "ROI and savings projection",
  "Installation planned around your operations",
  "Three-phase inverter and battery commissioning",
  "Training for your facilities team",
  "Live monitoring dashboard",
  "Equipment and workmanship warranty",
  "Maintenance plan and priority support",
];

// Seconds between one step and the next. The line takes 5 x this to reach step 6.
const STEP = 0.35;

export default function Process() {
  return (
    <section
      id="process"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead
            title="How we deliver a commercial project"
            description="Six stages, one accountable team, and no surprises on your site."
          />
        </Reveal>

        <Sequence className="relative">
          {/* Large screens: one line drawn across, timed to the circles */}
          <span
            aria-hidden="true"
            data-seq="line"
            data-seq-pos="0"
            data-seq-dur={STEP * 5}
            className="absolute top-[27px] right-[calc(100%/6)] left-0 h-[1.5px] bg-gold/70 max-[1100px]:hidden"
          />

          <ol className="grid grid-cols-6 max-[1100px]:grid-cols-1">
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              const at = i * STEP;
              return (
                <li
                  key={step.title}
                  className="relative pr-5 max-[1100px]:grid max-[1100px]:grid-cols-[44px_1fr] max-[1100px]:gap-x-5 max-[1100px]:pr-0 max-[1100px]:pb-10 max-[1100px]:last:pb-0"
                >
                  {/* Smaller screens only: vertical line down to the next step */}
                  {!last && (
                    <span
                      aria-hidden="true"
                      data-seq="line"
                      data-seq-pos={at + 0.25}
                      data-seq-dur="0.4"
                      className="absolute top-[52px] bottom-2 left-[21px] hidden w-[1.5px] bg-gold/70 max-[1100px]:block"
                    />
                  )}

                  <div
                    data-seq="pop"
                    data-seq-pos={at}
                    className="relative mb-7 grid h-14 w-14 place-items-center rounded-full bg-gold font-head text-[1.1rem] font-semibold text-[#1a1204] max-[1100px]:mb-0 max-[1100px]:row-span-2 max-[1100px]:h-11 max-[1100px]:w-11 max-[1100px]:text-base"
                  >
                    {i + 1}
                  </div>

                  <h3
                    data-seq="text"
                    data-seq-pos={at + 0.15}
                    className="mb-2.5 text-[1.1rem] max-[1100px]:mt-2.5 max-[1100px]:mb-1.5 max-[1100px]:text-[1.15rem]"
                  >
                    {step.title}
                  </h3>
                  <p
                    data-seq="text"
                    data-seq-pos={at + 0.25}
                    className="text-[.92rem] text-steel max-[1100px]:text-[.95rem]"
                  >
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </Sequence>

        <div className="mt-[clamp(56px,7vw,96px)] grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(32px,6vw,96px)] border-t border-line-light pt-[clamp(40px,5vw,64px)] max-[980px]:grid-cols-1">
          <Reveal>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)]">
              What is included
            </h2>
            <p className="mt-4 text-steel">
              Every commercial project covers engineering, installation, and the
              first years of running the system.
            </p>
          </Reveal>

          <Reveal
            as="ul"
            stagger={0.07}
            className="grid grid-cols-2 gap-x-10 gap-y-4 max-[560px]:grid-cols-1"
          >
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-[3px] h-5 w-5 flex-none text-gold-deep"
                >
                  <circle cx="10" cy="10" r="9" />
                  <path d="M6 10.5l2.7 2.7L14 7.5" strokeWidth={1.6} />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
