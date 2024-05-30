import { type ReactNode } from "react";

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h4 className="mb-6 text-5xl font-extrabold md:mb-8 md:text-7xl">
      {children}
    </h4>
  );
}

export function Description({ children }: { children: ReactNode }) {
  if (typeof children !== "string") return null;

  return <p className="mt-2" dangerouslySetInnerHTML={{ __html: children }} />;
}
