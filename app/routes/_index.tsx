import { type ReactNode } from "react";
import { type MetaFunction } from "@remix-run/node";
import { Description, SectionTitle } from "~/components/common";
import {
  Project,
  ProjectLaguages,
  ProjectLink,
  ProjectTitle,
} from "~/components/project";
import {
  Experience,
  ExperienceCompany,
  ExperienceInfo,
  ExperienceTitle,
  ExxperienceDate,
} from "~/components/experience";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaQuoteLeft,
  FaQuoteRight,
  FaRegUser,
} from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { MdOutlinePinDrop } from "react-icons/md";

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

// ` in html code
// &#96; or `

const projects: Array<Project> = [
  {
    name: "Nulandia Admin Dashboard",
    link: "https://admin.nulandia.com",
    linkText: "admin.nulandia.com",
    description:
      "Nulandia Admin Dashboard was an interesting project for me. It was made for updating game interface of Nulandia like change building name or create a new neighborhood in the game through web forms. This changes reflects into the game. The interesting part of this project is backend team had the full control of which type of form fields like (<code>&#96;&#60;input /&#62;&#96;</code> or <code>&#96;&#60;select&#62;&#96;</code>) will be rendered in which. All I was getting from API, JSON format form-configs and I had to render those fields into the UI using react. I used to call a form <code>&#96;&#60;DynamicForm formConfigs={formConfigs} /&#62;&#96;</code>.",
    languages: [language.REACT, language.TAILWIND],
  },
  {
    name: "Nulandia Game User Interface",
    description:
      "Game UI for Nulandia. It was firstly built with <code>&#96;React.js&#96;</code> but later the whole app re-implemented within the game which was using <code>&#96;Godot Gmae Engine&#96;</code> and <code>&#96;GDScript&#96;</code>. That was a whole new journey for me because the programming language was totally new to me, and I had to use the same JSON format form configs but using <code>&#96;GDScript&#96;</code>. Adopting a different language pattern I thought would be way harder but worked out smoothly.",
    languages: [language.GDENGINE, language.GDSCRIPT],
  },
  {
    name: "Hydepenthouse Airbnb",
    link: "https://hydepenthouse.com",
    linkText: "hydepenthouse.com",
    description: `Hydepnethouse is an Airbnb like website. This project is built with <code>&#96;Remix.run&#96;</code> which also is a <code>&#96;React.js&#96;</code> framework. I had used Remix for lots of my side-project but in production level this was the first one. But I had a huge interest in Remix since when Remix been Open Sourced. This project structure was quite a bit different than usual. Because a few domains were pointing to the same app. When an user visits x.com, in server it gets the theme for that domain and uses that in rendering, so for each domains the color scheme and fonts are different. \nI learned Remix patterns from <a href="https://kentcdodds.com" target="_blank" rel="noopener noreferrer" class="underlined">Kent C Dodds</a> and his <a href="https://epicweb.dev"target="_blank" rel="noopener noreferrer" class="underlined">Epic Web Workshops</a>. Huge shoutout to him 📣 for open-sourcing the learning materials.`,
    languages: [language.REMIX, language.TS, language.SCSS],
  },
  {
    name: "Definya MMORPG Game",
    link: "https://play.definya.com/",
    linkText: "play.definya.com",
    description: `Definya is an MMORPG game, built with the MERN stack. This is the first time I worked as a full-stack developer. The project structured really well, adopting this large codebase was too much simple. I learned <code>&#96;Redis&#96;</code> to manage cache through this app. <code>&#96;PhaserJS&#96;</code> and <code>&#96;React.js&#96;</code> was used to build the game. This game is also availabe in <a href="https://play.google.com/store/apps/details?id=com.definya.app" target="_blank" rel="noopener noreferrer" class="underlined">Google Play Store</a>.`,
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
    description: `SPORFORYA is a sports activities managing platform. Managing events, managing students through an application was the goal of this project. The main app is in <a href="https://apps.apple.com/us/app/sporti-app/id1628232729" target="_blank" rel="noopener noreferrer" class="underlined">IOS App Store</a> and also in <a href="https://play.google.com/store/apps/details/SPORFORYA?id=com.sporforya" target="_blank" rel="noopener noreferrer" class="underlined">Google Play store</a>.`,
    languages: [language.REACT, language.TS, language.CSS],
  },
  {
    name: "Funcomp",
    link: "https://funcomp.com",
    linkText: "funcomp.com",
    description:
      "Funcomp is a platform where people can find fun activities program like suggesting video games, movies, etc through an application. While I was building this app I was almost new in using <code>&#96;React.js&#96;</code>. To manage CRUD for this app, I used <code>&#96;Redux&#96;</code> and this is the last project I used Redux.",
    languages: [language.REACT, language.REDUX, language.CSS],
  },
  {
    name: "Promenade",
    link: "https://promenade.ai",
    linkText: "promenade.ai",
    description:
      "Promenade is a military job application platform where veterans can find jobs and can appoint to a training center. This is the first <code>&#96;React.js&#96;</code>  project I have ever worked on. ",
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
    to: "https://www.upwork.com/freelancers/~014066482556c551be",
    location: "Remote, Freelancer",
    date: "Feb'21 - Present",
    description:
      "I am working as a freelancer on Upwork. Most of the jobs I took were via Upwork. And also, most of the experience I gathered are from Upwork Projects.",
  },
  {
    title: "Frontend Dev",
    company: "SPORFORYA",
    to: "https://sporforya.com",
    location: "Remote, USA",
    date: "Jun'22 - Mar'23",
    description:
      "In this part-time job I contributed in building and maintaining the SPORFORYA Admin Dashboard and I also have built several landing pages, which were pixel perfect implementation from designs.",
  },

  {
    title: "Frontend Dev",
    company: "MBAKOP LLC",
    to: "https://mbakop.com",
    location: "Remote, USA",
    date: "Mar'22 - Dec'22",
    description:
      "First full-time job of my career, and I worked as a Front-End Dev. I have built the Funcomp and Promenade from scratch for this company.",
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
            also learned to use{" "}
            <BioLink to="https://www.rust-lang.org/">Rust</BioLink> to build CLI
            tools or{" "}
            <BioLink to="https://www.geeksforgeeks.org/cpp-for-game-development/">
              C++,{" "}
            </BioLink>
            and with <BioLink to="https://godotengine.org/">Godot</BioLink> I
            already have contributed in building a game.
          </p>
          <p>
            I have completed my graduation in{""}
            <strong> Computer Science and Engineering</strong> from{" "}
            <strong>North South University</strong> which is located in{" "}
            <strong>Dhaka, Bangladesh</strong>.
          </p>
          <p>
            I am always interested in hearing about your project plans, in need
            of any suggestions, or if you just want to say
            <code className="text-3xl font-bold">&#96;Hi 🙌&#96;</code>
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

      <div className="flex flex-col gap-20 border-border lg:flex-row lg:gap-10">
        <div className="space-y-20 border-border  lg:sticky lg:top-0 lg:h-screen lg:border-r lg:pr-10">
          <section>
            <SectionTitle>About</SectionTitle>
            <ul className="space-y-4">
              <InfoItem text="Alif Haider">
                <FaRegUser className="h-6 w-6" />
              </InfoItem>
              <InfoItem text="Software Engineer">
                <GrPersonalComputer className="h-6 w-6" />
              </InfoItem>
              <InfoItem text="Dhaka, Bangladesh">
                <MdOutlinePinDrop className="h-6 w-6" />
              </InfoItem>
            </ul>
          </section>

          <section className="overflow-y-auto">
            <SectionTitle>Expertise</SectionTitle>

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
          <SectionTitle>Projects</SectionTitle>

          <ul className="space-y-10 md:space-y-14">
            {projects.map((project, index) => (
              <Project key={index}>
                <ProjectTitle>{project.name}</ProjectTitle>
                {project.link && (
                  <ProjectLink to={project.link}>
                    {project.linkText}
                  </ProjectLink>
                )}
                <Description>{project.description}</Description>
                {project.languages && (
                  <ProjectLaguages languages={project.languages} />
                )}
              </Project>
            ))}
          </ul>
          <div className="mt-10 text-gray">
            <FaQuoteLeft className="mb-3 mr-0.5 inline w-2" />

            <p className="inline text-sm italic">
              Without these I also have contributed on various projects by
              building a component from scratch or update fucntionalities for a
              component.
            </p>
            <FaQuoteRight className="mb-3 ml-0.5 inline w-2" />
          </div>
        </div>
      </div>

      <section className="section">
        <SectionTitle>Experiences</SectionTitle>
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
              <Description>{experience.description}</Description>
            </Experience>
          ))}
        </ul>
      </section>

      <section className="section">
        <SectionTitle>Hobbies</SectionTitle>

        <ul className="space-y-6">
          <li>
            <h6>Video Games</h6>
            <p>
              I love to play video games. Most of my leisure time I spend
              playing video games either on phone or PC. Most of the games I
              play are <CodeText>DOTA2</CodeText>,{" "}
              <CodeText>FIFA Mobile</CodeText>. I also have played{" "}
              <CodeText>PUBG Mobile</CodeText> while I was studing at
              university.
            </p>
          </li>

          <li>
            <h6>Movies</h6>
            <p>
              I watch a lot of movies. A total movie freak, you can say. My
              favorite genres are Crime, Thriller, Romance, and a few Sci-Fi. My
              favorite movies are <CodeText>3 Idiots</CodeText>,{" "}
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
  return <code>&#96;{children}&#96;</code>;
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
