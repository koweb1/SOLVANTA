import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Live solar output and site demand",
  "Battery charge and backup status",
  "Monthly savings and usage reports",
  "Alerts when performance drops",
];

const SOLAR_LINE =
  "M62.0,250.0 C68.7,246.9 88.7,241.7 102.0,231.3 C115.3,220.9 128.7,204.0 142.0,187.6 C155.3,171.2 168.7,149.9 182.0,133.0 C195.3,116.1 208.7,100.0 222.0,86.2 C235.3,72.4 248.7,59.4 262.0,50.3 C275.3,41.2 288.7,32.6 302.0,31.6 C315.3,30.6 328.7,36.8 342.0,44.1 C355.3,51.4 368.7,61.8 382.0,75.3 C395.3,88.8 408.7,107.8 422.0,125.2 C435.3,142.6 448.7,162.9 462.0,179.8 C475.3,196.7 488.7,214.9 502.0,226.6 C515.3,238.3 535.3,246.1 542.0,250.0";

const LOAD_LINE =
  "M62.0,164.2 C68.7,160.3 88.7,151.2 102.0,140.8 C115.3,130.4 128.7,112.2 142.0,101.8 C155.3,91.4 168.7,83.6 182.0,78.4 C195.3,73.2 208.7,72.7 222.0,70.6 C235.3,68.5 248.7,67.2 262.0,65.9 C275.3,64.6 288.7,62.8 302.0,62.8 C315.3,62.8 328.7,64.6 342.0,65.9 C355.3,67.2 368.7,68.5 382.0,70.6 C395.3,72.7 408.7,74.5 422.0,78.4 C435.3,82.3 448.7,87.5 462.0,94.0 C475.3,100.5 488.7,108.3 502.0,117.4 C515.3,126.5 535.3,143.4 542.0,148.6";

const gridYs = [250, 172, 94, 16];
const yTicks = [
  { y: 255, label: "0" },
  { y: 177, label: "50" },
  { y: 99, label: "100" },
  { y: 21, label: "150" },
];
const xTicks = [
  { x: 62, label: "6am" },
  { x: 182, label: "9am" },
  { x: 302, label: "12pm" },
  { x: 422, label: "3pm" },
  { x: 542, label: "6pm" },
];

const tick = "fill-silver font-body text-[15px]";

export default function Monitoring() {
  return (
    <section id="monitoring" className="bg-navy py-[clamp(72px,10vw,132px)]">
      <Container className="grid grid-cols-[minmax(0,4fr)_minmax(0,7fr)] items-center gap-[clamp(32px,6vw,96px)] max-[980px]:grid-cols-1">
        <Reveal variant="left">
          <h2>See what your system earns you</h2>
          <p className="mt-5 text-silver">
            Every commercial system comes with a live dashboard. Track
            production, usage, and savings by the day, week, or month.
          </p>
          <ul className="mt-7 grid gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-ivory">
                <span
                  aria-hidden="true"
                  className="mt-[.6em] h-2 w-2 flex-none rounded-full bg-gold"
                />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="right">
          <figure className="rounded-lg border border-line-dark bg-navy-2 px-[26px] pt-[26px] pb-[22px]">
            <div className="mb-4 flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-[1.05rem]">Site power across one day</h3>
              <small className="rounded-full border border-line-dark px-2.5 py-[3px] text-[.82rem] text-silver">
                Sample data
              </small>
            </div>

            <svg
              viewBox="0 0 560 292"
              role="img"
              aria-label="Sample chart. Solar output rises to about 140 kilowatts at midday and exceeds site load of about 120 kilowatts between roughly 10am and 2pm."
              className="h-auto w-full"
            >
              <defs>
                <linearGradient
                  id="commercial-solar-fill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0" stopColor="#F2A93D" stopOpacity=".45" />
                  <stop offset="1" stopColor="#F2A93D" stopOpacity="0" />
                </linearGradient>
              </defs>

              <g>
                {gridYs.map((y) => (
                  <line
                    key={y}
                    x1="62"
                    x2="542"
                    y1={y}
                    y2={y}
                    strokeWidth="1"
                    className="stroke-line-dark"
                  />
                ))}
              </g>

              <text x="52" y="8" textAnchor="end" className={tick}>
                kW
              </text>
              {yTicks.map((t) => (
                <text
                  key={t.label}
                  x="52"
                  y={t.y}
                  textAnchor="end"
                  className={tick}
                >
                  {t.label}
                </text>
              ))}
              {xTicks.map((t) => (
                <text
                  key={t.label}
                  x={t.x}
                  y="278"
                  textAnchor="middle"
                  className={tick}
                >
                  {t.label}
                </text>
              ))}

              <path
                d={`${SOLAR_LINE} L542.0,250 L62.0,250 Z`}
                fill="url(#commercial-solar-fill)"
              />
              <path
                d={LOAD_LINE}
                fill="none"
                strokeWidth="3"
                strokeLinejoin="round"
                className="stroke-silver"
              />
              <path
                d={SOLAR_LINE}
                fill="none"
                strokeWidth="3"
                strokeLinejoin="round"
                className="stroke-gold"
              />
              <circle cx="302" cy="31.6" r="5" className="fill-gold" />
            </svg>

            <div className="mt-3.5 flex flex-wrap gap-6 text-[.9rem] text-silver">
              <span className="inline-flex items-center gap-2.5">
                <i className="inline-block h-[3px] w-[22px] rounded-sm bg-gold" />
                Solar output
              </span>
              <span className="inline-flex items-center gap-2.5">
                <i className="inline-block h-[3px] w-[22px] rounded-sm bg-silver" />
                Site load
              </span>
            </div>
            <p className="mt-3 text-[.88rem] text-silver">
              Solar output above site load charges the battery.
            </p>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
