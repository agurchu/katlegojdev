// src/pages/Skills.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Code,
  Server,
  Cloud,
  Database,
  Wrench,
  Users,
} from "lucide-react";

const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    icon: <Code size={40} className="text-white" />,
    bgColor: "bg-primary",
    items: ["Java (OOP, Spring Boot)", "Python", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "frameworks",
    title: "Frameworks & Tools",
    icon: <Wrench size={40} className="text-white" />,
    bgColor: "bg-accent",
    items: ["React", "Redux", "Tailwind CSS", "Spring Boot", "Git", "Maven"],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud size={40} className="text-white" />,
    bgColor: "bg-primary",
    items: [
      "Microsoft Azure",
      "Azure Virtual Desktop",
      "Azure Networking",
      "Cloud Deployment",
    ],
  },
  {
    id: "integration",
    title: "Integration",
    icon: <Database size={40} className="text-white" />,
    bgColor: "bg-[#1F3A3A]",
    items: ["REST APIs", "JSON", "Postman", "System Integration"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: <Server size={40} className="text-white" />,
    bgColor: "bg-[#2A3942]",
    items: ["MySQL", "MongoDB", "SQLite", "PostgreSQL", "SQL Optimization"],
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: <Wrench size={40} className="text-white" />,
    bgColor: "bg-primary",
    items: [
      "Git",
      "Maven",
      "Postman",
      "Docker",
      "Azure CLI",
      "Agile",
      "Unit Testing Fundamentals",
    ],
  },
  {
    id: "soft",
    title: "Soft Skills",
    icon: <Users size={40} className="text-white" />,
    bgColor: "bg-accent",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Effective Communication",
      "Adaptability",
      "Conflict Resolution",
    ],
  },
];

export default function Skills() {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openGroup = (group) => setSelectedGroup(group);
  const closeGroup = () => setSelectedGroup(null);

  return (
    <div className="flex flex-col h-screen bg-[#111B21] text-white">
      {/* Header */}
      <header className="bg-[#202C33] px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="p-2 -ml-2 text-[#8696A0]"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-medium">Skills & Tools</h1>
      </header>

      {/* Channels / Skills List – WhatsApp Updates style */}
      {!selectedGroup ? (
        <div className="flex-1 overflow-y-auto divide-y divide-[#202C33]">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => openGroup(group)}
              className="flex items-center gap-4 px-4 py-4 hover:bg-[#202C33] active:bg-[#2A3942] cursor-pointer"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${group.bgColor}`}
              >
                {group.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{group.title}</h3>
                <p className="text-sm text-[#8696A0] line-clamp-1">
                  {group.items.slice(0, 3).join(" • ")}
                  {group.items.length > 3 && " • +more"}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Detail view – opened channel */
        <div className="flex flex-col flex-1">
          {/* Header for selected group */}
          <div
            className={`bg-gradient-to-b ${selectedGroup.bgColor} to-[#111B21] px-4 py-6 text-center`}
          >
            <div
              className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${selectedGroup.bgColor}`}
            >
              {selectedGroup.icon}
            </div>
            <h2 className="text-2xl font-bold">{selectedGroup.title}</h2>
          </div>

          {/* List of skills */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {selectedGroup.items.map((skill, idx) => (
              <div
                key={idx}
                className="bg-[#202C33] p-4 rounded-xl border border-[#2A3942]"
              >
                <p className="text-[#D1D7DB]">{skill}</p>
              </div>
            ))}
          </div>

          {/* Back button */}
          <div className="p-4 border-t border-[#202C33]">
            <button
              onClick={closeGroup}
              className="w-full bg-primary text-black py-3.5 rounded-xl font-medium"
            >
              Back to Skills
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
