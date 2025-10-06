import { useRef } from "react";
import { type MetaFunction } from "@remix-run/node";
import { useScroll, useTransform, motion } from "framer-motion";
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { Theme, useTheme } from "remix-themes";
import { Link } from "@remix-run/react";
import { AnimatedBackground } from "~/components/animated-background";
import { Button } from "~/components/ui/button";
import { TypewriterText } from "~/components/typewriter-text";
import { Card } from "~/components/ui/card";

export const meta: MetaFunction = () => {
  return [
    { title: "Alif Haider | Full Stack Developer" },
    { name: "description", content: "A Software Engineer" },
  ];
};

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Remix.run",
  "Node.js",
  "MongoDB",
  "Redis",
  "WebSocket",
  "Tailwind CSS",
  "SCSS",
  "GDScript",
  "Godot Engine",
  "Redux",
  "Git",
];

const projects = [
  {
    title: "Nulandia Admin Dashboard",
    url: "admin.nulandia.com",
    description:
      "Dynamic form rendering system for game interface management. Built with React and JSON-driven form configs that render different field types dynamically.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Dynamic Forms"],
    company: "Impulse Communications",
  },
  {
    title: "Nulandia Game UI",
    description:
      "Game interface built initially with React.js, then reimplemented in Godot Engine using GDScript. Adapted JSON form configs to a new programming paradigm.",
    tags: ["Godot Engine", "GDScript", "Game Development"],
    company: "Impulse Communications",
  },
  {
    title: "Hydepenthouse Airbnb",
    url: "hydepenthouse.com",
    description:
      "Multi-domain Airbnb platform built with Remix.run. Dynamic theming system where each domain gets unique color schemes and fonts based on server-side detection.",
    tags: ["Remix.run", "TypeScript", "SCSS", "Multi-tenant"],
    company: "Freelance",
  },
  {
    title: "Definya MMORPG",
    url: "play.definya.com",
    description:
      "Full-stack MMORPG game using MERN stack. Implemented Redis caching, WebSocket real-time communication, and PhaserJS game engine integration.",
    tags: ["React", "Node.js", "MongoDB", "Redis", "WebSocket", "PhaserJS"],
    company: "Freelance",
  },
  {
    title: "SPORFORYA Admin",
    url: "admin.sporforya.com",
    description:
      "Sports activities management platform for managing events and students. Admin dashboard with comprehensive CRUD operations.",
    tags: ["React", "TypeScript", "CSS"],
    company: "SPORFORYA",
  },
  {
    title: "Funcomp",
    url: "funcomp.com",
    description:
      "Platform for discovering fun activities including video games and movies. Built with React and Redux for state management.",
    tags: ["React", "Redux", "CSS"],
    company: "MBAKOP LLC",
  },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Impulse Communications",
    to: "https://impulsecorp.com/",
    location: "Remote, USA",
    period: "Feb'23 - Present",
    description: "Worked on the Nulandia Admin Dashboard and Nulandia Game UI.",
  },
  {
    role: "Web Application Developer",
    company: "Upwork - Upwork Profile",
    to: "https://www.upwork.com/freelancers/~014066482556c551be",
    location: "Remote, Freelancer",
    period: "Feb'21 - Present",
    description:
      "I am working as a freelancer on Upwork. Most of the jobs I took were via Upwork. And also, most of the experience I gathered are from Upwork Projects.",
  },
  {
    role: "Frontend Dev",
    company: "SPORFORYA",
    to: "https://sporforya.com",
    location: "Remote, USA",
    period: "Jun'22 - Mar'23",
    description:
      "In this part-time job I contributed in building and maintaining the SPORFORYA Admin Dashboard and I also have built several landing pages, which were pixel perfect implementation from designs.",
  },

  {
    role: "Frontend Dev",
    company: "MBAKOP LLC",
    to: "https://mbakop.com",
    location: "Remote, USA",
    period: "Mar'22 - Dec'22",
    description:
      "First full-time job of my career, and I worked as a Front-End Dev. I have built the Funcomp and Promenade from scratch for this company.",
  },
];

