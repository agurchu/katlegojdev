import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import ProjectCard from "../ProjectCard";

const categories = ["All", "Frontend", "Backend", "Integration", "Cloud"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section className="mb-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects & Impact</h2>

      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all
              ${filter === cat
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}