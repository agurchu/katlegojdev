import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import { loadLinksPreset } from "@tsparticles/preset-links";
import Particles from "@tsparticles/react"; // ← new import
import { useCallback } from "react";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine); // This should now succeed without checkVersion error
  }, []);
  return (
      <BrowserRouter>
    <div className="min-h-screen bg-gradient-to-b from-slate-1 to-slate-2 text-slate-100">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "links", // or full custom options
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 40 },
            color: { value: "#334155" },
            links: {
              enable: true,
              distance: 150,
              color: "#334155",
              opacity: 0.4,
            },
            move: { enable: true, speed: 0.8 },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "grab" } },
          },
          // Add more options as needed
        }}
        className="fixed inset-0 pointer-events-none z-0"
      />
      <ScrollProgress />

      <Navbar />
      <main className="pt-20 pb-16  sm:px-6  mx-auto">
       
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
     
      </main>
      <Footer />
    </div>
       </BrowserRouter>
  );
}
