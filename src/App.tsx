import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Legal from "./pages/legal/Legal";
import Privacy from "./pages/legal/Privacy";

import Cloisons from "./pages/Projects/Cloisons";
import FauxPlafonds from "./pages/Projects/FauxPlafonds";
import Isolation from "./pages/Projects/Isolation";
import Doublage from "./pages/Projects/Doublage";

export let lenisInstance: Lenis | null = null;

function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      lerp: 0.07,
      infinite: false,
    });

    lenisInstance = lenis;

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <>
      <ScrollToTop />

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />

            <Route path="/services" element={<Services />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/projects/cloisons" element={<Cloisons />} />

            <Route path="/projects/faux-plafonds" element={<FauxPlafonds />} />

            <Route path="/projects/isolation" element={<Isolation />} />

            <Route path="/projects/doublage" element={<Doublage />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/legal" element={<Legal />} />

            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;
