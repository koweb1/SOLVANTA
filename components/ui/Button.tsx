import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "gold" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const base =
  "inline-flex cursor-pointer items-center justify-center gap-[.5em] rounded-full border-[1.5px] font-head font-semibold transition-colors duration-200";

const variants: Record<Variant, string> = {
  gold: "border-transparent bg-gold text-[#1a1204] hover:bg-[#ffbd5c]",
  ghost: "border-ivory/55 text-ivory hover:border-ivory hover:bg-ivory/10",
  dark: "border-ink bg-ink text-ivory hover:border-gold hover:bg-gold hover:text-[#1a1204]",
};

const sizes: Record<Size, string> = {
  sm: "px-[1.35em] py-[.7em] text-[.88rem]",
  md: "px-[1.7em] py-[.95em] text-[.95rem]",
  lg: "px-[2.4em] py-[1.05em] text-base",
};

export default function Button({
  href,
  variant = "gold",
  size = "md",
  className = "",
  onClick,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
