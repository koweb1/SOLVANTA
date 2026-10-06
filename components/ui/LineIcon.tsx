import type { ReactNode } from "react";

type LineIconProps = {
  className?: string;
  children: ReactNode;
};

export default function LineIcon({ className = "", children }: LineIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}
