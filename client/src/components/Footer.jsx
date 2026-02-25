// src/components/Footer.jsx
import { Mail } from "lucide-react";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { socials } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500">
          © {new Date().getFullYear()} Katlego Mtimane • Software Engineer • Built with React + Tailwind
        </p>
        <div className="flex justify-center gap-8 mt-6 text-2xl">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaGithub/>
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
          <a href={`mailto:${socials.email}`} className="hover:text-blue-400 transition">
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}