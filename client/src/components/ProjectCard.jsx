// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const initials = (title) => {
    if (!title) return "?";
    const words = title.split(" ");
    if (words.length === 1) return words[0][0];
    return words[0][0] + words[1][0];
  };

  const handleStatusClick = (e) => {
    e.preventDefault();
    if (
      project.video_url &&
      project.video_url !== "#" &&
      project.video_url.trim() !== ""
    ) {
      window.open(project.video_url, "_blank");
    } else {
      // If no video URL, navigate to project details page
      window.location.href = `/projects/${encodeURIComponent(project.title)}`;
    }
  };
  return (
    <Link
      to={`/projects/${encodeURIComponent(project.title)}`}
      className="flex items-center gap-4 px-4 py-3.5 hover:bg-[#1e2830] active:bg-[#31374e] transition-colors"
    >
      <Link
        onClick={handleStatusClick}
        to={
          project.video_url &&
          project.video_url !== "#" &&
          project.video_url.trim() !== ""
            ? project.video_url
            : `/projects/${encodeURIComponent(project.title)}`
        }
        className={`w-12 h-12 rounded-full flex-shrink-0 bg-primary relative ${
          project.video_url &&
          project.video_url !== "#" &&
          project.video_url.trim() !== ""
            ? "border-2 border-green-500 "
            : " "
        }`}
      >
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
        {project.video_url && project.video_url !== "#" &&
          <div className="absolute w-11 h-11 border-background border-2 rounded-full bottom-0 left-0 top-0" />}
        {/* Green "online" ring — only if live link exists */}
        {/* {project.live && project.live !== "#" && project.live.trim() !== "" && ( */}
        <span
          className={`absolute  -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-[#111B21] shadow-sm ${
            project.live && project.live !== "#" && project.live.trim() !== ""
              ? "bg-green-500"
              : "bg-gray-500"
          }`}
        />
        {/* )}{" "} */}
      </Link>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-baseline">
          <h3 className="font-medium text-white truncate">{project.title}</h3>
          <span className="text-xs text-[#8696A0] ml-2 whitespace-nowrap">
            {project.category}
          </span>
        </div>
        <p className="text-sm text-[#8696A0] line-clamp-1 mt-0.5">
          {project.description || "No description available"}
        </p>
      </div>
    </Link>
  );
}
