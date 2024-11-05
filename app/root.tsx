import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { themeSessionResolver } from "./sessions.server";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import tailwindCSS from "~/tailwind.css?url";
import appCSS from "~/app.css?url";

export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png",
  },
  {
    rel: "icon",
    type: "image/x-icon",
    href: "/favicon.ico",
  },
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "stylesheet", href: tailwindCSS },
  { rel: "stylesheet", href: appCSS },
];

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
};

export default function AppWithProviders() {
  return <App />;
}

function App() {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="mx-auto max-w-7xl bg-gray-900">
        <div className="scroll-watcher" />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
