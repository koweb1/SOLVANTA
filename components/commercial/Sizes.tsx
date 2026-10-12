import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";

const tiers = [
  {
    name: "Small business",
    audience: "For shops, clinics, small offices, and workshops.",
    runs: [
      "Lighting",
      "Cooling",
      "Computers and point of sale",
      "Cold storage",
    ],
    specs: [
      { label: "Solar array", value: "20 to 50 kWp" },
      { label: "Inverter", value: "20 to 40 kVA" },
      { label: "Battery", value: "30 to 100 kWh" },
      { label: "Space needed", value: "120 to 300 m²" },
    ],
  },
  {
    name: "Mid-size",
    audience: "For schools, hotels, larger offices, and light manufacturing.",
    runs: [
      "Everything in Small business",
      "Production equipment",
      "Water pumping",
      "Server rooms",
    ],
    specs: [
      { label: "Solar array", value: "50 to 200 kWp" },
      { label: "Inverter", value: "50 to 150 kVA" },
      { label: "Battery", value: "100 to 400 kWh" },
      { label: "Space needed", value: "300 to 1,200 m²" },
    ],
  },
  {
    name: "Industrial",
    audience: "For factories, hospitals, large campuses, and agro-processing.",
    runs: [
      "Everything in Mid-size",
      "Heavy machinery",
      "Process cooling",
      "Continuous operations",
    ],
    specs: [
      { label: "Solar array", value: "200 kWp and above" },
      { label: "Inverter", value: "200 kVA and above" },
      { label: "Battery", value: "400 kWh and above" },
      { label: "Space needed", value: "1,200 m² and above" },
    ],
  },
];

export default function Sizes() {
  return (
    <section
      id="sizes"
      className="bg-ivory py-[clamp(72px,10vw,132px)] text-ink"
    >
      <Container>
        <Reveal>
          <SectionHead
            title="Systems sized to your operation"
            description="Commercial systems are sized in kilowatts, not rooms. These ranges show what to expect before the energy audit."
          />
        </Reveal>

        <div className="border-t border-line-light">
          {tiers.map((tier) => (
            <Reveal
              as="article"
              key={tier.name}
              className="grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] items-start gap-[clamp(24px,5vw,80px)] border-b border-line-light py-11 max-[980px]:grid-cols-1 max-[980px]:gap-7"
            >
              <div>
                <h3 className="mb-1.5 text-[clamp(1.5rem,2.2vw,2rem)]">
                  {tier.name}
                </h3>
                <p className="mb-5 text-steel">{tier.audience}</p>
                <ul
                  aria-label={`What the ${tier.name} system runs`}
                  className="flex flex-wrap gap-2"
                >
                  {tier.runs.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line-light px-3.5 py-1.5 text-[.88rem]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <dl className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-4">
                {tier.specs.map((spec) => (
                  <div key={spec.label} className="border-l-2 border-gold pl-4">
                    <dt className="text-[.88rem] text-steel">{spec.label}</dt>
                    <dd className="mt-1 font-head text-[1.15rem] leading-[1.25] font-semibold">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>

        <p className="mt-7 text-[.92rem] text-steel">
          Ranges are indicative. Every commercial system is engineered after an
          energy audit and a site survey.
        </p>
      </Container>
    </section>
  );
}
