import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // ✅ WebM video only
  const videoWebM = "/assets/1.mp4";

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // ✅ Lazy load video (desktop & mobile)
    const video = document.createElement("video");
    video.src = videoWebM;
    video.preload = "metadata";
    video.onloadeddata = () => setVideoLoaded(true);
  }, [videoWebM]);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* ✅ Background WebM Video (Desktop & Mobile) */}
      {videoLoaded && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoWebM} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text + Animation */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { delayChildren: 0.5, staggerChildren: 0.3 } },
        }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -80 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-5xl md:text-7xl font-serif tracking-tight drop-shadow-2xl"
        >
          Build Your Digital Presence
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg"
        >
          Elevate your business with cutting-edge websites, premium branding,
          and digital growth strategies.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 25px rgba(255,255,255,0.3)",
          }}
          onClick={() =>
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-900 transition-transform"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Floating Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-blue-500/30 to-blue-700/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-24 right-12 w-36 h-36 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        animate={{ y: [0, -35, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
    </section>
  );
}

// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Hero() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   // ✅ Professional client logos (transparent SVG/PNG)
//   const clientLogos = [
//     "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
//     "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     "https://upload.wikimedia.org/wikipedia/commons/6/62/Shopify_logo_2022.svg",
//   ];

//   return (
//     <section
//       id="home"
//       className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden"
//     >
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80')",
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Text + Animation */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: { transition: { delayChildren: 0.5, staggerChildren: 0.3 } },
//         }}
//         className="relative z-10 text-center px-4"
//       >
//         <motion.h1
//           variants={{
//             hidden: { opacity: 0, y: -80 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="text-5xl md:text-7xl font-serif tracking-tight drop-shadow-2xl"
//         >
//           Build Your Digital Presence
//         </motion.h1>

//         <motion.p
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-lg"
//         >
//           Elevate your business with cutting-edge websites, premium branding,
//           and digital growth strategies.
//         </motion.p>

//         {/* CTA Button */}
//         <motion.button
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1 },
//           }}
//           whileHover={{
//             scale: 1.07,
//             boxShadow: "0 0 25px rgba(255,255,255,0.3)",
//           }}
//           onClick={() =>
//             document
//               .getElementById("services")
//               .scrollIntoView({ behavior: "smooth" })
//           }
//           className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-900 transition-transform"
//         >
//           Get Started
//         </motion.button>
//       </motion.div>

//       {/* Animated Gradient Orbs */}
//       <motion.div
//         className="absolute top-20 left-10 w-28 h-28 bg-gradient-to-r from-blue-500/30 to-blue-700/30 rounded-full blur-3xl"
//         animate={{ y: [0, 40, 0], opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 6, repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute bottom-24 right-12 w-36 h-36 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
//         animate={{ y: [0, -35, 0], opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 7, repeat: Infinity }}
//       />
//     </section>
//   );
// }
