// src/pages/Projects.jsx
import { useState } from "react";
// import { projects } from "../data/portfolioData";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import useGoogleSheet from "../hook/useGoogleSheet";

const categories = ["All", "Backend", "Full-Stack", "Integration", "Cloud"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { data: projects, loading, error } = useGoogleSheet("projects");

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="space-y-16 max-w-6xl mx-auto">
      <SectionTitle>All Projects</SectionTitle>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-secondary text-white shadow-lg shadow-blue-900/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-blue-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      {filteredProjects.length === 0 ? (
        <p className="text-center text-slate-400 py-20">
          No projects in this category yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
