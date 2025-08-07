import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { THEMES } from "../config/themeConfig";
import { useEffect, useState } from "react";

export default function ThemeToggle({ iconSize = 5 }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.dark
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === THEMES.light ? THEMES.dark : THEMES.light);
  };

  const iconClass = `w-${iconSize} h-${iconSize}`;

  return (
    <button
      onClick={toggleTheme}
      className="p-2  hover:bg-transparent focus:outline-none "
    >
      {theme === THEMES.dark ? (
        <MoonIcon className={iconClass} />
      ) : (
        <SunIcon className={iconClass} />
      )}
    </button>
  );
}
