import Link from "next/link";
import type { ReactNode } from "react";

type LinkArrowProps = {
  href?: string;
  tone?: "light" | "dark";
  children: ReactNode;
};

const hover = {
  light: "hover:text-gold-deep",
  dark: "hover:text-gold",
};

export default function LinkArrow({
  href,
  tone = "light",
  children,
}: LinkArrowProps) {
  const classes = `inline-flex items-center gap-[.6em] border-b-[1.5px] border-current pb-[3px] font-head text-[.95rem] font-semibold ${hover[tone]}`;

  // Without href it renders a span, for use inside an already-linked card.
  if (!href) return <span className={classes}>{children}</span>;

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
