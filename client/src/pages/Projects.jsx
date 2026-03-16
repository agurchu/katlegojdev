// src/pages/Projects.jsx
import { Play, Search } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGoogleSheet from "../hook/useGoogleSheet";

export default function Projects() {
  const navigate = useNavigate();
  const { data: projects = [], loading } = useGoogleSheet("projects");
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = projects
    .filter((p) => filter === "All" || p.category === filter)
    .filter((p) => p.title?.toLowerCase().includes(search.toLowerCase()));

  const categories = ["All", "Backend", "Frontend", "Cloud", "Integration"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#111B21]">
        <div className="text-primary animate-pulse">Loading chats...</div>
      </div>
    );
  }
  const initials = (title) => {
    if (!title) return "?";
    const words = title.split(" ");
    if (words.length === 1) return words[0][0];
    return words[0][0] + words[1][0];
  };
  return (
    <div className="flex flex-col ]">
      {/* Header */}
      <header className="bg-[#1f253d] px-4 py-3 flex items-center gap-4">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          KJ
        </div>
        <h1 className="text-white text-xl font-medium">Mtimane's Portfolio</h1>
      </header>

      {/* Filters (horizontal scrollable like WhatsApp status) */}
      <div className="bg-[#12202b] px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide border-b border-[#202C33]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-1.5 text-sm font-medium rounded-full whitespace-nowrap transition-all ${
              filter === cat
                ? "bg-primary] text-[#aebac1]"
                : "bg-[#293e44] text-[#738e9e] hover:bg-[#3e535e]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="px-4 py-3 bg-background border-b border-[#1e2230]">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1e2230]"
            size={18}
          />
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1e2230] text-white pl-11 pr-4 py-2.5 rounded-lg text-sm focus:outline-none placeholder-[#8087a2]"
          />
        </div>
      </div>

      {/* Project list – chat style */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#242939]">
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-[#787e97]">
            <p>No projects found</p>
            <p className="text-xs mt-2">Try changing filter or search term</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <Link
              key={project.title}
              to={`/projects/${encodeURIComponent(project.title)}`}
              className="flex items-center gap-4 px-4 py-3.5 hover:bg-[#1e2830] active:bg-[#31374e] transition-colors"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-primary relative">
                {/* {project.image_url ? (
                  <img
                    src={`https://drive.google.com/uc?export=view&id=${extractDriveId(project.image_url)}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : ( */}
                <div className="w-full h-full flex items-center justify-center text-black font-bold">
                  {initials(project.title)}
                </div>
                {/* )} */}
                {/* Green "online" ring — only if live link exists */}
                {project.live &&
                  project.live !== "#" &&
                  project.live.trim() !== "" && (
                    <span
                      className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-[#111B21] shadow-sm ${
                        project.live &&
                        project.live !== "#" &&
                        project.live.trim() !== ""
                          ? "bg-primary"
                          : "bg-gray-500"
                      }`}
                    />
                  )}{" "}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-medium text-white truncate">
                    {project.title}
                  </h3>
                  <span className="text-xs text-[#8696A0] ml-2 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-[#8696A0] line-clamp-1 mt-0.5">
                  {project.description || "No description available"}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
      <button
        onClick={() => navigate("/statuses")}
        className="fixed bottom-20 right-6 bg-primary text-black p-4 rounded-full shadow-2xl z-40"
      >
        <Play size={28} />
      </button>
    </div>
  );
}
