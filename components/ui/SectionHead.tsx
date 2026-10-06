import type { ReactNode } from "react";

type SectionHeadProps = {
  title: string;
  description?: string;
  tone?: "light" | "dark";
  children?: ReactNode;
};

export default function SectionHead({
  title,
  description,
  tone = "light",
  children,
}: SectionHeadProps) {
  return (
    <div className="mb-[clamp(36px,5vw,64px)] flex flex-wrap items-end justify-between gap-8">
      <h2>{title}</h2>
      {description && (
        <p
          className={`max-w-[40ch] ${tone === "dark" ? "text-silver" : "text-steel"}`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
