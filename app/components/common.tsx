import { type ReactNode } from "react";

export function SectionTitle({ title }: { title: string }) {
  return (
    <h4 className="mb-6 text-5xl font-extrabold md:mb-8 md:text-7xl">
      {title}
    </h4>
  );
}

export function Description({ children }: { children: ReactNode }) {
  if (typeof children !== "string") return null;

  return <p className="mt-4" dangerouslySetInnerHTML={{ __html: children }} />;
}
