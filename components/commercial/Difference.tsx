import Container from "@/components/ui/Container";
import LinkArrow from "@/components/ui/LinkArrow";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const rows = [
  {
    label: "Built for",
    residential: "Homes and apartments",
    commercial: "Offices, factories, schools, hospitals, hotels, and farms",
  },
  {
    label: "Typical size",
    residential: "3 to 15 kVA",
    commercial: "20 kW to 500 kW and above",
  },
  {
    label: "Design",
    residential: "Three standard systems, adjusted after a site assessment",
    commercial:
      "Engineered for your site after an energy audit and a structural check",
  },
  {
    label: "Power supply",
    residential: "Home circuits",
    commercial: "Three-phase systems for site-wide loads",
  },
  {
    label: "Backup",
    residential: "A battery that keeps home essentials running",
    commercial:
      "Battery banks sized for your critical load, with generator integration",
  },
  {
    label: "Monitoring",
    residential: "Monitoring app",
    commercial: "Live dashboard with usage and savings reports",
  },
  {
    label: "After install",
    residential: "After-sales support",
    commercial: "Maintenance plan and priority support",
  },
];

const cell = "px-7 text-left align-top";

export default function Difference() {
  return (
    <section
      id="difference"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead
            title="Built for business, not scaled up from a home system"
            description="Commercial sites run bigger loads for longer hours, and downtime costs money. Here is how our two services differ."
          />
        </Reveal>

        <Reveal>
          <div
            role="region"
            aria-label="Residential and commercial comparison"
            tabIndex={0}
            className="overflow-x-auto rounded-lg border border-line-light"
          >
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th scope="col" className={`${cell} py-7`}>
                    <span className="sr-only">Feature</span>
                  </th>
                  <th
                    scope="col"
                    className={`${cell} py-7 font-head text-[1.25rem] font-semibold`}
                  >
                    Residential
                  </th>
                  <th
                    scope="col"
                    className={`${cell} bg-navy py-7 font-head text-[1.25rem] font-semibold text-gold`}
                  >
                    Commercial
                  </th>
                </tr>
              </thead>
              <tbody className="[&>tr:last-child>*]:border-b-0">
                {rows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className={`${cell} w-[20%] border-b border-line-light py-[22px] text-[.95rem] font-medium text-steel`}
                    >
                      {row.label}
                    </th>
                    <td
                      className={`${cell} w-[30%] border-b border-line-light py-[22px] text-steel`}
                    >
                      {row.residential}
                    </td>
                    <td
                      className={`${cell} border-b border-line-dark bg-navy py-[22px] text-ivory`}
                    >
                      {row.commercial}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className={`${cell} py-5`} />
                  <td className={`${cell} py-5`}>
                    <LinkArrow href="/residential">See residential</LinkArrow>
                  </td>
                  <td className={`${cell} bg-navy pt-5 pb-[26px]`}>
                    <LinkArrow href="/contact" tone="dark">
                      Get a commercial quote
                    </LinkArrow>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
