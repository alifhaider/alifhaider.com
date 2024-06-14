import { Link, NavLink } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";
import LightIcon from "~/assets/icons/LightIcon";
import NightIcon from "~/assets/icons/NightIcon";

function Navbar() {
  const [, setTheme] = useTheme();

  return (
    <nav className="mx-auto flex max-w-5xl items-end justify-between border-b border-border font-bold ">
      <div className="flex gap-4 md:gap-8">
        <Link to="/" className="group">
          <h4 className="m-0 flex p-0 md:scale-100">
            <span className="text-[80px] text-primary transition-all group-hover:text-text md:text-[120px]">
              A
            </span>
            <span className="flex flex-col justify-center">
              <span className="text-4xl tracking-wider text-primary transition-all group-hover:text-text md:text-7xl">
                lif
              </span>
              <span className="-mt-2 ml-[2px] text-3xl tracking-tighter transition-all group-hover:text-primary md:-mt-4 md:text-4xl">
                Haider
              </span>
            </span>
          </h4>
        </Link>
        <ul className="mb-[26px] flex items-end text-lg transition-colors md:mb-[41px]">
          <li>
            <NavLink to="/blogs" className="underlined hover:text-secondary">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mb-12 flex items-center rounded-md  border border-border shadow-md transition-all">
        <button
          className="rounded-l-md bg-background px-3 py-2 dark:bg-[#f3eeea] dark:text-primary"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <LightIcon />
          <span className="sr-only">Light theme</span>
        </button>
        <button
          className="rounded-r-md bg-[#00224d] px-3  py-2 text-primary dark:bg-background dark:text-text"
          onClick={() => setTheme(Theme.DARK)}
        >
          <NightIcon />
          <span className="sr-only">Dark theme</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
