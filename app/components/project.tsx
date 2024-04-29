import { type ReactNode } from "react";
import LinkIcon from "~/assets/icons/Link";

interface ProjectProps {
  children: ReactNode;
}

interface ProjectTitleProps {
  children: ReactNode;
}

interface ProjectLinkProps {
  to: string;
  children: ReactNode;
}

interface ProjectDescriptionProps {
  children: ReactNode;
}

interface ProjectImagesProps {
  images: string[];
}

const Project = ({ children }: ProjectProps) => {
  return <li className="transition-all">{children}</li>;
};

Project.displayName = "Project";

const ProjectTitle = ({ children }: ProjectTitleProps) => {
  return <h6>{children}</h6>;
};

ProjectTitle.displayName = "ProjectTitle";

const ProjectLink = ({ to, children }: ProjectLinkProps) => {
  return (
    <div className="group mt-1 flex items-center gap-3 text-sm text-secondary transition-all ">
      <LinkIcon className="transition-all group-hover:mb-2" />

      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all group-hover:underline"
      >
        {children}
      </a>
    </div>
  );
};

ProjectLink.displayName = "ProjectLink";

const ProjectDescription = ({ children }: ProjectDescriptionProps) => {
  const text = typeof children === "string" ? children.trim() : "";

  return <p dangerouslySetInnerHTML={{ __html: text }} />;
};

ProjectDescription.displayName = "ProjectDescription";

const ProjectLaguages = ({
  languages,
}: {
  languages: Array<{ name: string; link: string }>;
}) => {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {languages.map((language, index) => (
        <li key={index}>
          <a
            href={language.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-secondary px-3 py-1.5 text-xs font-medium transition-all hover:border-primary hover:bg-text hover:text-background"
          >
            {language.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

ProjectLaguages.displayName = "ProjectLaguages";

const ProjectImages = ({ images }: ProjectImagesProps) => {
  return (
    <div className="project-images">
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Project ${index + 1}`} />
      ))}
    </div>
  );
};

ProjectImages.displayName = "ProjectImages";

export {
  Project,
  ProjectTitle,
  ProjectLink,
  ProjectDescription,
  ProjectLaguages,
};
