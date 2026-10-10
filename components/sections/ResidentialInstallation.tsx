import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Sequence from "@/components/ui/Sequence";

const steps = [
  {
    title: "Site assessment",
    text: "We visit, check your roof and wiring, and list what you need to run.",
  },
  {
    title: "Design and quote",
    text: "We size the panels, inverter, and battery, then send a clear quote.",
  },
  {
    title: "Installation",
    text: "Our team mounts the panels and wires the system into your home.",
  },
  {
    title: "Battery and testing",
    text: "We set up the inverter and battery, then test everything under load.",
  },
  {
    title: "Handover",
    text: "We show you how it works, set up monitoring, and stay on call for support.",
  },
];

const included = [
  "Panel mounting and wiring",
  "Inverter setup and configuration",
  "Battery installation and commissioning",
  "Full system testing before handover",
  "Equipment and workmanship warranty",
  "Monitoring app setup",
  "A walkthrough of your system",
  "After-sales support",
];

// Seconds between one step and the next. The line takes 4 x this to reach step 5.
const STEP = 0.4;

export default function ResidentialInstallation() {
  return (
    <section
      id="installation"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead
            title="From first visit to first saving"
            description="One team handles the whole job, from your roof to your battery."
          />
        </Reveal>

        <Sequence className="relative">
          {/* Large screens: one line drawn across, timed to the circles */}
          <span
            aria-hidden="true"
            data-seq="line"
            data-seq-pos="0"
            data-seq-dur={STEP * 4}
            className="absolute top-[27px] right-[20%] left-0 h-[1.5px] bg-gold/70 max-[1100px]:hidden"
          />

          <ol className="grid grid-cols-5 max-[1100px]:grid-cols-1">
            {steps.map((step, i) => {
              const last = i === steps.length - 1;
              const at = i * STEP;
              return (
                <li
                  key={step.title}
                  className="relative pr-[clamp(28px,3.6vw,56px)] max-[1100px]:grid max-[1100px]:grid-cols-[44px_1fr] max-[1100px]:gap-x-5 max-[1100px]:pr-0 max-[1100px]:pb-10 max-[1100px]:last:pb-0"
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
                    className="mb-2.5 text-[1.25rem] max-[1100px]:mt-2.5 max-[1100px]:mb-1.5 max-[1100px]:text-[1.15rem]"
                  >
                    {step.title}
                  </h3>
                  <p
                    data-seq="text"
                    data-seq-pos={at + 0.25}
                    className="text-[.97rem] text-steel max-[1100px]:text-[.95rem]"
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
              Every residential installation covers the full job, from mounting
              to handover.
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
