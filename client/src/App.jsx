import { Github, Linkedin, Mail } from "lucide-react";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-white px-5 sm:px-10 md:px-20 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />

        <footer className="border-t border-slate-800 pt-12 mt-20 text-center text-slate-500">
          <p>
            © {new Date().getFullYear()} Katlego Mtimane • Software Engineer •
            South Africa
          </p>
          <div className="flex justify-center gap-8 mt-6 text-slate-400">
            <a
              href="https://github.com/katlegojdev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:katlegoj.dev@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
