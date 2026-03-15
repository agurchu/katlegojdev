// src/pages/ProjectChat.jsx
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useGoogleSheet from "../hook/useGoogleSheet";
import { ArrowLeft, ExternalLink } from "lucide-react";
export default function ProjectChat() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();
  const { data: projects = [] } = useGoogleSheet("projects");

  const project = projects.find(
    (p) => p.title === decodeURIComponent(projectTitle),
  );

  if (!project) {
    return (
      <div className="flex flex-col h-screen bg-[#111c21] items-center justify-center text-[#8696A0]">
        <p>Project not found</p>
        <button
          onClick={() => navigate("/projects")}
          className="mt-4 text-primary underline"
        >
          Back to projects
        </button>
      </div>
    );
  }

  // Fake chat messages from project data
  const chatMessages = [
    { id: 1, text: project.title, isProject: true },
    {
      id: 2,
      text: project.description || "No description provided.",
      isProject: true,
    },
    {
      id: 3,
      text: `Impact: ${project.impact || "Not specified"}`,
      isProject: true,
    },
    {
      id: 4,
      text: `Tech stack: ${project.tech || "Not specified"}`,
      isProject: true,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#0A2F2F] mb-8">
      {/* Header */}
      <header className="bg-[#202C33] px-4 py-3 flex fixed items-center gap-4 right-0 left-0 z-10">
        <button onClick={() => navigate("/projects")} className="p-2 -ml-2">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-medium">
            {project.title?.[0] || "?"}
          </div>
          <div>
            <h2 className="font-medium">{project.title}</h2>
            <p className="text-xs text-[#8696A0]">{project.category}</p>
          </div>
        </div>
      </header>

      {/* Chat area with WhatsApp-style background */}
      <div
        className="flex-1 overflow-y-auto mt-16 p-4 space-y-3 bg-primary/5 bg-repeat"
        style={{ backgroundSize: "auto 100%" }}
      >
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[80%] rounded-2xl px-4 py-2.5 relative group ${
              msg.isProject
                ? "bg-background text-white ml-auto rounded-tr-none after:content-[''] after:absolute after:top-0 after:right-[-8px] after:border-8 after:border-transparent after:border-l-[#005E54]"
                : "bg-[#202C33] text-white mr-auto rounded-tl-none after:content-[''] after:absolute after:top-0 after:left-[-8px] after:border-8 after:border-transparent after:border-r-[#202C33]"
            }`}
          >
            {msg.text}

            {/* Timestamp + ticks */}
            <div className="absolute bottom-1 right-2 text-[10px] text-[#AEBAC1] flex items-center gap-1">
              <span>14:32</span>
              {msg.isProject && (
                <span className="text-[#53BDEB]">✓✓</span> // blue double check = read
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom action buttons (instead of text input) */}
      <div className="bg-[#202C33] p-4 border-t border-[#111B21] flex gap-3 fixed bottom-16 left-0 right-0">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary text-black py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        )}

        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-seconary text-black py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}
