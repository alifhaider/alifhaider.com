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
import Navbar from "./components/navbar";
import tailwindCSS from "~/tailwind.css?url";
import appCSS from "~/app.css?url";
import clsx from "clsx";
import Footer from "./components/footer";

export const links: LinksFunction = () => [
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen w-full bg-background px-4 md:px-8">
        <Navbar />
        <div className="scroll-watcher" />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
