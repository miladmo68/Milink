import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import CTA from "./pages/CTA";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Services />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
