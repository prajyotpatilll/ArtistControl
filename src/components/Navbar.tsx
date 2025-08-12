"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
    { href: "/register", label: "Register" },
  ];

  return (
    <header className="fixed top-5 z-50 w-full max-w-7xl px-4 ">
      <div className="bg-white dark:bg-black dark:text-white text-black shadow-md sm:rounded-full rounded-lg">
        <nav className="px-5 sm:px-7 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop menu */}
          <ul className="hidden sm:flex gap-4 sm:gap-6 items-center text-base sm:text-lg font-normal">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={
                    pathname === href
                      ? "text-red-500"
                      : "hover:text-red-400"
                  }
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <ToggleTheme />
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="sm:hidden px-5 pb-4">
            <ul className="flex flex-col gap-3 text-base font-normal">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={
                      pathname === href
                        ? "text-red-500"
                        : "hover:text-red-400"
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <ToggleTheme  />
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
