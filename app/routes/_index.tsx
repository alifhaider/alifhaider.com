import type { MetaFunction } from "@remix-run/node";
import { Theme, useTheme } from "remix-themes";

export const meta: MetaFunction = () => {
  return [
    { title: "Alif | Home" },
    { name: "description", content: "A Software Engineer" },
  ];
};

export default function Index() {
  const [, setTheme] = useTheme();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button onClick={() => setTheme(Theme.LIGHT)}>Light</button>
      <button onClick={() => setTheme(Theme.DARK)}>Dark</button>
    </div>
  );
}
