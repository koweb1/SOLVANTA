import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";

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

export default function ResidentialInstallation() {
  return (
    <section
      id="installation"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <SectionHead
          title="From first visit to first saving"
          description="One team handles the whole job, from your roof to your battery."
        />

        <ol className="relative grid grid-cols-5 before:absolute before:top-[27px] before:right-[20%] before:left-0 before:h-[1.5px] before:bg-[linear-gradient(90deg,var(--color-steel),var(--color-gold))] before:content-[''] max-[980px]:grid-cols-1 max-[980px]:before:hidden">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={step.title}
                className="relative pr-8 max-[980px]:grid max-[980px]:grid-cols-[44px_1fr] max-[980px]:gap-x-5 max-[980px]:pr-0 max-[980px]:pb-10 max-[980px]:last:pb-0"
              >
                {/* Small screens only: vertical line down to the next step */}
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[52px] bottom-2 left-[21px] hidden w-[1.5px] bg-gold/70 max-[980px]:block"
                  />
                )}

                <div
                  className={`relative mb-7 grid h-14 w-14 place-items-center rounded-full border-[1.5px] font-head text-[1.1rem] font-semibold max-[980px]:mb-0 max-[980px]:row-span-2 max-[980px]:h-11 max-[980px]:w-11 max-[980px]:text-base ${
                    last
                      ? "border-gold bg-gold text-[#1a1204]"
                      : "border-steel bg-ivory"
                  }`}
                >
                  {i + 1}
                </div>

                <h3 className="mb-2.5 text-[1.25rem] max-[980px]:mt-2.5 max-[980px]:mb-1.5 max-[980px]:text-[1.15rem]">
                  {step.title}
                </h3>
                <p className="text-[.97rem] text-steel max-[980px]:text-[.95rem]">
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-[clamp(56px,7vw,96px)] grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-[clamp(32px,6vw,96px)] border-t border-line-light pt-[clamp(40px,5vw,64px)] max-[980px]:grid-cols-1">
          <div>
            <h2 className="text-[clamp(1.7rem,2.8vw,2.3rem)]">
              What is included
            </h2>
            <p className="mt-4 text-steel">
              Every residential installation covers the full job, from mounting
              to handover.
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-10 gap-y-4 max-[560px]:grid-cols-1">
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
          </ul>
        </div>
      </Container>
    </section>
  );
}
