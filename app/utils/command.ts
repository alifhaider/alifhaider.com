export type Content =
  | {
      text: string;
    }
  | {
      link: {
        href: string;
        text: string;
      };
    };

export type CommandResponse = {
  cmd?: string;
  title: string;
  contents: Array<Content>;
};

export const initialState = {
  title: "Hi there! I'm Alif Haider.",
  contents: [
    {
      text: "I'm a software engineer with a passion for building web applications.",
    },
    { text: "--> Type 'help' to see the list of available commands." },
  ],
};

export function processCommand(cmd: string): CommandResponse {
  const command = cmd.toLowerCase().trim();

  switch (command) {
    case "":
      return {
        title: "",
        contents: [{ text: "" }],
      };
    case "reset":
      return {
        cmd: "reset",
        ...initialState,
      };
    case "help":
      return {
        cmd: "help",
        title: "Available commands:",
        contents: [
          { text: "  about - Learn about me" },
          { text: "  skills - View my technical skills" },
          { text: "  projects - See my projects" },
          { text: "  experience - View my work experience" },
          { text: "  education - See my educational background" },
          { text: "  contact - Get my contact information" },
          { text: "  clear - Clear the terminal" },
          { text: "reset - Reset the terminal" },
          { text: "blog - View my blog posts" },
        ],
      };
    case "about":
      return {
        cmd: "about",
        title: "About me:",
        contents: [
          { text: "Hi, I'm Alif Haider!" },
          {
            text: "I'm a full-stack developer with 3 years of experience in creating web applications.",
          },
          {
            text: "I'm passionate about clean code, user experience, and staying up-to-date with the latest tech trends.",
          },
          {
            text: "When I'm not coding, you can find me playing video games, watching movies, or exploring new places.",
          },
        ],
      };
    case "skills":
      return {
        cmd: "skills",
        title: "Technical Skills:",
        contents: [
          {
            text: "  - Frontend: React, Remix.run, TypeScript, HTML5, CSS3, Tailwind CSS",
          },
          { text: "  - Backend: Node.js, Express, Go" },
          { text: "  - Databases: PostgreSQL, MongoDB" },
          { text: "  - DevOps: Docker, AWS, CI/CD pipelines" },
          { text: "  - Testing: Jest, Cypress, Playwright" },
          { text: "  - Other: GraphQL, RESTful APIs, Git" },
        ],
      };
    case "projects":
      return {
        cmd: "projects",
        title: "Notable Projects:",
        contents: [
          { text: "1. Dashboard - Nulandia Admin Dashboard" },
          { text: "2. MMORPG Game - Definya" },
          { text: "3. AirBnB site - MyAbode" },
          { text: "4. Godot Game - Nulandia" },
          { text: 'Type "project <number>" for more details on each project.' },
        ],
      };
    case "project 1":
      return {
        cmd: "project 1",
        title: "Nulandia Admin Dashboard",
        contents: [
          { text: "- Built with Vite, React, and Tailwind CSS" },
          {
            text: "- Features: user authentication, Dynamic Form, Dynamic Routing",
          },
          {
            text: "- Implemented responsive design and optimized for performance",
          },
          {
            link: {
              href: "https://admin.nulandia.com",
              text: "admin.nulandia.com",
            },
          },
        ],
      };
    case "project 2":
      return {
        cmd: "project 2",
        title: "MMORPG Game - Definya",
        contents: [
          {
            text: "- Developed using React, Phaser, Node.js, Socket.io, MongoDB, Storybook",
          },
          {
            text: "- Features: real-time multiplayer, chat system, character customization",
          },
          { text: "- Implemented real-time Chat System, Push Notifications" },
          {
            link: {
              href: "https://play.definya.com",
              text: "definya.com",
            },
          },
        ],
      };
    case "project 3":
      return {
        cmd: "project 3",
        title: "AirBnB site - MyAbode",
        contents: [
          { text: "- Created with Remix.run, React, TypeScript, Tailwind CSS" },
          {
            text: "- Features: property listings, user authentication, booking system, multi-domain support",
          },
          {
            text: "- Implemented better search functionality, improved UI/UX, pixel perfect design",
          },
          {
            link: {
              href: "https://myabode.com",
              text: "myabode.com",
            },
          },
        ],
      };
    case "project 4":
      return {
        cmd: "project 4",
        title: "Godot Game - Nulandia",
        contents: [
          { text: "- Developed UI using Godot Engine, GDScript" },
          {
            text: "- Features: Purchasable items, Sell items, Inventory system",
          },
          {
            text: "- Implemmted system to purchase items, sell items, make offers, and create buildings",
          },
          {
            link: {
              href: "store.steampowered.com/app/2703670/Nulandia/",
              text: "Steam Link",
            },
          },
        ],
      };
    case "experience":
      return {
        cmd: "experience",
        title: "Work Experience:",
        contents: [
          { text: "1. Full Stack Developer - Definya" },
          {
            text: "   - Built 2D MMORPG game using React, Node.js, and MongoDB",
          },
          {
            text: "   - Implemented real-time multiplayer, chat system, and character customization",
          },
          { text: "   - Optimized game performance and fixed bugs" },
          { text: "" },
          { text: "2. Impulse Communications, Inc" },
          {
            text: "   - Developed a web application to update Nulandia Game UI",
          },
          {
            text: "   - Implemented Game Dashboard UI using Godot Engine and GDScript",
          },
          { text: "" },
          { text: "3. MBAKOP LLC" },
          {
            text: "   - Assisted in the development of a lead generation platform",
          },
          { text: "   - Implemented frontend features using React and Redux" },
          {
            text: "   - Implemented Military Veterans Application using React and Redux",
          },
        ],
      };
    case "education":
      return {
        cmd: "education",
        title: "Educational Background:",
        contents: [
          {
            text: "1. Bachelor of Science in Computer Science and Engineering",
          },
          { text: "   - North South University, Graduated 2021" },
          {
            text: "   - Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems",
          },
        ],
      };
    case "contact":
      return {
        cmd: "contact",
        title: "Get in touch with me:",
        contents: [
          {
            link: {
              href: "mailto:alifhaider57@gmail.com",
              text: "Email: alifhaider57@gmail.com",
            },
          },
          {
            link: {
              href: "https://linkedin.com/in/alif-haider",
              text: "LinkedIn: linkedin.com/in/alif-haider",
            },
          },
          {
            link: {
              href: "https://github.com/alifhaider",
              text: "GitHub: github.com/alifhaider",
            },
          },
          {
            link: {
              href: "https://x.com/haider_alif",
              text: "X: @haider_alif",
            },
          },
        ],
      };
    case "clear":
      return {
        cmd: "clear",
        title: "Terminal Cleared",
        contents: [],
      };
    default:
      return {
        cmd: cmd,
        title: "Command not found",
        contents: [
          { text: "Type 'help' to see the list of available commands." },
        ],
      };
  }
}
