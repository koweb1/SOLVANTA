import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[calc(1240px+var(--gutter)*2)] px-[var(--gutter)] ${className}`}
    >
      {children}
    </div>
  );
}
