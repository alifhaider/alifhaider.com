import { type ReactNode } from "react";

const Experience = ({ children }: { children: ReactNode }) => {
  return <li className="space-y-2">{children}</li>;
};

Experience.displayName = "Experience";

const ExperienceTitle = ({ text }: { text: string }) => {
  return <h6>{text}</h6>;
};

ExperienceTitle.displayName = "ExperienceTitle";

const ExperienceInfo = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col text-lg md:flex-row md:items-center md:justify-between md:text-xl">
      {children}
    </div>
  );
};

ExperienceInfo.displayName = "ExperienceInfo";

const ExperienceCompany = ({
  to,
  children,
  location,
}: {
  to: string;
  children: ReactNode;
  location: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-secondary underline-offset-2 transition-all hover:underline"
      >
        {children}
      </a>
      <div className="text-gray md:text-xl">
        <span className="hidden md:inline-block">/</span>
        {location}
      </div>
    </div>
  );
};

ExperienceCompany.displayName = "ExperienceCompanyLink";

const ExxperienceDate = ({ children }: { children: ReactNode }) => {
  return <p className="font-medium">{children}</p>;
};

ExxperienceDate.displayName = "ExxperienceDate";

const ExperienceDescription = ({ children }: { children: ReactNode }) => {
  const text = typeof children === "string" ? children.trim() : "";

  return <p dangerouslySetInnerHTML={{ __html: text }} />;
};

ExperienceDescription.displayName = "ExperienceDescription";

export {
  Experience,
  ExperienceTitle,
  ExperienceInfo,
  ExperienceCompany,
  ExxperienceDate,
  ExperienceDescription,
};
