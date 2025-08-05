import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/assets/1.jpg')",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold drop-shadow-lg"
      >
        Build Your Digital Presence
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-4 text-xl md:text-2xl drop-shadow-md"
      >
        Websites, Branding & Digital Solutions
      </motion.p>
      <button
        onClick={() =>
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 rounded shadow hover:scale-105 transition"
      >
        Get Started
      </button>
    </section>
  );
}
