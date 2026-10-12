import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import Reveal from "@/components/ui/Reveal";

type Saving = { title: string; text: string; icon: ReactNode };

const savings: Saving[] = [
  {
    title: "Less diesel",
    text: "Solar and storage cover the hours a generator would otherwise run, so you burn and buy less fuel.",
    icon: (
      <>
        <rect x="4" y="11" width="22" height="13" rx="2" />
        <path d="M26 15h3v5h-3M8 11V8h8v3M10 24v3M20 24v3" />
      </>
    ),
  },
  {
    title: "Lower grid bills",
    text: "You generate power during the day, when most business loads are at their highest.",
    icon: (
      <>
        <path d="M4 9l9 9 5-5 10 10" />
        <path d="M20 23h8v-8" />
      </>
    ),
  },
  {
    title: "Fewer interruptions",
    text: "Batteries bridge outages, so machines, servers, and cold rooms stay on.",
    icon: <path d="M18 3L7 18h8l-1 11 11-15h-8z" />,
  },
  {
    title: "Predictable costs",
    text: "Sunlight has no fuel price, so a large part of your energy cost stays fixed for years.",
    icon: (
      <>
        <circle cx="16" cy="16" r="11" />
        <path d="M16 9v7l4.5 3" />
      </>
    ),
  },
];

export default function Savings() {
  return (
    <section
      id="savings"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(40px,7vw,110px)] max-[980px]:grid-cols-1">
        <Reveal
          variant="left"
          className="sticky top-[120px] max-[980px]:static"
        >
          <h2>Where the savings come from</h2>
          <p className="mt-[22px] text-steel">
            A commercial system cuts cost in four places. Our report shows you
            the figures for your site before you commit.
          </p>
          <Button href="/contact" variant="dark" className="mt-8">
            Request a savings report
          </Button>
        </Reveal>

        <Reveal as="ul" stagger={0.12} className="border-t border-line-light">
          {savings.map((item) => (
            <li
              key={item.title}
              className="grid grid-cols-[44px_1fr] gap-5 border-b border-line-light py-[30px]"
            >
              <LineIcon className="h-[34px] w-[34px] text-gold-deep">
                {item.icon}
              </LineIcon>
              <div>
                <h3 className="mb-1.5 text-[1.25rem]">{item.title}</h3>
                <p className="text-steel">{item.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
