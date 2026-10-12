import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import LineIcon from "@/components/ui/LineIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Sequence from "@/components/ui/Sequence";

const powerH =
  "bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_8px,transparent_8px_16px)] bg-[length:16px_2px] motion-safe:animate-flow";
const dataH =
  "bg-[repeating-linear-gradient(90deg,rgba(143,160,188,.8)_0_3px,transparent_3px_9px)] bg-[length:9px_2px]";

type NodeProps = {
  title: string;
  text: string;
  icon: ReactNode;
  className: string;
  /** Position in the entrance timeline, see Sequence. */
  pos?: string;
  controller?: boolean;
  highlight?: boolean;
};

function Node({
  title,
  text,
  icon,
  className,
  pos,
  controller,
  highlight,
}: NodeProps) {
  return (
    <div
      data-seq="node"
      data-seq-pos={pos}
      className={`rounded-lg border bg-navy-2 max-[820px]:h-auto ${
        controller || highlight ? "border-gold/55" : "border-line-dark"
      } ${
        controller ? "px-[26px] pt-[30px] pb-8" : "px-[22px] pt-5 pb-[22px]"
      } ${className}`}
    >
      <LineIcon className="mb-3 h-7 w-7 text-gold">{icon}</LineIcon>
      <h3 className="mb-1.5 text-[1.08rem]">{title}</h3>
      <p
        className={`text-silver ${controller ? "text-[.95rem]" : "text-[.9rem]"}`}
      >
        {text}
      </p>
    </div>
  );
}

function Connector({
  className,
  pos,
  data,
}: {
  className: string;
  pos?: string;
  data?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      data-seq="line"
      data-seq-pos={pos}
      className={`mx-[10px] h-[2px] ${data ? dataH : powerH} max-[820px]:mx-auto max-[820px]:h-10 max-[820px]:w-0.5 max-[820px]:bg-[repeating-linear-gradient(180deg,var(--color-gold)_0_8px,transparent_8px_16px)] max-[820px]:bg-[length:2px_16px] max-[820px]:motion-safe:animate-flow-v ${className}`}
    />
  );
}

export default function System() {
  return (
    <section id="system" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container>
        <Reveal>
          <SectionHead
            tone="dark"
            title="How a commercial system works"
            description="Solar, grid, and generator feed one energy controller. It decides what runs your site and what charges the battery."
          />
        </Reveal>

        <Sequence className="grid grid-cols-[1fr_72px_1fr_72px_1fr] grid-rows-[repeat(3,auto)] items-center gap-x-0 gap-y-4 max-[820px]:grid-cols-1 max-[820px]:grid-rows-none max-[820px]:gap-0">
          <Node
            title="Solar array"
            text="Rooftop, ground, or carport panels sized to your load."
            icon={
              <>
                <rect x="3" y="8" width="26" height="16" rx="2" />
                <path d="M11.7 8v16M20.3 8v16M3 16h26" />
              </>
            }
            className="col-start-1 row-start-1 max-[820px]:col-[1] max-[820px]:row-auto"
          />
          <Node
            title="Grid"
            text="Your utility supply stays connected where it is available."
            icon={<path d="M16 4l-6 24M16 4l6 24M10 12h12M8 20h16" />}
            pos="<0.12"
            className="col-start-1 row-start-2 max-[820px]:col-[1] max-[820px]:row-auto max-[820px]:mt-3.5"
          />
          <Node
            title="Generator"
            text="Starts only when solar and battery cannot cover demand."
            icon={
              <>
                <rect x="4" y="11" width="22" height="13" rx="2" />
                <path d="M26 15h3v5h-3M8 11V8h8v3M10 24v3M20 24v3" />
              </>
            }
            pos="<0.12"
            className="col-start-1 row-start-3 max-[820px]:col-[1] max-[820px]:row-auto max-[820px]:mt-3.5"
          />

          <Connector className="col-start-2 row-start-1 max-[820px]:col-[1] max-[820px]:row-auto" />
          <Connector
            pos="<"
            className="col-start-2 row-start-2 max-[820px]:hidden"
          />
          <Connector
            pos="<"
            className="col-start-2 row-start-3 max-[820px]:hidden"
          />

          <Node
            controller
            title="Energy controller"
            text="Three-phase hybrid inverters balance every source, manage the battery, and protect your equipment from surges and dips."
            icon={
              <>
                <rect x="8" y="8" width="16" height="16" rx="2" />
                <path d="M12 4v4M16 4v4M20 4v4M12 24v4M16 24v4M20 24v4M4 12h4M4 16h4M4 20h4M24 12h4M24 16h4M24 20h4" />
              </>
            }
            className="col-start-3 row-start-1 row-span-3 h-auto self-center max-[820px]:col-[1] max-[820px]:row-auto"
          />

          <Connector className="col-start-4 row-start-1 max-[820px]:col-[1] max-[820px]:row-auto" />
          <Connector
            pos="<"
            className="col-start-4 row-start-2 max-[820px]:hidden"
          />
          <Connector
            data
            pos="<"
            className="col-start-4 row-start-3 max-[820px]:hidden"
          />

          <Node
            title="Site load"
            text="Machines, cooling, lighting, servers, and cold rooms."
            icon={<path d="M4 27V14l8 5v-5l8 5v-8l8 4v12zM4 27h24" />}
            className="col-start-5 row-start-1 max-[820px]:col-[1] max-[820px]:row-auto"
          />
          <Node
            highlight
            title="Battery bank"
            text="Stores solar for peak demand, nights, and outages."
            icon={
              <>
                <rect x="3" y="10" width="22" height="13" rx="2" />
                <path d="M28 14v5M9 14v5M14 14v5" />
              </>
            }
            pos="<0.12"
            className="col-start-5 row-start-2 max-[820px]:col-[1] max-[820px]:row-auto max-[820px]:mt-3.5"
          />
          <Node
            title="Monitoring"
            text="Live production, usage, and savings for your team."
            icon={<path d="M4 27h24M7 22l6-7 5 4 8-11" />}
            pos="<0.12"
            className="col-start-5 row-start-3 max-[820px]:col-[1] max-[820px]:row-auto max-[820px]:mt-3.5"
          />
        </Sequence>

        <Reveal
          variant="fade"
          className="mt-7 flex flex-wrap gap-7 text-[.9rem] text-silver"
        >
          <span className="inline-flex items-center gap-2.5">
            <i className="inline-block h-0.5 w-[34px] bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_8px,transparent_8px_12px)]" />
            Power
          </span>
          <span className="inline-flex items-center gap-2.5">
            <i className="inline-block h-0.5 w-[34px] bg-[repeating-linear-gradient(90deg,var(--color-silver)_0_3px,transparent_3px_9px)]" />
            Data
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
