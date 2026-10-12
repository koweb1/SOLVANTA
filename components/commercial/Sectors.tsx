import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const sectors = [
  {
    title: "Offices and retail",
    text: "Cut daytime cooling and lighting costs, and keep tills, servers, and lifts running through outages.",
  },
  {
    title: "Factories and manufacturing",
    text: "Power heavy machinery and keep production lines moving without leaning on diesel.",
  },
  {
    title: "Schools and universities",
    text: "Reliable power for classrooms, labs, and hostels, with predictable costs across the year.",
  },
  {
    title: "Hospitals and clinics",
    text: "Continuous power for critical equipment, theatres, and cold storage.",
  },
  {
    title: "Hotels and hospitality",
    text: "Round-the-clock comfort for guests, without generator noise or fumes.",
  },
  {
    title: "Farms and agro-processing",
    text: "Run pumps, cold rooms, and processing lines on the power you generate on site.",
  },
];

export default function Sectors() {
  return (
    <section id="sectors" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="Businesses we power"
            description="Every sector has a different reason to go solar. We design around yours."
          />
        </Reveal>

        <Reveal as="ul" stagger={0.09} className="border-t border-line-dark">
          {sectors.map((sector) => (
            <li
              key={sector.title}
              className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-baseline gap-[clamp(16px,4vw,64px)] border-b border-line-dark py-[30px] max-[980px]:grid-cols-1 max-[980px]:gap-1.5"
            >
              <h3 className="text-[clamp(1.35rem,2.2vw,1.9rem)]">
                {sector.title}
              </h3>
              <p className="max-w-[52ch] text-silver">{sector.text}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
