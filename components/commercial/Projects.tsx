import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import LinkArrow from "@/components/ui/LinkArrow";
import Parallax from "@/components/ui/Parallax";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

// Placeholders from the design. Replace with real project details later.
const projects = [
  {
    image: "/images/com-p1.jpg",
    alt: "Solar panel secured with a mounting clamp on a large array",
    name: "Project name",
    detail: "Location · Factory",
    size: "000 kW",
  },
  {
    image: "/images/com-p2.jpg",
    alt: "Close-up of a commercial solar panel array",
    name: "Project name",
    detail: "Location · School",
    size: "000 kW",
  },
  {
    image: "/images/com-p3.jpg",
    alt: "Mounting rail being fitted on a flat commercial roof",
    name: "Project name",
    detail: "Location · Hotel",
    size: "000 kW",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead title="Commercial installations">
            <LinkArrow href="/projects">See all projects</LinkArrow>
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
              className={`group relative isolate flex items-end overflow-hidden rounded-[6px] text-ivory ${
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
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,0)_40%,rgba(11,20,38,.88)_100%)]"
              />
              <div className="flex w-full items-end justify-between gap-4 px-7 py-[26px] max-[560px]:px-5 max-[560px]:py-5">
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-[1.2rem]">{project.name}</h3>
                  <small className="block text-[.9rem] text-ivory/80">
                    {project.detail}
                  </small>
                </div>
                <span className="font-head font-semibold whitespace-nowrap text-gold">
                  {project.size}
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
