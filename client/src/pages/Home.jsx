import { ExternalLink, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
// import Services from "../components/Services";
import { socials } from "../data/portfolioData";
import Experience from "./Experience";
import useGoogleSheet from "../hook/useGoogleSheet";

export default function Home() {
  const { data: projects, loading, error } = useGoogleSheet("projects");
  const featuredProjects = projects.slice(0, 6); // show top 6 on home

  return (
    <div className="space-y-32">
      {/* Hero */}

      <section className="relative min-h-[90vh] flex items-center ">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920&auto=format&fit=crop&q=80"
            alt="Abstract code background"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/20 to-slate-950/25" /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              {/* Left – Main message */}
              <div className="space-y-8 md:space-y-10">
                <div className="space-y-5">
                  <p className="text-primary font-medium tracking-wider uppercase text-sm md:text-base">
                    Full-Stack • Backend Specialist • Cloud Engineer
                  </p>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                    Katlego <span className="text-primary">Mtimane</span>
                  </h1>

                  <p className="text-base text-slate-300 max-w-2xl font-light leading-relaxed">
                    I build reliable, scalable systems — from clean APIs and
                    microservices to modern frontends and cloud infrastructure.
                  </p>
                </div>

                <div className="flex flex-col">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=katlegoj.dev@gmail.com"
                    className="inline-flex items-center gap-3 px-7 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl font-semibold text-white transition-all shadow-lg shadow-cyan-900/30 transform hover:scale-[1.02] active:scale-95"
                  >
                    <Mail size={20} />
                    Let's talk
                  </a>
                  <div className="flex justify-center gap-8 mt-6 text-2xl">
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${socials.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition"
                    >
                      <Mail />
                    </a>
                  </div>
                </div>

                {/* Small tech badges */}
                <div className="flex flex-wrap gap-4 pt-4 text-sm text-slate-400">
                  <span>Java • Spring Boot</span>
                  <span>•</span>
                  <span>React • Tailwind</span>
                  <span>•</span>
                  <span>Azure Cloud</span>
                  <span>•</span>
                  <span>System Integration</span>
                </div>
              </div>
            </div>
            {/* Right – Visual / Value block */}
            <div className="md:block md:col-span-1">
              <div className="glass p-8 lg:p-10 rounded-2xl border border-slate-700/40 backdrop-blur-xl shadow-2xl">
                <h3 className="text-2xl lg:text-3xl font-semibold text-cyan-300 mb-7">
                  I help teams
                </h3>

                <ul className="space-y-6 text-lg text-slate-200">
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 text-primary text-xl">→</div>
                    <span>Deliver production-ready backend systems</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 text-primary text-xl">→</div>
                    <span>Integrate services without creating chaos</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 text-primary text-xl">→</div>
                    <span>Build frontends that users actually enjoy</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1.5 text-primary text-xl">→</div>
                    <span>
                      Deploy & manage cloud infrastructure efficiently
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optional subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400 text-sm">
          <span className="animate-bounce">↓</span>
          <span className="mt-2">Scroll to explore</span>
        </div>
      </section>
      {/* <Services /> */}
      <Experience />
      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading && <div className="text-center py-20">Loading...</div>}
          {error && <div>Error: {error}</div>}
          {featuredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="/projects" // or keep all projects here if you prefer single-page feel
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
          >
            View All Projects <ExternalLink size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
