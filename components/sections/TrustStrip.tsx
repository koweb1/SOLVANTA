import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import Reveal from "@/components/ui/Reveal";

type TrustItem = { title: string; text: string; icon: ReactNode };

const items: TrustItem[] = [
  {
    title: "Free site assessment",
    text: "We visit, measure, and size your system before you pay.",
    icon: (
      <>
        <circle cx="16" cy="16" r="11" />
        <path d="M16 9v7l4.5 3" />
      </>
    ),
  },
  {
    title: "Quality components",
    text: "Panels, inverters, and batteries chosen for long service life.",
    icon: (
      <>
        <rect x="4" y="9" width="24" height="14" rx="2" />
        <path d="M9 9v14M16 9v14M23 9v14M4 16h24" />
      </>
    ),
  },
  {
    title: "Warranty-backed",
    text: "Written warranties on equipment and installation work.",
    icon: (
      <>
        <path d="M16 4l10 4v7c0 6-4.2 10.4-10 13C10.2 25.4 6 21 6 15V8z" />
        <path d="M11.5 16l3.5 3.5 6-7" />
      </>
    ),
  },
  {
    title: "Ongoing support",
    text: "A real team to call after the installers have left.",
    icon: (
      <>
        <path d="M6 20v-4a10 10 0 0120 0v4" />
        <rect x="4" y="19" width="5" height="8" rx="2" />
        <rect x="23" y="19" width="5" height="8" rx="2" />
      </>
    ),
  },
];

function itemClasses(i: number) {
  const base =
    "flex items-start gap-4 border-line-dark max-[560px]:border-l-0 max-[560px]:py-5 max-[560px]:pl-0";
  const desktop = i === 0 ? "py-[30px] pr-7 pl-0" : "border-l px-7 py-[30px]";
  const tablet = [
    i === 2 ? "max-[980px]:border-l-0 max-[980px]:pl-0" : "",
    i >= 2 ? "max-[980px]:border-t" : "",
  ].join(" ");
  const mobile = i > 0 ? "max-[560px]:border-t" : "";
  return `${base} ${desktop} ${tablet} ${mobile}`;
}

export default function TrustStrip() {
  return (
    <section
      aria-label="Why homeowners and businesses trust us"
      className="border-y border-line-dark bg-navy-2"
    >
      <Container>
        <Reveal
          as="ul"
          variant="fade"
          stagger={0.1}
          className="grid grid-cols-4 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1"
        >
          {items.map((item, i) => (
            <li key={item.title} className={itemClasses(i)}>
              <LineIcon className="mt-[3px] h-[30px] w-[30px] flex-none text-gold">
                {item.icon}
              </LineIcon>
              <div>
                <strong className="mb-0.5 block font-head text-base font-semibold">
                  {item.title}
                </strong>
                <span className="block text-[.9rem] leading-[1.45] text-silver">
                  {item.text}
                </span>
              </div>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