export default function Index() {
  const { scrollYProgress } = useScroll();
  const [theme, setTheme] = useTheme();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutTitleY = useTransform(aboutProgress, [0, 1], [100, -100]);
  const aboutContentY = useTransform(aboutProgress, [0, 1], [50, -50]);

  const { scrollYProgress: skillsProgress } = useScroll({
    target: skillsRef,
    offset: ["start end", "end start"],
  });
  const skillsTitleY = useTransform(skillsProgress, [0, 1], [120, -120]);
  const skillsContentY = useTransform(skillsProgress, [0, 1], [60, -60]);

  const { scrollYProgress: projectsProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"],
  });
  const projectsTitleY = useTransform(projectsProgress, [0, 1], [100, -100]);
  const projectsContentY = useTransform(projectsProgress, [0, 1], [50, -50]);

  const { scrollYProgress: experienceProgress } = useScroll({
    target: experienceRef,
    offset: ["start end", "end start"],
  });
  const experienceTitleY = useTransform(
    experienceProgress,
    [0, 1],
    [110, -110],
  );
  const experienceContentY = useTransform(
    experienceProgress,
    [0, 1],
    [55, -55],
  );

  return (
    <main className="text-foreground min-h-screen bg-background transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed right-6 top-6 z-50"
      >
        <Button
          variant="outline"
          size="icon"
          className="bg-card/80 hover:bg-card rounded-full border-border backdrop-blur-sm"
          onClick={() =>
            setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
          }
        >
          {theme === Theme.LIGHT ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
      </motion.div>

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed left-6 top-6 z-50"
      >
        <Link to="/blog">
          <Button
            variant="outline"
            size="sm"
            className="bg-card/80 hover:bg-card rounded-full border-border backdrop-blur-sm"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Blog
          </Button>
        </Link>
      </motion.nav>

      <motion.section
        style={{ opacity, scale }}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        {/* Animated background */}
        <AnimatedBackground />

        {/* Floating geometric shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-accent/10 animate-float absolute left-1/4 top-1/4 h-64 w-64 rounded-full blur-3xl" />
          <div
            className="bg-accent/5 animate-float absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-balance text-5xl font-bold md:text-7xl">
              Hey, I&apos;m{" "}
              <span className="via-accent text-transparent animate-gradient bg-gradient-to-r from-primary to-primary bg-clip-text">
                <TypewriterText text="Alif Haider" delay={100} />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground mb-6 text-balance text-lg leading-relaxed md:text-xl"
          >
            A software engineer crafting web applications and solving problems
            for the web. Building with React, TypeScript, and modern frameworks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base leading-relaxed"
          >
            Tech enthusiast with 2+ years of experience. From dynamic admin
            dashboards to MMORPG games, I love exploring new technologies and
            building innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="https://github.com/alifhaider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/alifhaider"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:hello@alifhaider.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      <section
        id="about"
        ref={aboutRef}
        className="relative overflow-hidden px-6 py-16"
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              style={{ y: aboutTitleY }}
              className="from-foreground to-accent text-transparent mb-6 bg-gradient-to-r bg-clip-text text-3xl font-bold md:text-4xl"
            >
              About
            </motion.h2>
            <motion.div
              style={{ y: aboutContentY }}
              className="text-muted-foreground space-y-4 text-base leading-relaxed"
            >
              <p>
                I&apos;m a software engineer passionate about building web
                applications that solve real problems. With over two years of
                experience, I&apos;ve worked on everything from dynamic admin
                dashboards to full-stack MMORPG games.
              </p>
              <p>
                I&apos;m a tech enthusiast who loves learning new technologies.
                While most of my work involves React.js and modern frameworks
                like Next.js and Remix.run, I&apos;m also interested in
                exploring Rust CLI tools and C++ OpenGL games. I&apos;ve even
                contributed to game development using Godot Engine.
              </p>
              <p>
                I completed my graduation in Computer Science and Engineering
                from North South University. Currently based in Dhaka,
                Bangladesh, working remotely with teams across the globe.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        ref={skillsRef}
        className="bg-muted/30 relative overflow-hidden px-6 py-16"
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              style={{ y: skillsTitleY }}
              className="from-foreground to-accent text-transparent mb-8 bg-gradient-to-r bg-clip-text text-3xl font-bold md:text-4xl"
            >
              Expertise
            </motion.h2>
            <motion.div
              style={{ y: skillsContentY }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "hsl(var(--color-accent))",
                  }}
                  className="bg-card hover:border-accent cursor-default rounded-full border border-border px-4 py-2 text-sm font-medium transition-all"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="relative overflow-hidden px-6 py-16"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              style={{ y: projectsTitleY }}
              className="from-foreground to-accent text-transparent mb-8 bg-gradient-to-r bg-clip-text text-3xl font-bold md:text-4xl"
            >
              Projects
            </motion.h2>
            <motion.div
              style={{ y: projectsContentY }}
              className="grid gap-6 md:grid-cols-2"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="hover:border-accent bg-card hover:shadow-accent/10 group h-full cursor-pointer p-6 transition-all duration-300 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="group-hover:text-accent text-xl font-bold transition-colors">
                        {project.title}
                      </h3>
                      {project.url && (
                        <a
                          href={`https://${project.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                    {project.url && (
                      <p className="text-accent font-mono mb-3 text-sm">
                        {project.url}
                      </p>
                    )}
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-muted text-muted-foreground rounded px-2 py-1 text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm font-medium">
                      {project.company}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="experience"
        ref={experienceRef}
        className="bg-muted/30 relative overflow-hidden px-6 py-16"
      >
        <div className="relative z-10 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2
              style={{ y: experienceTitleY }}
              className="from-foreground to-accent text-transparent mb-8 bg-gradient-to-r bg-clip-text text-3xl font-bold md:text-4xl"
            >
              Experience
            </motion.h2>
            <motion.div style={{ y: experienceContentY }} className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border-accent relative border-l-2 pb-6 pl-6 last:pb-0"
                >
                  <div className="bg-accent animate-pulse-glow absolute -left-[9px] top-0 h-4 w-4 rounded-full" />
                  <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <span className="text-muted-foreground font-mono text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-accent mb-1 font-medium">{exp.company}</p>
                  <p className="text-muted-foreground mb-2 text-sm">
                    {exp.location}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-transparent hover:border-accent/50 hover:shadow-accent/10 rounded-2xl border p-8 transition-all duration-500 hover:shadow-2xl"
          >
            <h2 className="from-foreground to-accent text-transparent mb-8 bg-gradient-to-r bg-clip-text text-3xl font-bold md:text-4xl">
              Beyond Code
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-card hover:border-accent p-6 transition-all duration-300">
                <h3 className="mb-3 text-xl font-bold">🎮 Video Games</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I love playing video games in my leisure time. My go-to games
                  are DOTA2 and FIFA Mobile. I also enjoyed PUBG Mobile during
                  my university days.
                </p>
              </Card>
              <Card className="bg-card hover:border-accent p-6 transition-all duration-300">
                <h3 className="mb-3 text-xl font-bold">🎬 Movies</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Total movie freak! I love Crime, Thriller, Romance, and Sci-Fi
                  genres. Favorites include 3 Idioms, Shawshank Redemption, The
                  Green Mile, and Titanic.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="bg-muted/30 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-transparent hover:border-accent/50 hover:shadow-accent/10 rounded-2xl border p-8 transition-all duration-500 hover:shadow-2xl"
          >
            <h2 className="from-foreground to-accent text-transparent mb-6 bg-gradient-to-r bg-clip-text text-3xl font-bold md:text-4xl">
              Let&apos;s Connect
            </h2>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-balance text-lg leading-relaxed">
              I&apos;m always interested in hearing about your project plans,
              need suggestions, or if you just want to say hi — don&apos;t
              hesitate to reach out!
            </p>
            <Button size="lg" className="group" asChild>
              <a href="mailto:hello@alifhaider.com">
                <Mail className="mr-2 h-5 w-5" />
                Send me an email
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">
              © 2025 Alif Haider. Built with Next.js & Tailwind CSS.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/alifhaider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/alifhaider"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent text-sm transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:hello@alifhaider.com"
                className="text-muted-foreground hover:text-accent text-sm transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
