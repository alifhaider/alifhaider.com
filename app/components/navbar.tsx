import { Link, NavLink } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";
import LightIcon from "~/assets/icons/LightIcon";
import NightIcon from "~/assets/icons/NightIcon";

function Navbar() {
  const [theme, setTheme] = useTheme();

  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-end font-bold">
      <div className="flex gap-4 md:gap-8">
        <Link to="/" className="group">
          <h4 className="flex md:scale-100">
            <span className="text-[120px] text-primary group-hover:text-text transition-all">
              A
            </span>
            <span className="flex flex-col justify-center">
              <span className="text-7xl tracking-wider text-primary group-hover:text-text transition-all">
                lif
              </span>
              <span className="-mt-4 ml-[2px] text-4xl tracking-tighter group-hover:text-primary transition-all">
                Haider
              </span>
            </span>
          </h4>
        </Link>
        <ul className="flex items-end mb-[41px] transition-colors text-lg">
          <li>
            <NavLink to="/blogs" className="hover:text-secondary">
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center mb-12 shadow-md  border-text border rounded-md transition-all">
        <button
          className={`py-2 px-3 rounded-l-md ${
            theme === Theme.LIGHT ? "bg-background" : "bg-slate-500"
          }`}
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <LightIcon />
          <span className="sr-only">Light theme</span>
        </button>
        <button
          className={`py-2 px-3 rounded-r-md ${
            theme === Theme.DARK ? "bg-background" : "bg-slate-500"
          }`}
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
