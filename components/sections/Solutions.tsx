import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import LinkArrow from "@/components/ui/LinkArrow";
import SectionHead from "@/components/ui/SectionHead";

const panels = [
  {
    href: "/residential",
    image: "/images/res.jpg",
    alt: "Installer fitting solar panels on a home rooftop",
    title: "Residential",
    text: "Lower bills and steady power for your home, with backup that keeps the lights on.",
    cta: "Explore residential",
  },
  {
    href: "/commercial",
    image: "/images/com.jpg",
    alt: "Close-up of a commercial solar panel array",
    title: "Commercial",
    text: "Cut operating costs and keep your business running through outages.",
    cta: "Explore commercial",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <SectionHead
          title="Solar built around how you use power"
          description="Whether you are powering a family home or a working business, we design the system around your load, your roof, and your budget."
        />
        <div className="grid grid-cols-[1.15fr_1fr] gap-5 max-[980px]:grid-cols-1">
          {panels.map((panel, i) => (
            <Link
              key={panel.href}
              href={panel.href}
              className={`group relative isolate flex min-h-[540px] items-end overflow-hidden rounded-[6px] text-ivory max-[980px]:min-h-[440px] ${
                i === 1 ? "mt-14 max-[980px]:mt-0" : ""
              }`}
            >
              <Image
                src={panel.image}
                alt={panel.alt}
                fill
                sizes="(max-width: 980px) 100vw, 55vw"
                className="-z-20 object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,20,38,.05)_25%,rgba(11,20,38,.9)_100%)]"
              />
              <div className="w-full p-[clamp(24px,3vw,40px)]">
                <h3 className="mb-2.5 text-[clamp(1.6rem,2.4vw,2.2rem)]">
                  {panel.title}
                </h3>
                <p className="mb-[22px] max-w-[40ch] text-ivory/85">
                  {panel.text}
                </p>
                <LinkArrow>{panel.cta}</LinkArrow>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
