type LogoProps = {
  label: string;
};

export default function Logo({ label }: LogoProps) {
  return (
    <a
      href="#top"
      aria-label={label}
      className="flex items-center gap-3 max-[560px]:gap-2.5"
    >
      <svg
        viewBox="10 20 280 100"
        aria-hidden="true"
        className="block h-auto w-[54px] max-[560px]:w-[38px]"
      >
        <path
          d="M150,70 C110,20 30,20 30,70 C30,120 110,120 150,70"
          stroke="#8FA0BC"
          strokeWidth={30}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M150,70 C190,20 270,20 270,70 C270,120 190,120 150,70"
          stroke="#F2A93D"
          strokeWidth={30}
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-head text-[1.3rem] font-semibold tracking-[.16em] max-[560px]:text-[1.05rem] max-[560px]:tracking-[.14em]">
          SOLVANTA
        </span>
        <span className="mt-[5px] pl-[2px] text-[.56rem] tracking-[.42em] text-silver max-[560px]:mt-1 max-[560px]:text-[.46rem] max-[560px]:tracking-[.34em]">
          ENERGY SYSTEMS
        </span>
      </span>
    </a>
  );
}
