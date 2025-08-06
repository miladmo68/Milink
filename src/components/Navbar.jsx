import { useState, useEffect } from "react";
import { LinkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    // ["About", "about"],
    ["Services", "services"],
    ["Portfolio", "portfolio"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "business");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const initialTheme = document.documentElement.getAttribute("data-theme");
    setIsDark(initialTheme === "business");

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 shadow ${
        scrolled ? "bg-base-300" : "bg-base-300/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:justify-start">
        {/* ✅ Mobile Navbar */}
        <div className="flex w-full md:hidden items-center justify-between">
          <button
            className="btn btn-ghost hover:bg-transparent text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

          {/* ✅ Mobile Brand Text with Icon */}
          <h1
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-5xl font-playfair tracking-wide cursor-pointer select-none transition duration-300 hover:scale-105"
          >
            <LinkIcon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            MILINK
          </h1>

          <ThemeToggle />
        </div>

        {/* ✅ Desktop Navbar */}
        <div className="hidden md:flex w-full items-center justify-between">
          {/* ✅ Desktop Brand Text with Icon */}
          <h1
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 text-4xl font-playfair tracking-wide cursor-pointer select-none transition duration-300 hover:scale-105"
          >
            <LinkIcon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            MILINK
          </h1>

          {/* ✅ Navigation Links */}
          <ul className="flex items-center gap-6 border border-base-content text-base-content rounded-full px-6 pt-3 shadow-sm transition-colors">
            {navItems.map(([name, id]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="btn btn-ghost hover:bg-transparent px-2 py-1 relative 
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

          <ThemeToggle />
        </div>
      </div>

      {/* ✅ Fullscreen Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-full bg-base-100 shadow-lg p-6 z-40 transition-transform">
          <div className="flex justify-between items-center mb-4">
            <h1
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 text-3xl font-extrabold tracking-widest cursor-pointer select-none transition duration-300 hover:scale-105 font-sans"
            >
              <LinkIcon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
              MILINK
            </h1>
            <button
              className="btn btn-sm btn-ghost hover:bg-transparent"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>
          <ul className="flex flex-col gap-4">
            {navItems.map(([name, id]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="btn btn-ghost hover:bg-transparent w-full justify-start"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

// import { useState, useEffect } from "react";
// import ThemeToggle from "./ThemeToggle";
// import logo from "/assets/logo.png";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isDark, setIsDark] = useState(false);

//   const navItems = [
//     ["Services", "services"],
//     ["Portfolio", "portfolio"],
//     ["Testimonials", "testimonials"],
//     ["Contact", "contact"],
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     const observer = new MutationObserver(() => {
//       const theme = document.documentElement.getAttribute("data-theme");
//       setIsDark(theme === "business");
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["data-theme"],
//     });

//     const initialTheme = document.documentElement.getAttribute("data-theme");
//     setIsDark(initialTheme === "business");

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observer.disconnect();
//     };
//   }, []);

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//     setOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-300 shadow ${
//         scrolled ? "bg-base-300" : "bg-base-300/90 backdrop-blur-md"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:justify-start">
//         {/* Mobile Navbar */}
//         <div className="flex w-full md:hidden items-center justify-between">
//           <button
//             className="btn btn-ghost hover:bg-transparent text-2xl"
//             onClick={() => setOpen(true)}
//           >
//             ☰
//           </button>
//           <img
//             src={logo}
//             alt="Milink Logo"
//             className={`h-10 cursor-pointer transition-all duration-300 ${
//               isDark ? "brightness-150 invert" : "brightness-100"
//             }`}
//             onClick={() => scrollToSection("home")}
//           />
//           <ThemeToggle />
//         </div>

//         {/* Desktop Navbar */}
//         <div className="hidden md:flex w-full items-center justify-between">
//           <img
//             src={logo}
//             alt="Milink Logo"
//             className={`h-12 cursor-pointer transition-all duration-300 ${
//               isDark ? "brightness-150 invert" : "brightness-100"
//             }`}
//             onClick={() => scrollToSection("home")}
//           />
//           <ul className="flex items-center gap-6 border border-base-content text-base-content rounded-full px-6 pt-3 shadow-sm transition-colors">
//             {navItems.map(([name, id]) => (
//               <li key={id}>
//                 <button
//                   onClick={() => scrollToSection(id)}
//                   className="btn btn-ghost hover:bg-transparent px-2 py-1 relative
//                   after:content-[''] after:block after:w-full
//                   after:h-[1.5px] after:bg-current after:scale-x-0
//                   hover:after:scale-x-100 after:origin-right
//                   hover:after:origin-left after:transition-transform
//                   after:duration-300 after:mt-[-20px]"
//                 >
//                   {name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* ✅ Full-Screen Mobile Menu (From Top, Left-Aligned) */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-base-100 z-50 transition-transform duration-300 ease-in-out ${
//           open ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         {/* Header inside menu */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <img
//             src={logo}
//             alt="Milink Logo"
//             className={`h-10 cursor-pointer transition-all duration-300 ${
//               isDark ? "brightness-150 invert" : "brightness-100"
//             }`}
//             onClick={() => scrollToSection("home")}
//           />
//           <button
//             onClick={() => setOpen(false)}
//             className="btn btn-sm btn-ghost text-2xl"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Menu Items */}
//         <div className="p-6 pt-2">
//           <ul className="flex flex-col gap-4 text-lg">
//             {navItems.map(([name, id]) => (
//               <li key={id}>
//                 <button
//                   onClick={() => scrollToSection(id)}
//                   className="btn btn-ghost hover:bg-transparent w-full justify-start"
//                 >
//                   {name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
