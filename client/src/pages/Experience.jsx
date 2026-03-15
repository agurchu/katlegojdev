// src/pages/Experience.jsx
import { motion } from "framer-motion";
import React from "react";
import SectionTitle from "../components/SectionTitle";
import { experienceMock } from "../data/portfolioData";
import useGoogleSheet from "../hook/useGoogleSheet";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users } from "lucide-react";

export default function Experience() {
  const { data: experience, loading, error } = useGoogleSheet("experience");
  const navigate = useNavigate();
  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111B21] text-red-400">
        <p>Error loading experience</p>
        <p className="text-sm mt-2">{error}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-screen bg-[#111B21]">
      {/* Header */}
      <header className="bg-[#202C33] px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="p-2 -ml-2 text-[#8696A0]"
        >
          <ArrowLeft size={24} />
        </button>
        <div>
          <h1 className="text-white text-xl font-medium">Experience</h1>
          <p className="text-xs text-[#8696A0]">My professional background</p>
        </div>
      </header>

      {/* Communities List */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {experience.map((exp, index) => (
          <div
            key={index}
            onClick={() => navigate(`/experience/${index}`)} // optional detail
            className="bg-[#202C33] rounded-2xl overflow-hidden hover:bg-[#2A3942] transition-colors cursor-pointer"
          >
            <div
              className={`h-32 ${exp.bgColor} flex items-center justify-center`}
            >
              <div className="text-white text-6xl font-bold opacity-70">
                {exp.role[0]}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-white text-lg">{exp.role}</h3>
              {exp.company && (
                <p className="text-[#00A884] text-sm mt-0.5">{exp.company}</p>
              )}
              <p className="text-sm text-[#8696A0] mt-1">{exp.period}</p>
              <p className="text-sm text-[#D1D7DB] mt-2 line-clamp-2">
                {exp.description}
              </p>
              <div className="flex items-center gap-2 mt-3 text-xs text-[#8696A0]">
                <Users size={14} />
                <span>{exp.members}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
