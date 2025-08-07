import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { THEMES } from "../config/themeConfig";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.light
  );

  const videoMP4 = "/assets/4.mp4";

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme || THEMES.light);
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const video = document.createElement("video");
    video.src = videoMP4;
    video.preload = "auto";
    video.onloadeddata = () => setVideoLoaded(true);

    return () => observer.disconnect();
  }, [videoMP4]);

  const isDark = theme === THEMES.dark;

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* ✅ Background Video */}
      {videoLoaded && (
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition duration-700 ${
            isDark
              ? "brightness-100 contrast-100"
              : "brightness-90 contrast-105 saturate-100"
          }`}
        >
          <source src={videoMP4} type="video/mp4" />
        </motion.video>
      )}

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition duration-700 ${
          isDark ? "bg-black/30" : "bg-white/10"
        }`}
      ></div>

      {/* Gradient Glow */}
      <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-500/20 via-pink-400/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-green-300/20 rounded-full blur-3xl animate-pulse" />

      {/* Text & CTA */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { delayChildren: 0.6, staggerChildren: 0.4 } },
        }}
        className="relative z-10 text-center px-4"
      >
        {/* ✅ Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.4 } },
          }}
          className="relative text-5xl md:text-7xl font-serif tracking-tight drop-shadow-2xl"
        >
          <span
            className={`shimmer-text relative font-bold inline-block ${
              isDark ? "text-glow-dark" : "text-glow-light"
            }`}
          >
            Build Your Digital Presence
            <span className="shine-inside"></span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
          }}
          className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg"
        >
          Elevate your business with cutting-edge websites, premium branding,
          and digital growth strategies.
        </motion.p>

        {/* ✅ Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1.2 } },
          }}
          whileHover={{
            scale: 1.07,
            boxShadow:
              "0 0 25px rgba(255,255,255,0.5), 0 0 40px rgba(0,112,255,0.6)",
          }}
          onClick={() =>
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 px-8 py-4 rounded-full font-semibold shadow-lg relative overflow-hidden transition-transform bg-gradient-to-r from-blue-500 to-blue-700 pulse-glow"
        >
          <span className="relative z-10 shimmer-btn-text">Get Started</span>
          <span className="shimmer-overlay-btn"></span>
        </motion.button>
      </motion.div>
    </section>
  );
}
