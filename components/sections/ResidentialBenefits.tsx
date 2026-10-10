import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import SectionHead from "@/components/ui/SectionHead";

type Benefit = { title: string; text: string; icon: ReactNode };

const benefits: Benefit[] = [
  {
    title: "Lower bills",
    text: "Use your own power by day and stored power at night, so you buy less from the grid or the generator.",
    icon: (
      <>
        <path d="M4 9l9 9 5-5 10 10" />
        <path d="M20 23h8v-8" />
      </>
    ),
  },
  {
    title: "Power through outages",
    text: "A battery keeps your lights, fridge, and Wi-Fi running when the grid goes down.",
    icon: <path d="M18 3L7 18h8l-1 11 11-15h-8z" />,
  },
  {
    title: "Quiet and clean",
    text: "No fuel, no noise, and no fumes. Nothing to refill and nothing to service every week.",
    icon: (
      <>
        <path d="M5 12h5l7-6v20l-7-6H5z" />
        <path d="M22 12l6 8M28 12l-6 8" />
      </>
    ),
  },
  {
    title: "Grows with you",
    text: "Add panels or battery capacity later as your home and your power needs grow.",
    icon: (
      <>
        <rect x="5" y="19" width="6" height="8" />
        <rect x="13" y="13" width="6" height="14" />
        <rect x="21" y="6" width="6" height="21" />
      </>
    ),
  },
];

export default function ResidentialBenefits() {
  return (
    <section id="why" className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink">
      <Container>
        <SectionHead
          title="Why homeowners choose solar"
          description="Solar with storage gives you steady power and a lower bill, whatever the grid is doing."
        />

        <ul className="grid grid-cols-4 gap-[clamp(24px,3vw,48px)] max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-8">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="border-t-2 border-ink pt-6 max-[560px]:grid max-[560px]:grid-cols-[48px_1fr] max-[560px]:gap-x-4 max-[560px]:border-t-0 max-[560px]:pt-0"
            >
              <div className="mb-[18px] max-[560px]:row-span-2 max-[560px]:mb-0 max-[560px]:grid max-[560px]:h-12 max-[560px]:w-12 max-[560px]:place-items-center max-[560px]:rounded-xl max-[560px]:bg-gold/15">
                <LineIcon className="h-[34px] w-[34px] text-gold-deep max-[560px]:h-6 max-[560px]:w-6">
                  {benefit.icon}
                </LineIcon>
              </div>
              <h3 className="mb-2 text-[1.2rem] max-[560px]:mb-1 max-[560px]:text-[1.1rem]">
                {benefit.title}
              </h3>
              <p className="text-[.97rem] text-steel max-[560px]:text-[.95rem]">
                {benefit.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
