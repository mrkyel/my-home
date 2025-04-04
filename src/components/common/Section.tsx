import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={twMerge("section", className)}>
      <div className="container">{children}</div>
    </section>
  );
}
