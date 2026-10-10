import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const columns = ["Battery A", "Battery B", "Battery C"];

const rows = [
  {
    label: "Capacity",
    values: ["5 kWh", "10 kWh", "15 kWh"],
    big: true,
  },
  {
    label: "Pairs with",
    values: ["Essential", "Comfort", "Whole-home"],
  },
  {
    label: "Keeps running",
    values: [
      "Lights, fans, TV, Wi-Fi, fridge",
      "Essentials plus one air conditioner",
      "Most of the home",
    ],
  },
  {
    label: "Expandable",
    values: ["Add modules later", "Add modules later", "Add modules later"],
  },
  {
    label: "Warranty",
    values: ["00 years", "00 years", "00 years"],
  },
];

export default function ResidentialBatteries() {
  return (
    <section id="batteries" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="Batteries we install"
            description="Choose the storage that matches how much of your home you want to keep running when the grid is down."
          />
        </Reveal>

        <Reveal>
          <div
            role="region"
            aria-label="Battery comparison"
            tabIndex={0}
            className="overflow-x-auto rounded-lg border border-line-dark"
          >
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-line-dark px-[26px] py-[22px] text-left align-top"
                  >
                    <span className="sr-only">Feature</span>
                  </th>
                  {columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-b border-line-dark px-[26px] py-[22px] text-left align-top font-head text-[1.15rem] font-semibold"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <Reveal
                as="tbody"
                variant="fade"
                stagger={0.12}
                className="[&>tr:last-child>*]:border-b-0"
              >
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="w-[22%] border-b border-line-dark px-[26px] py-[22px] text-left align-top text-[.95rem] font-medium text-silver"
                    >
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={`${row.label}-${i}`}
                        className={`border-b border-line-dark px-[26px] py-[22px] text-left align-top ${
                          row.big
                            ? "font-head text-[1.6rem] font-semibold text-gold"
                            : ""
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </Reveal>
            </table>
          </div>
        </Reveal>

        <Reveal className="mt-7 flex flex-wrap items-center justify-between gap-6 rounded-lg border-l-[3px] border-gold bg-navy-2 px-[30px] py-[26px]">
          <div>
            <h3 className="mb-1 text-[1.15rem]">Already have solar panels?</h3>
            <p className="text-[.95rem] text-silver">
              We can add a battery to your existing system. Send us your setup
              and we will check compatibility.
            </p>
          </div>
          <Button
            href="/contact"
            variant="ghost"
            className="max-[560px]:w-full"
          >
            Ask about a battery
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
