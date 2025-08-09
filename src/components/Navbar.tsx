"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-5 z-50 w-full max-w-7xl px-4">
      <div className="bg-white dark:bg-black dark:text-white text-black shadow-md rounded-full">
        <nav className="px-5 sm:px-7 py-3 flex flex-wrap sm:flex-nowrap justify-between items-center gap-4">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <ul className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 items-center justify-center text-base sm:text-lg font-normal">
            <li>
              <Link
                href="/"
                className={
                  pathname === "/" ? "text-red-500" : "hover:text-red-400"
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "text-red-500"
                    : "hover:text-red-400"
                }
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className={
                  pathname === "/faq" ? "text-red-500" : "hover:text-red-400"
                }
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className={
                  pathname === "/register"
                    ? "text-red-500"
                    : "hover:text-red-400"
                }
              >
                Register
              </Link>
            </li>
            <li>
              <ToggleTheme />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
