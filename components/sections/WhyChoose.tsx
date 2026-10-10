import type { ReactNode } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import Reveal from "@/components/ui/Reveal";

type Reason = { title: string; text: string; icon: ReactNode };

const reasons: Reason[] = [
  {
    title: "Premium components",
    text: "We specify equipment we would put on our own roofs, from panels to inverters to batteries.",
    icon: (
      <path d="M16 4l3.2 7.2L27 12l-5.8 5.2L22.8 25 16 21l-6.8 4 1.6-7.8L5 12l7.8-.8z" />
    ),
  },
  {
    title: "Expert installation",
    text: "Neat wiring, secure mounting, and a full test before we hand over the system.",
    icon: (
      <>
        <path d="M20 6l6 6-14 14H6v-6z" />
        <path d="M17 9l6 6" />
      </>
    ),
  },
  {
    title: "Designed for your load",
    text: "Every system is sized to your real consumption, so you do not overpay for capacity you will not use.",
    icon: <path d="M5 20h22M7 20V9h18v11M12 26h8" />,
  },
  {
    title: "Warranty and after-sales care",
    text: "Clear warranty terms and a support line that answers when you call.",
    icon: <path d="M16 4l10 4v7c0 6-4.2 10.4-10 13C10.2 25.4 6 21 6 15V8z" />,
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink">
      <Container className="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start gap-[clamp(40px,7vw,110px)] max-[980px]:grid-cols-1">
        <Reveal
          variant="left"
          className="sticky top-[120px] max-[980px]:static"
        >
          <h2>Why customers choose Solvanta</h2>
          <p className="mt-[22px] text-steel">
            Solar is a long-term purchase. We build every system to keep working
            well after the sales conversation is forgotten.
          </p>
          <Button href="/about" variant="dark" className="mt-8">
            About Solvanta
          </Button>
        </Reveal>

        <Reveal as="ul" stagger={0.12} className="border-t border-line-light">
          {reasons.map((reason) => (
            <li
              key={reason.title}
              className="grid grid-cols-[44px_1fr] gap-5 border-b border-line-light py-[30px]"
            >
              <LineIcon className="h-[34px] w-[34px] text-gold-deep">
                {reason.icon}
              </LineIcon>
              <div>
                <h3 className="mb-1.5 text-[1.25rem]">{reason.title}</h3>
                <p className="text-steel">{reason.text}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
