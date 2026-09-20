import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SmoothScroll from "./components/SmoothScroll";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Legal from "./pages/legal/Legal";
import Privacy from "./pages/legal/Privacy";

import Cloisons from "./pages/Portfolio-Pages/Cloisons";
import FauxPlafonds from "./pages/Portfolio-Pages/Plafonds";
import Isolation from "./pages/Portfolio-Pages/Isolation";
import Doublage from "./pages/Portfolio-Pages/Doublage";

function App() {
  const location = useLocation();

  return (
    <>
      <SmoothScroll />

      <ScrollToTop />

      <Navbar />

      <PageTransition>
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
      </PageTransition>

      <Footer />
    </>
  );
}

export default App;
