import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import LinkArrow from "@/components/ui/LinkArrow";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const projects = [
  {
    image: "/images/p1.jpg",
    alt: "Apartment complex with solar panels across its flat roofs",
    name: "Lekki Court Apartments",
    location: "Lekki, Lagos",
    type: "Residential",
    size: "120 kW",
  },
  {
    image: "/images/p2.jpg",
    alt: "Aerial view of a car park covered in solar canopies",
    name: "Ikeja Business Park",
    location: "Ikeja, Lagos",
    type: "Commercial",
    size: "300 kW",
  },
  {
    image: "/images/p3.jpg",
    alt: "Mid-rise building with a solar canopy over its rooftop terrace",
    name: "Maitama Residences",
    location: "Maitama, Abuja",
    type: "Residential",
    size: "22 kW",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead title="Recent installations" tone="dark">
            <LinkArrow href="/projects" tone="dark">
              See all projects
            </LinkArrow>
          </SectionHead>
        </Reveal>

        <Reveal
          stagger={0.15}
          className="grid h-[clamp(560px,62vw,760px)] grid-cols-[1.5fr_1fr] grid-rows-[1fr_1fr] gap-5 max-[980px]:h-auto max-[980px]:grid-cols-1 max-[980px]:grid-rows-none"
        >
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
              <Parallax amount={4} className="-z-20">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 980px) 100vw, 60vw"
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
                />
              </Parallax>
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,0)_35%,rgba(11,20,38,.9)_100%)]"
              />
              <div className="flex w-full items-end justify-between gap-4 px-7 py-[26px] max-[560px]:gap-3 max-[560px]:px-5 max-[560px]:py-5">
                <div className="min-w-0 flex-1">
                  <h3 className="mb-2 text-[1.2rem] leading-[1.25]">
                    {project.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <span className="text-[.9rem] text-ivory/80">
                      {project.location}
                    </span>
                    <span className="rounded-full border border-ivory/30 px-2.5 py-0.5 text-[.68rem] font-semibold tracking-[.12em] text-ivory/85 uppercase">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="shrink-0 text-right whitespace-nowrap">
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
        </Reveal>
      </Container>
    </section>
  );
}
