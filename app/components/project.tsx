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
  return <li className="space-y-2">{children}</li>;
};

Project.displayName = "Project";

const ProjectTitle = ({ children }: ProjectTitleProps) => {
  return <h6 className="text-2xl font-medium text-primary">{children}</h6>;
};

ProjectTitle.displayName = "ProjectTitle";

const ProjectLink = ({ to, children }: ProjectLinkProps) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <LinkIcon />

      <a href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
};

ProjectLink.displayName = "ProjectLink";

const ProjectDescription = ({ children }: ProjectDescriptionProps) => {
  return <p className="">{children}</p>;
};

ProjectDescription.displayName = "ProjectDescription";

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
  ProjectImages,
};
