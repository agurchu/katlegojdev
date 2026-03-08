// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold group-hover:text-secondary transition-colors">
            {project.title}
          </h3>
          <span className="text-xs px-3 py-1 bg-slate-800 rounded-full text-slate-300">
            {project.category}
          </span>
        </div>
        {/*  Image section (optional) */}
        {project.image_url && (
          <div className="mb-4 overflow-hidden rounded-xl">
            <img
              src={project.image_url || "/fallback-project.png"}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/fallback-project.png";
              }}
            />
          </div>
        )}
        <p className="text-slate-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        <p className="text-sm italic text-slate-500 mb-6">{project.impact}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {(() => {
            const techList = project.tech.split(",").map((t) => t.trim());
            return techList.map((t, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-slate-800/70 rounded-full text-primary"
              >
                {t}
              </span>
            ));
          })()}
        </div>

        <div className="flex gap-4">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-secondary transition"
            >
              <FaGithub size={18} /> Code
            </a>
          )}
          {project.live !== "#" && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-secondary transition"
            >
              <Link size={18} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
