import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "/assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false); // ✅ Track if dark theme is active

  const navItems = [
    ["About", "about"],
    ["Services", "services"],
    ["Portfolio", "portfolio"],
    ["Testimonials", "testimonials"],
    ["Contact", "contact"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // ✅ Detect theme changes dynamically
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "business"); // Dark mode check
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Initialize theme state
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
        scrolled ? "bg-base-100" : "bg-base-100/90 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:justify-start">
        {/* Mobile Navbar */}
        <div className="flex w-full md:hidden items-center justify-between">
          <button
            className="btn btn-ghost text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <img
            src={logo}
            alt="Milink Logo"
            className={`h-10 cursor-pointer transition-all duration-300 ${
              isDark ? "brightness-150 invert" : "brightness-100"
            }`}
            onClick={() => scrollToSection("home")}
          />
          <ThemeToggle />
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full items-center justify-between">
          <img
            src={logo}
            alt="Milink Logo"
            className={`h-12 cursor-pointer transition-all duration-300 ${
              isDark ? "brightness-150 invert" : "brightness-100"
            }`}
            onClick={() => scrollToSection("home")}
          />
          {/* ✅ Added border & rounded container here */}
          <ul className="flex gap-6 border rounded-full px-8 py-2 shadow-sm">
            {navItems.map(([name, id]) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="btn btn-ghost"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {open && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-64 bg-base-100 shadow-lg p-6 z-40 transition-transform">
          <div className="flex justify-between items-center mb-4">
            <img
              src={logo}
              alt="Milink Logo"
              className={`h-10 cursor-pointer transition-all duration-300 ${
                isDark ? "brightness-150 invert" : "brightness-100"
              }`}
              onClick={() => scrollToSection("home")}
            />
            <button
              className="btn btn-sm btn-ghost"
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
                  className="btn btn-ghost w-full justify-start"
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
//   const [isDark, setIsDark] = useState(false); // ✅ Track if dark theme is active

//   const navItems = [
//     ["About", "about"],
//     ["Services", "services"],
//     ["Portfolio", "portfolio"],
//     ["Testimonials", "testimonials"],
//     ["Contact", "contact"],
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);

//     // ✅ Detect theme changes dynamically
//     const observer = new MutationObserver(() => {
//       const theme = document.documentElement.getAttribute("data-theme");
//       setIsDark(theme === "business"); // Dark mode check
//     });
//     observer.observe(document.documentElement, {
//       attributes: true,
//       attributeFilter: ["data-theme"],
//     });

//     // Initialize theme state
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
//         scrolled ? "bg-base-100" : "bg-base-100/90 backdrop-blur-md"
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between px-4 py-3 md:justify-start">
//         {/* Mobile Navbar */}
//         <div className="flex w-full md:hidden items-center justify-between">
//           <button
//             className="btn btn-ghost text-xl"
//             onClick={() => setOpen(!open)}
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
//           <ul className="flex gap-6">
//             {navItems.map(([name, id]) => (
//               <li key={id}>
//                 <button
//                   onClick={() => scrollToSection(id)}
//                   className="btn btn-ghost"
//                 >
//                   {name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       {open && (
//         <div className="md:hidden fixed top-0 left-0 h-screen w-64 bg-base-100 shadow-lg p-6 z-40 transition-transform">
//           <div className="flex justify-between items-center mb-4">
//             <img
//               src={logo}
//               alt="Milink Logo"
//               className={`h-10 cursor-pointer transition-all duration-300 ${
//                 isDark ? "brightness-150 invert" : "brightness-100"
//               }`}
//               onClick={() => scrollToSection("home")}
//             />
//             <button
//               className="btn btn-sm btn-ghost"
//               onClick={() => setOpen(false)}
//             >
//               ✕
//             </button>
//           </div>
//           <ul className="flex flex-col gap-4">
//             {navItems.map(([name, id]) => (
//               <li key={id}>
//                 <button
//                   onClick={() => scrollToSection(id)}
//                   className="btn btn-ghost w-full justify-start"
//                 >
//                   {name}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }
