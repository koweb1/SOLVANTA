import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

type Credential = { title: string; text: string; icon: ReactNode };

const shield = (
  <>
    <path d="M16 4l10 4v7c0 6-4.2 10.4-10 13C10.2 25.4 6 21 6 15V8z" />
    <path d="M11.5 16l3.5 3.5 6-7" />
  </>
);

// Placeholders from the design. Replace with your real certifications and
// partner names before launch.
const credentials: Credential[] = [
  { title: "Certification name", text: "Issued by", icon: shield },
  { title: "Certification name", text: "Issued by", icon: shield },
  {
    title: "Equipment partner",
    text: "Panels or inverters",
    icon: (
      <>
        <rect x="4" y="9" width="24" height="14" rx="2" />
        <path d="M9 9v14M16 9v14M23 9v14M4 16h24" />
      </>
    ),
  },
  {
    title: "Equipment partner",
    text: "Batteries",
    icon: (
      <>
        <rect x="3" y="10" width="22" height="13" rx="2" />
        <path d="M28 14v5M9 14v5M14 14v5" />
      </>
    ),
  },
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead
            title="Credentials and partners"
            description="The certifications we hold and the equipment makers we work with."
          />
        </Reveal>

        <Reveal
          stagger={0.12}
          className="grid grid-cols-4 gap-[clamp(16px,2.5vw,32px)] max-[980px]:grid-cols-2"
        >
          {credentials.map((item, i) => (
            <div
              key={i}
              className="flex min-h-[150px] flex-col justify-between gap-5 rounded-lg border border-dashed border-line-light px-6 py-7"
            >
              <LineIcon className="h-8 w-8 text-gold-deep">
                {item.icon}
              </LineIcon>
              <div>
                <h3 className="text-[1.05rem]">{item.title}</h3>
                <p className="text-[.9rem] text-steel">{item.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
