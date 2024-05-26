import { type ReactNode } from "react";
import { type MetaFunction } from "@remix-run/node";
import { SectionTitle } from "~/components/common";
import {
  Project,
  ProjectDescription,
  ProjectLaguages,
  ProjectLink,
  ProjectTitle,
} from "~/components/project";
import {
  Experience,
  ExperienceCompany,
  ExperienceDescription,
  ExperienceInfo,
  ExperienceTitle,
  ExxperienceDate,
} from "~/components/experience";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

export const meta: MetaFunction = () => {
  return [
    { title: "Home / Alif" },
    { name: "description", content: "A Software Engineer" },
  ];
};

type Project = {
  name: string;
  link?: string;
  linkText?: string;
  description: ReactNode;
  languages: Array<{ name: string; link: string }>;
};

const language = {
  TS: {
    name: "TypeScript",
    link: "https://www.typescriptlang.org",
  },
  JS: {
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  REACT: {
    name: "React",
    link: "https://react.dev",
  },
  REMIX: {
    name: "Remix.run",
    link: "https://remix.run",
  },
  GDSCRIPT: {
    name: "Godot Script",
    link: "https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_basics.html",
  },
  GDENGINE: {
    name: "Godot Engine",
    link: "https://godotengine.org/",
  },
  MONGO: {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  WS: {
    name: "WebSocket",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  },
  REDIS: {
    name: "Redis",
    link: "https://redis.io/",
  },
  STYLED: {
    name: "Styled Components",
    link: "https://styled-components.com/",
  },
  CSS: {
    name: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  SCSS: {
    name: "SCSS",
    link: "https://sass-lang.com/",
  },
  TAILWIND: {
    name: "Tailwind CSS",
    link: "https://tailwindcss.com/",
  },
  REDUX: {
    name: "Redux",
    link: "https://redux.js.org/",
  },
};

const projects: Array<Project> = [
  {
    name: "Nulandia Admin Dashboard",
    link: "https://admin.nulandia.com",
    linkText: "admin.nulandia.com",
    description: `Nulandia Admin Dashboard is an interesting project for me. It actually is for updating game interface of Nulandia through web forms and backend team had the full control of which typeof form-fields (<code>&#60;input /&#62;</code> or <code>&#60;select&#62;</code>) will be rendered where. I called it <code>Dynamic Fonts</code>`,
    languages: [language.REACT, language.TAILWIND],
  },
  {
    name: "Nulandia Game UI",
    description:
      "Game UI for Nulandia. It is firstly built in with <code>React.js</code> but later they wanted to implement those within the game which was using <code>Godot Gmae Engine</code> and <code>GDScript</code>. This was a new programming language for me. Learning a different pattern to write code I thought would be way harder but worked out smoothly.",
    languages: [language.GDENGINE, language.GDSCRIPT],
  },
  {
    name: "Hydepenthouse Airbnb",
    link: "https://hydepenthouse.com",
    linkText: "hydepenthouse.com",
    description: `Hydepnethouse is an Airbnb like website. This project is built with <code>Remix.run</code>. Previously I had no experience to work professionally using Remix. But I had a huge interest in Remix since when it Open Sourced. I watched and learned Remix patterns from <a href="https://kentcdodds.com" target="_blank" rel="noopener noreferrer" class="underlined">Kent C Dodds</a> and his <a href="https://epicweb.dev"target="_blank" rel="noopener noreferrer" class="underlined">Epic Web Workshops</a>.`,
    languages: [language.REMIX, language.TS, language.SCSS],
  },
  {
    name: "Definya MMORPG Game",
    link: "https://play.definya.com/",
    linkText: "play.definya.com",
    description: `Definya game is built with the MERN stack. This is also a first time for writing backend code. Intering part of this project is, it structured really well. <code>PhaserJS</code> was used for the game but everything else is handled by <code>React.js</code>.`,
    languages: [
      language.REACT,
      language.TS,
      language.MONGO,
      language.WS,
      language.REDIS,
      language.STYLED,
    ],
  },
  {
    name: "SPORFORYA Admin Dashboard",
    link: "https://admin.sporforya.com/",
    linkText: "admin.sporforya.com",
    description:
      "SPORFORYA is a sports activities managing platform. Creating events, managing events, managing members was the part of this application.",
    languages: [language.REACT, language.TS, language.CSS],
  },
  {
    name: "Funcomp",
    link: "https://funcomp.com",
    linkText: "funcomp.com",
    description:
      "Funcomp is a platform where people can find fun activities like video games, movies, etc. While I was building this I was mostly new to <code>React.js</code>. To manage CRUD here I used <code>Redux</code> and this is the last project I used Redux.",
    languages: [language.REACT, language.REDUX, language.CSS],
  },
  {
    name: "Promenade",
    link: "https://promenade.ai",
    linkText: "promenade.ai",
    description:
      "Promenade is a military job application platform where veterans can find jobs and appoint to a training center. This is the first react project I have ever worked on. I was new to <code>React.js</code> and <code>Redux</code> at that time.",
    languages: [language.REACT, language.REDUX, language.CSS],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company: "Impulse Communications",
    to: "https://impulsecorp.com/",
    location: "Remote, USA",
    date: "Feb'23 - Present",
    description: "Worked on the Nulandia Admin Dashboard and Nulandia Game UI.",
  },
  {
    title: "Web Application Developer",
    company: "Upwork - Upwork Profile",
    to: "https://upwork.com",
    location: "Remote, Freelancer",
    date: "Feb'21 - Present",
    description:
      "I have been working as a freelancer on Upwork. Most of the jobs I took were via Upwork. I gathered all my experience from Upwork Projects.",
  },
  {
    title: "Frontend Dev",
    company: "SPORFORYA",
    to: "https://sporforya.com",
    location: "Remote, USA",
    date: "Jun'22 - Mar'23",
    description:
      "A part-time job where I helped building and maintaining the SPORFORYA Admin Dashboard and I also build several landing pages.",
  },

  {
    title: "Frontend Dev",
    company: "MBAKOP LLC",
    to: "https://mbakop.com",
    location: "Remote, USA",
    date: "Mar'22 - Dec'22",
    description:
      "First full-time job where I worked in a team. I was responsible for building the Funcomp platform, I also helped building a Widget which was used in the company websites.",
  },
];

export default function Index() {
  return (
    <div className="mx-auto mt-10 max-w-5xl space-y-20">
      <section className="section">
        <h2 className="mb-6 w-fit bg-secondary pl-2 pr-8 text-3xl font-semibold tracking-wide text-background">
          Hey, I&apos;m <span className="underline">Alif Haider</span>.
        </h2>
        <div className="space-y-3">
          <p className="mt-4 text-lg md:text-xl">
            I am a software engineer. I have been building web applications and
            solving problems for web
            <strong> over two years</strong>.
          </p>
          <p>
            I am also a tech enthusiast, I always love to learn new
            technologies. The majority of the apps I built with{" "}
            <BioLink to="https://react.dev">React.js</BioLink> and modern
            frameworks of React.js (
            <BioLink to="https://nextjs.org">Next.js</BioLink> or{" "}
            <BioLink to="https://remix.run">Remix.run</BioLink>), however, I
            also have ideas to use{" "}
            <BioLink to="https://www.rust-lang.org/">Rust</BioLink> for CLI
            tools or{" "}
            <BioLink to="https://www.geeksforgeeks.org/cpp-for-game-development/">
              C++,{" "}
            </BioLink>
            and <BioLink to="https://godotengine.org/">Godot</BioLink> to build
            a game.
          </p>
          <p>
            I have completed my graduation in{""}
            <strong> Computer Science and Engineering</strong> from North South
            University.
          </p>
          <p>
            I am always interested in hearing about your project plans, in need
            of any suggestions, or just want to say
            <code className="text-3xl font-bold">Hi 🙌</code>
            feel free to reach out to me.
          </p>
        </div>

        <div className="mt-6 flex gap-4">
          <IconButton href="https://github.com/alifhaider">
            <FaGithubSquare title="Github" className="h-8 w-8" />
          </IconButton>
          <IconButton href="https://twitter.com/haider_alif">
            <FaSquareXTwitter title="Twitter" className="h-8 w-8" />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/alif-haider">
            <FaLinkedin className="h-8 w-8" title="Linked-In" />
          </IconButton>

          <IconButton href="https://www.facebook.com/alif.haider.7927">
            <FaFacebookSquare className="h-8 w-8" title="Facebook" />
          </IconButton>
        </div>
      </section>

      <div className="flex flex-col gap-20 border-border md:flex-row md:gap-10">
        <div className="space-y-20 border-border  md:sticky md:top-0 md:h-screen md:border-r md:pr-10">
          <section>
            <SectionTitle title="About" />
            <ul className="space-y-4">
              <InfoItem text="Alif Haider">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </InfoItem>
              <InfoItem text="Software Engineer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 4.25C2 4.11193 2.11193 4 2.25 4H12.75C12.8881 4 13 4.11193 13 4.25V11.5H2V4.25ZM2.25 3C1.55964 3 1 3.55964 1 4.25V12H0V12.5C0 12.7761 0.223858 13 0.5 13H14.5C14.7761 13 15 12.7761 15 12.5V12H14V4.25C14 3.55964 13.4404 3 12.75 3H2.25Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </InfoItem>
              <InfoItem text="Dhaka, Bangladesh">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </InfoItem>
            </ul>
          </section>

          <section className=" overflow-y-auto">
            <SectionTitle title="Expertise" />

            <ul className="space-y-4">
              <BoxItem text="TypeScript" />
              <BoxItem text="JavaScript" />
              <BoxItem text="React" />
              <BoxItem text="Remix.run" />
              <BoxItem text="GDScript" />
            </ul>
          </section>
        </div>

        <div className="flex-grow">
          <SectionTitle title="Projects" />
          <ul className="space-y-10 md:space-y-14">
            {projects.map((project, index) => (
              <Project key={index}>
                <ProjectTitle>{project.name}</ProjectTitle>
                {project.link && (
                  <ProjectLink to={project.link}>
                    {project.linkText}
                  </ProjectLink>
                )}
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.languages && (
                  <ProjectLaguages languages={project.languages} />
                )}
              </Project>
            ))}
          </ul>
        </div>
      </div>

      <section className="section">
        <SectionTitle title="Experience" />
        <ul className="space-y-10 md:space-y-14">
          {experiences.map((experience, index) => (
            <Experience key={index}>
              <ExperienceTitle text={experience.title} />
              <ExperienceInfo>
                <ExperienceCompany
                  to={experience.to}
                  location={experience.location}
                >
                  {experience.company}
                </ExperienceCompany>
                <ExxperienceDate>{experience.date}</ExxperienceDate>
              </ExperienceInfo>
              <ExperienceDescription>
                {experience.description}
              </ExperienceDescription>
            </Experience>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionTitle title="Hobby" />

        <ul className="space-y-6">
          <li>
            <h6>Video Games</h6>
            <p>
              I love to play video games. Most of my leisure time I spend
              playing video games either on phone or PC. I love to play games
              like <CodeText>DOTA2</CodeText>, <CodeText>FIFA Mobile</CodeText>,{" "}
              <CodeText>PUBG Mobile</CodeText>
              and many more.
            </p>
          </li>

          <li>
            <h6>Movies</h6>
            <p>
              I watch a lot of movies. A total movie freak. My favorite genres
              are Crime, Thriller, Romance, and Sci-Fi. My favorities are{" "}
              <CodeText>V for Vendetta</CodeText>,{" "}
              <CodeText>Shawshank Redemption</CodeText>,{" "}
              <CodeText>The Green Mile</CodeText>, and
              <CodeText>Titanic</CodeText>.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}

function CodeText({ children }: { children: React.ReactNode }) {
  return <code>{children}</code>;
}

function BioLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="underlined text-nowrap font-medium text-secondary"
    >
      {children}
    </a>
  );
}

function IconButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function InfoItem({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <li title={text} className="flex items-center gap-6">
      {children}
      <span className="text-lg font-medium md:text-xl">{text}</span>
    </li>
  );
}

function BoxItem({ text }: { text: string }) {
  return (
    <li className="flex items-center justify-center rounded-sm border border-border px-6 py-3 shadow-inner">
      {text}
    </li>
  );
}
