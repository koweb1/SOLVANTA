import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import LinkArrow from "@/components/ui/LinkArrow";
import SectionHead from "@/components/ui/SectionHead";

const projects = [
  {
    image: "/images/p1.jpg",
    alt: "Installer laying a solar panel on a rooftop",
    name: "Lekki Family Residence",
    location: "Lekki, Lagos",
    type: "Residential",
    size: "8 kW",
  },
  {
    image: "/images/p2.jpg",
    alt: "Solar panel secured with a mounting clamp",
    name: "Ikeja Distribution Warehouse",
    location: "Ikeja, Lagos",
    type: "Commercial",
    size: "120 kW",
  },
  {
    image: "/images/p3.jpg",
    alt: "Mounting rail being fitted on a flat roof",
    name: "Maitama Townhouse",
    location: "Maitama, Abuja",
    type: "Residential",
    size: "6 kW",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <SectionHead title="Recent installations" tone="dark">
          <LinkArrow href="/projects" tone="dark">
            See all projects
          </LinkArrow>
        </SectionHead>

        <div className="grid h-[clamp(560px,62vw,760px)] grid-cols-[1.5fr_1fr] grid-rows-[1fr_1fr] gap-5 max-[980px]:h-auto max-[980px]:grid-cols-1 max-[980px]:grid-rows-none">
          {projects.map((project, i) => (
            <Link
              key={project.image}
              href="/projects"
              className={`group relative isolate flex items-end overflow-hidden rounded-[6px] ${
                i === 0
                  ? "row-span-2 max-[980px]:row-auto max-[980px]:min-h-[420px]"
                  : "max-[980px]:min-h-[340px]"
              }`}
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 980px) 100vw, 60vw"
                className="-z-20 object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,0)_40%,rgba(11,20,38,.88)_100%)]"
              />
              <div className="flex w-full items-end justify-between gap-4 px-7 py-[26px]">
                <div>
                  <h3 className="mb-1 text-[1.2rem]">{project.name}</h3>
                  <small className="text-[.9rem] text-ivory/80">
                    {project.location} · {project.type}
                  </small>
                </div>
                <div className="text-right whitespace-nowrap">
                  <span className="block font-head text-[1.15rem] font-semibold text-gold">
                    {project.size}
                  </span>
                  <span className="block text-[.7rem] tracking-[.14em] text-ivory/70 uppercase">
                    System size
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
