import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const columns = ["Grid-tied solar", "Hybrid with battery", "Full continuity"];

const rows = [
  {
    label: "What it includes",
    values: [
      "Solar array and inverters",
      "Solar, inverters, and a battery bank",
      "Solar, battery bank, and generator integration",
    ],
  },
  {
    label: "Best for",
    values: [
      "Sites with a stable grid that want lower daytime bills",
      "Sites with frequent outages or high demand peaks",
      "Operations that cannot afford any downtime",
    ],
  },
  {
    label: "During an outage",
    values: [
      "System shuts down with the grid",
      "Battery carries your critical loads",
      "Battery and generator carry the full site",
    ],
  },
  {
    label: "Generator use",
    values: ["Unchanged", "Reduced", "Backup only"],
  },
  {
    label: "Battery size",
    values: ["None", "Sized to your critical load", "Sized to your full load"],
  },
];

export default function Storage() {
  return (
    <section id="storage" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="Choose how much continuity you need"
            description="Three ways to configure a commercial system, from lower daytime bills to no downtime at all."
          />
        </Reveal>

        <Reveal>
          <div
            role="region"
            aria-label="System configuration comparison"
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
              {/* The design has a placeholder note here. Replace these rows with
                  your real battery products and storage ranges before launch. */}
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
                        className="border-b border-line-dark px-[26px] py-[22px] text-left align-top"
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
            <h3 className="mb-1 text-[1.15rem]">Already run a generator?</h3>
            <p className="text-[.95rem] text-silver">
              We integrate it into the system, so it starts only when it is
              needed.
            </p>
          </div>
          <Button
            href="/contact"
            variant="ghost"
            className="max-[560px]:w-full"
          >
            Talk to an engineer
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
