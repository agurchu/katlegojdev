// src/pages/ProjectChat.jsx
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import ChatInput from "../components/ChatInput";
import useGoogleSheet from "../hook/useGoogleSheet";
export default function ProjectChat() {
  const { projectTitle } = useParams();
  const navigate = useNavigate();
  const { data: projects = [], loading } = useGoogleSheet("projects");

  const project = projects.find(
    (p) => p.title === decodeURIComponent(projectTitle),
  );
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#111B21]">
        <div className="text-primary animate-pulse">Loading chats...</div>
      </div>
    );
  }
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
    <div className="flex flex-col h-screen bg-[#0A2F2F]  pb-32">
      {/* Header */}
      <header className="bg-[#202C33] px-4 py-3 flex fixed items-center gap-4 right-0 overflow-hidden left-0 z-10">
        <button onClick={() => navigate("/projects")} className="p-2 -ml-2">
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-3 pr-4">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-medium">
            {project.title?.[0] || "?"}
          </div>
          <div className="pr-4">
            <h2 className="font-medium text-nowrap">{project.title}</h2>
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
      <div className=" px-4 border-t border-none flex gap-2 fixed bottom-20 left-0 right-0">
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        )}
        <div className="flex flex-1 rounded-xl">
          <ChatInput chatName={project.title + " Project"} />
        </div>
        {project.live && project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <ExternalLink size={20} />
            Live
          </a>
        )}
      </div>
    </div>
  );
}
