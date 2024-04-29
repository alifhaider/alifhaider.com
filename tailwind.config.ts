import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      code: [
        "Fira Code",
        "UI Mono",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
    colors: {
      background: "var(--background)",
      text: "var(--text)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      warning: "var(--warning)",
      gray: "var(--gray)",
      border: "var(--border)",
    },
  },
  plugins: [],
} satisfies Config;
