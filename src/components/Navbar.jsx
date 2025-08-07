import { useState, useEffect } from "react";
import { LinkIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import { THEMES } from "../config/themeConfig";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    ["Services", "services"],
    ["Portfolio", "portfolio"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"],
  ];

  // Mobile navbar height
  const navBarHeight = 56;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === THEMES.dark);
    };
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    updateTheme();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const mobileMenuBgClass = "bg-base-300";

  return (
    <nav
      className={`fixed w-full z-50 shadow ${
        scrolled ? "bg-base-300" : "bg-base-300"
      } transition-colors duration-500`} // ✅ فقط این اضافه شد
      style={{ minHeight: navBarHeight }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:justify-start">
        {/* --- Mobile Navbar Top Bar (Always visible) --- */}
        <div
          className="flex w-full md:hidden items-center justify-between bg-base-300 transition-colors duration-500"
          style={{ minHeight: navBarHeight }}
        >
          {/* Theme Toggle Button */}
          <div className="h-12 w-12 border border-base-content rounded-lg flex items-center justify-center mr-2">
            <ThemeToggle iconSize={7} />
          </div>
          {/* Logo */}
          <h1
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-2xl font-bold tracking-widest cursor-pointer select-none transition duration-300 hover:scale-105"
          >
            <LinkIcon className="w-6 h-6 text-primary" />
            MILINK
          </h1>
          {/* Hamburger / X Icon */}
          <button
            className="h-12 w-12 border border-base-content rounded-lg flex items-center justify-center ml-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          >
            {open ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* --- Desktop Navbar --- */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* Desktop Logo */}
          <h1
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-2xl font-bold tracking-widest cursor-pointer select-none transition duration-300 hover:scale-105"
          >
            <LinkIcon className="w-6 h-6 text-primary" />
            MILINK
          </h1>
          {/* Navigation */}
          <ul className="flex items-center gap-6 border border-base-content text-base-content rounded-full px-6 pt-3 shadow-sm transition-colors">
            {navItems.map(([name, id]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="btn btn-ghost hover:bg-transparent px-2 py-1 relative rounded-lg
                  after:content-[''] after:block after:w-full
                  after:h-[1.5px] after:bg-current after:scale-x-0
                  hover:after:scale-x-100 after:origin-right
                  hover:after:origin-left after:transition-transform
                  after:duration-300 after:mt-[-20px]"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          {/* Theme Toggle (Desktop) */}
          <div className="ml-6 flex items-center">
            <ThemeToggle iconSize={6} />
          </div>
        </div>
      </div>

      {/* --- Mobile Menu slides below navbar, always solid and in sync with theme --- */}
      <div
        className={`
          md:hidden fixed left-0 mt-5
          w-full ${mobileMenuBgClass} transition-colors duration-500
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          z-40
        `}
        style={{
          top: navBarHeight,
          height: `calc(100vh - ${navBarHeight}px)`,
        }}
      >
        <ul className="flex flex-col items-center justify-center gap-6 mt-8">
          {navItems.map(([name, id]) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="btn btn-ghost hover:bg-transparent text-lg rounded-lg"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
