import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Sequence from "@/components/ui/Sequence";

const steps = [
  {
    title: "Consultation",
    text: "Tell us what you spend on power today and what you need to run. We visit your site.",
  },
  {
    title: "Custom design",
    text: "We size the system, choose the equipment, and send you a clear quote with no surprises.",
  },
  {
    title: "Installation",
    text: "Our engineers install, test, and commission the system, then walk you through it.",
  },
  {
    title: "Start saving",
    text: "Power flows, bills drop, and our support team stays on hand for as long as you need.",
  },
];

// Seconds between one step and the next. The line takes 4 x this to cross the row.
const STEP = 0.4;

export default function HowItWorks() {
  return (
    <section id="how" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="From first call to first saving"
            description="One team handles the whole job, so you always know what happens next."
          />
        </Reveal>

        <Sequence className="relative">
          {/* Large screens: one line drawn across, timed to the circles */}
          <span
            aria-hidden="true"
            data-seq="line"
            data-seq-pos="0"
            data-seq-dur={STEP * 4}
            className="absolute inset-x-0 top-[27px] h-[1.5px] bg-gold/70 max-[980px]:hidden"
          />

          <ol className="grid grid-cols-4 max-[980px]:grid-cols-1">
            {steps.map((step, i) => {
              const at = i * STEP;
              return (
                <li
                  key={step.title}
                  className="relative pr-8 max-[980px]:grid max-[980px]:grid-cols-[44px_1fr] max-[980px]:gap-x-5 max-[980px]:pr-0 max-[980px]:pb-10 max-[980px]:last:pb-0"
                >
                  {/* Mobile only: vertical line down to the next step */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      data-seq="line"
                      data-seq-pos={at + 0.25}
                      data-seq-dur="0.4"
                      className="absolute top-[52px] bottom-2 left-[21px] hidden w-[1.5px] bg-gold/70 max-[980px]:block"
                    />
                  )}

                  <div
                    data-seq="pop"
                    data-seq-pos={at}
                    className="relative mb-7 grid h-14 w-14 place-items-center rounded-full bg-gold font-head text-[1.1rem] font-semibold text-[#1a1204] max-[980px]:mb-0 max-[980px]:h-11 max-[980px]:w-11 max-[980px]:row-span-2 max-[980px]:text-base"
                  >
                    {i + 1}
                  </div>

                  <h3
                    data-seq="text"
                    data-seq-pos={at + 0.15}
                    className="mb-2.5 text-[1.25rem] max-[980px]:mt-2.5 max-[980px]:mb-1.5 max-[980px]:text-[1.15rem]"
                  >
                    {step.title}
                  </h3>
                  <p
                    data-seq="text"
                    data-seq-pos={at + 0.25}
                    className="text-[.97rem] text-silver max-[980px]:text-[.95rem]"
                  >
                    {step.text}
                  </p>
                </li>
              );
            })}
          </ol>
        </Sequence>
      </Container>
    </section>
  );
}
