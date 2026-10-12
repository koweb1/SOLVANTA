import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const services = [
  {
    title: "Design",
    text: "We study your bills and your appliances, then size the panels, inverter, and battery to match. No guesswork and no oversized systems.",
  },
  {
    title: "Installation",
    text: "Our engineers mount the panels, wire the system, and set up the inverter and battery, with every connection tested before handover.",
  },
  {
    title: "Battery storage",
    text: "We fit batteries that keep your home or business running through outages and through the night.",
  },
  {
    title: "Monitoring and support",
    text: "You see how your system performs, and we stay available for questions, checks, and maintenance.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="What we do"
            description="One team looks after the whole job, from the first visit to the day your system is switched on and long after."
          />
        </Reveal>

        <Reveal as="ul" stagger={0.1} className="border-t border-line-dark">
          {services.map((service) => (
            <li
              key={service.title}
              className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-baseline gap-[clamp(16px,4vw,64px)] border-b border-line-dark py-[30px] max-[980px]:grid-cols-1 max-[980px]:gap-1.5"
            >
              <h3 className="text-[clamp(1.35rem,2.2vw,1.9rem)]">
                {service.title}
              </h3>
              <p className="max-w-[52ch] text-silver">{service.text}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
