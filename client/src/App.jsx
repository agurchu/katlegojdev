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
import BottomNav from "./components/BottomNav";
import ProjectChat from "./pages/ProjectChat";
import Statuses from "./pages/Statuses";
import Profile from "./pages/Profile";
import ExperienceDetail from "./pages/ExperienceDetail";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine); // This should now succeed without checkVersion error
  }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-slate-1 to-slate-2 text-slate-100">
        {/* <Navbar /> */}
        <main className="mx-auto">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/projects/:projectTitle" element={<ProjectChat />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/statuses" element={<Statuses />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/experience/:index" element={<ExperienceDetail />} />
            {/* <Route path="/education" element={<Education />} /> */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        {/* <Footer /> */}
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}
