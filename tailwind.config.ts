import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        "slide-in-down": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-up": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
      },
      animation: {
        "slide-in-down": "slide-in-down 0.5s ease-out",
        "slide-out-up": "slide-out-up 0.5s ease-out",
      },
    },
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
