import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {
  ThemeProvider,
  PreventFlashOnWrongTheme,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import tailwindCSS from "~/tailwind.css?url";
import appCSS from "~/app.css?url";
import clsx from "clsx";

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
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data.theme} themeAction="/action/set-theme">
      <App />
    </ThemeProvider>
  );
}

function App() {
  const data = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  return (
    <html lang="en" className={clsx(theme, "scroll-smooth")}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="bg-background min-h-screen w-full overflow-x-hidden px-4 md:px-8">
        <div className="scroll-watcher" />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
