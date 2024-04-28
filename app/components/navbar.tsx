import { Link } from "@remix-run/react";
import { Theme, useTheme } from "remix-themes";
import LightIcon from "~/assets/icons/LightIcon";
import NightIcon from "~/assets/icons/NightIcon";

function Navbar() {
  const [, setTheme] = useTheme();

  return (
    <nav className="border-border mx-auto flex max-w-5xl items-end justify-between border-b font-bold ">
      <div className="flex gap-4 md:gap-8">
        <Link to="/" className="group">
          <h4 className="m-0 flex p-0 md:scale-100">
            <span className="text-[120px] text-primary transition-all group-hover:text-text">
              A
            </span>
            <span className="flex flex-col justify-center">
              <span className="text-7xl tracking-wider text-primary transition-all group-hover:text-text">
                lif
              </span>
              <span className="-mt-4 ml-[2px] text-4xl tracking-tighter transition-all group-hover:text-primary">
                Haider
              </span>
            </span>
          </h4>
        </Link>
        {/* <ul className="mb-[41px] flex items-end text-lg transition-colors">
          <li>
            <NavLink to="/blogs" className="hover:text-secondary">
              Blogs
            </NavLink>
          </li>
        </ul> */}
      </div>
      <div className="border-border mb-12 flex items-center  rounded-md border shadow-md transition-all">
        <button
          className="dark:bg-border rounded-l-md bg-background px-3 py-2 dark:text-primary"
          onClick={() => setTheme(Theme.LIGHT)}
        >
          <LightIcon />
          <span className="sr-only">Light theme</span>
        </button>
        <button
          className="bg-gray rounded-r-md px-3  py-2 text-primary dark:bg-background dark:text-text"
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
