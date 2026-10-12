// Placeholder details from the design. Replace with your real contact
// information before launch.
const contacts = [
  { label: "Phone", value: "+000 000 000 0000" },
  { label: "WhatsApp", value: "+000 000 000 0000" },
  { label: "Email", value: "hello@solvanta.com" },
  { label: "Office", value: "Office address, City" },
];

const next = [
  {
    title: "We contact you",
    text: "We confirm your details and ask a few questions about how you use power.",
  },
  {
    title: "Site assessment",
    text: "We visit your property, check the roof and wiring, and measure what you need.",
  },
  {
    title: "You get your quote",
    text: "A clear design and price, with nothing hidden.",
  },
];

export default function Sidebar() {
  return (
    <aside
      aria-label="Contact details and next steps"
      className="sticky top-[110px] max-[980px]:static"
    >
      <div className="grid animate-rise gap-10 [--delay:.35s] motion-reduce:animate-none">
        <div>
          <h2 className="mb-[18px] max-w-none text-[1.4rem]">
            Talk to us directly
          </h2>
          <ul className="grid gap-[18px]">
            {contacts.map((item) => (
              <li key={item.label} className="grid gap-0.5">
                <span className="text-[.88rem] text-steel">{item.label}</span>
                <b className="font-head text-[1.1rem] font-semibold break-words">
                  {item.value}
                </b>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-[18px] max-w-none text-[1.4rem]">
            What happens next
          </h2>
          <ol className="grid gap-[22px]">
            {next.map((step, i) => {
              const last = i === next.length - 1;
              return (
                <li
                  key={step.title}
                  className="grid grid-cols-[36px_1fr] items-start gap-4"
                >
                  <span
                    aria-hidden="true"
                    className={`grid h-9 w-9 place-items-center rounded-full border-[1.5px] font-head text-[.95rem] font-semibold ${
                      last ? "border-gold bg-gold" : "border-steel"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <b className="block font-head font-semibold">
                      {step.title}
                    </b>
                    <p className="text-[.95rem] text-steel">{step.text}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </aside>
  );
}
