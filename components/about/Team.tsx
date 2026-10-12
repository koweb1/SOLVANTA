import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

// Placeholders from the design. Replace with your real team photos, names,
// and roles before launch.
const members = [
  { name: "Team member name", role: "Role" },
  { name: "Team member name", role: "Role" },
  { name: "Team member name", role: "Role" },
  { name: "Team member name", role: "Role" },
];

export default function Team() {
  return (
    <section id="team" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="The people behind your system"
            description="Engineers, installers, and support staff who care how the work turns out."
          />
        </Reveal>

        <Reveal
          stagger={0.12}
          className="grid grid-cols-4 gap-[clamp(16px,2.5vw,32px)] max-[980px]:grid-cols-2"
        >
          {members.map((member, i) => (
            <div key={i}>
              <div className="mb-4 grid aspect-[4/5] place-items-center overflow-hidden rounded-md border border-line-dark bg-navy-2">
                <svg
                  viewBox="0 0 300 140"
                  aria-hidden="true"
                  className="h-auto w-[46%] opacity-50"
                  fill="none"
                  strokeWidth={26}
                  strokeLinecap="round"
                >
                  <path
                    d="M150,70 C110,20 30,20 30,70 C30,120 110,120 150,70"
                    className="stroke-silver"
                  />
                  <path
                    d="M150,70 C190,20 270,20 270,70 C270,120 190,120 150,70"
                    className="stroke-silver"
                  />
                </svg>
              </div>
              <h3 className="text-[1.1rem]">{member.name}</h3>
              <p className="text-[.95rem] text-silver">{member.role}</p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
