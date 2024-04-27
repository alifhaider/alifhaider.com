import { type ReactNode } from "react";

const Experience = ({ children }: { children: ReactNode }) => {
  return <li className="space-y-2">{children}</li>;
};

Experience.displayName = "Experience";

const ExperienceTitle = ({ text }: { text: string }) => {
  return (
    <h6 className="text-xl font-medium text-primary md:text-3xl">{text}</h6>
  );
};

ExperienceTitle.displayName = "ExperienceTitle";

const ExperienceInfo = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-between text-lg md:text-xl">
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
    <div className="flex items-center">
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-secondary underline-offset-2 transition-all hover:underline"
      >
        <span className="text-base">@</span>
        {children}
      </a>
      <div className="text-border text-lg md:text-xl">/ {location}</div>
    </div>
  );
};

ExperienceCompany.displayName = "ExperienceCompanyLink";

const ExxperienceDate = ({ children }: { children: ReactNode }) => {
  return <p className="font-medium">{children}</p>;
};

ExxperienceDate.displayName = "ExxperienceDate";

const ExperienceDescription = ({ children }: { children: ReactNode }) => {
  return <p>{children}</p>;
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
