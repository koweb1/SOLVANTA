import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import SectionHead from "@/components/ui/SectionHead";

const dashH =
  "bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_8px,transparent_8px_16px)] bg-[length:16px_2px] motion-safe:animate-flow";
const dashV =
  "bg-[repeating-linear-gradient(180deg,var(--color-gold)_0_8px,transparent_8px_16px)] bg-[length:2px_16px] motion-safe:animate-flow-v";

type FlowNodeProps = {
  title: string;
  text: string;
  icon: ReactNode;
  className: string;
  highlight?: boolean;
};

function FlowNode({ title, text, icon, className, highlight }: FlowNodeProps) {
  return (
    <div
      className={`rounded-lg border bg-navy-2 px-[26px] pt-[26px] pb-[28px] max-[820px]:h-auto max-[560px]:px-4 max-[560px]:pt-5 max-[560px]:pb-5 ${
        highlight ? "border-gold/55" : "border-line-dark"
      } ${className}`}
    >
      <LineIcon className="mb-4 h-[34px] w-[34px] text-gold max-[560px]:mb-3 max-[560px]:h-7 max-[560px]:w-7">
        {icon}
      </LineIcon>
      <h3 className="mb-1.5 text-[1.2rem] max-[560px]:text-[1.05rem]">
        {title}
      </h3>
      <p className="text-[.95rem] text-silver max-[560px]:text-[.85rem]">
        {text}
      </p>
    </div>
  );
}

/* Straight line. Horizontal on desktop, vertical on mobile. */
function Connector({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`mx-[10px] h-[2px] ${dashH} max-[820px]:mx-auto max-[820px]:h-10 max-[820px]:w-0.5 max-[820px]:bg-[repeating-linear-gradient(180deg,var(--color-gold)_0_8px,transparent_8px_16px)] max-[820px]:bg-[length:2px_16px] max-[820px]:motion-safe:animate-flow-v ${className}`}
    />
  );
}

/* Horizontal line on desktop. On mobile it becomes a split: one stem from the
   inverter, then two drops to the home and battery cards side by side. */
function BranchConnector({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-[10px] h-[2px] ${dashH} max-[820px]:mx-0 max-[820px]:h-12 max-[820px]:bg-none max-[820px]:motion-safe:animate-none ${className}`}
    >
      <span
        className={`absolute top-0 left-1/2 hidden h-6 w-0.5 -translate-x-1/2 max-[820px]:block ${dashV}`}
      />
      <span
        className={`absolute top-6 right-[calc(25%-4px)] left-[calc(25%-4px)] hidden h-0.5 -translate-y-1/2 max-[820px]:block ${dashH}`}
      />
      <span
        className={`absolute top-6 bottom-0 left-[calc(25%-4px)] hidden w-0.5 -translate-x-1/2 max-[820px]:block ${dashV}`}
      />
      <span
        className={`absolute top-6 bottom-0 left-[calc(75%+4px)] hidden w-0.5 -translate-x-1/2 max-[820px]:block ${dashV}`}
      />
    </div>
  );
}

export default function ResidentialSystem() {
  return (
    <section id="system" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <SectionHead
          tone="dark"
          title="How your system works"
          description="Panels make the power, the inverter manages it, and the battery keeps the extra for when you need it."
        />

        <div className="grid grid-cols-[1fr_72px_1fr_72px_1fr] grid-rows-[auto_auto] items-center gap-x-0 gap-y-5 max-[820px]:grid-cols-2 max-[820px]:grid-rows-none max-[820px]:items-stretch max-[820px]:gap-x-4 max-[820px]:gap-y-0">
          <FlowNode
            title="Solar panels"
            text="Capture sunlight and turn it into electricity. We mount them securely on your roof and wire them in."
            icon={
              <>
                <rect x="3" y="8" width="26" height="16" rx="2" />
                <path d="M11.7 8v16M20.3 8v16M3 16h26" />
              </>
            }
            className="col-start-1 row-start-1 row-span-2 h-auto self-center max-[820px]:col-[span_2/span_2] max-[820px]:row-auto"
          />
          <Connector className="col-start-2 row-start-1 row-span-2 max-[820px]:col-[span_2/span_2] max-[820px]:row-auto" />
          <FlowNode
            title="Inverter"
            text="Converts panel power into power your home can use, and decides when to charge or draw from the battery."
            icon={
              <>
                <rect x="4" y="7" width="24" height="18" rx="3" />
                <path d="M9 16c2-5 4-5 6 0s4 5 6 0" />
              </>
            }
            className="col-start-3 row-start-1 row-span-2 h-auto self-center max-[820px]:col-[span_2/span_2] max-[820px]:row-auto"
          />
          <BranchConnector className="col-start-4 row-start-1 max-[820px]:col-[span_2/span_2] max-[820px]:row-auto" />
          <Connector className="col-start-4 row-start-2 max-[820px]:hidden" />
          <FlowNode
            title="Your home"
            text="Appliances run on solar power first. Nothing changes in how you use them."
            icon={<path d="M4 15L16 5l12 10M8 13v14h16V13" />}
            className="col-start-5 row-start-1 h-full max-[820px]:col-[1] max-[820px]:row-auto"
          />
          <FlowNode
            title="Battery storage"
            text="Stores extra power for evenings, nights, and outages."
            icon={
              <>
                <rect x="3" y="10" width="22" height="13" rx="2" />
                <path d="M28 14v5M9 14v5M14 14v5" />
              </>
            }
            highlight
            className="col-start-5 row-start-2 h-full max-[820px]:col-[2] max-[820px]:row-auto"
          />
        </div>
      </Container>
    </section>
  );
}
