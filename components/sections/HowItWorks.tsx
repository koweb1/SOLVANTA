import Container from "@/components/ui/Container";
import SectionHead from "@/components/ui/SectionHead";

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

export default function HowItWorks() {
  return (
    <section id="how" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <SectionHead
          tone="dark"
          title="From first call to first saving"
          description="One team handles the whole job, so you always know what happens next."
        />
        <ol className="relative grid grid-cols-4 before:absolute before:inset-x-0 before:top-[27px] before:h-[1.5px] before:bg-linear-to-r before:from-silver before:to-gold before:content-[''] max-[980px]:grid-cols-2 max-[980px]:gap-y-11 max-[980px]:before:hidden max-[560px]:grid-cols-1">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.title} className="relative pr-8">
                <div
                  className={`relative mb-7 grid h-14 w-14 place-items-center rounded-full border-[1.5px] font-head text-[1.1rem] font-semibold ${
                    isLast
                      ? "border-gold bg-gold text-[#1a1204]"
                      : "border-silver bg-navy"
                  }`}
                >
                  {i + 1}
                </div>
                <h3 className="mb-2.5 text-[1.25rem]">{step.title}</h3>
                <p className="text-[.97rem] text-silver">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
