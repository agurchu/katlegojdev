// src/pages/ExperienceDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Calendar, Briefcase } from "lucide-react";
import useGoogleSheet from "../hook/useGoogleSheet";

export default function ExperienceDetail() {
  const { index } = useParams();
  const navigate = useNavigate();

  const {
    data: experiences = [],
    loading,
    error,
  } = useGoogleSheet("experience");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#111B21] text-[#00A884]">
        Loading experience details...
      </div>
    );
  }

  if (error || !experiences.length) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111B21] text-red-400">
        <p>Could not load experience</p>
        {error && <p className="text-sm mt-2">{error}</p>}
        <button
          onClick={() => navigate("/experience")}
          className="mt-6 px-6 py-3 bg-[#00A884] text-black rounded-xl font-medium"
        >
          Back to Experience
        </button>
      </div>
    );
  }

  const exp = experiences[Number(index)];

  if (!exp) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#111B21] text-[#8696A0]">
        <p>Experience entry not found</p>
        <button
          onClick={() => navigate("/experience")}
          className="mt-6 text-[#00A884] underline"
        >
          Back to list
        </button>
      </div>
    );
  }

  // Build chat-style messages from the experience data
  const messages = [
    {
      id: 1,
      text: `Role: ${exp.role || exp.title}`,
      isYou: true,
      time: "09:15",
    },
    {
      id: 2,
      text: `Company: ${exp.company || "Freelance/Self-employed"}`,
      isYou: true,
      time: "09:15",
    },
    {
      id: 3,
      text: `Period: ${exp.period}`,
      isYou: true,
      time: "09:16",
    },
    {
      id: 4,
      text: exp.description || "No detailed description available",
      isYou: true,
      time: "09:17",
    },
    {
      id: 5,
      text: "Key responsibilities & achievements",
      isYou: false,
      time: "09:18",
    },
    {
      id: 6,
      text: exp.impact || "Contributed to team success and system improvements",
      isYou: true,
      time: "09:19",
    },
    {
      id: 7,
      text: "Looking forward to bringing this experience to new challenges!",
      isYou: false,
      time: "09:20",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#111B21]">
      {/* Header – like WhatsApp contact header */}
      <header className="bg-[#202C33] px-4 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate("/experience")}
          className="p-2 -ml-2 text-[#8696A0] hover:text-white transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center text-black font-bold">
            {exp.image_url ? (
              <img
                src={exp.image_url}
                alt={exp.role || exp.title}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              exp.role?.[0] || "?"
            )}
          </div>
          <div>
            <h2 className="font-medium text-white">{exp.role || exp.title}</h2>
            <p className="text-xs text-[#8696A0]">
              {exp.company || "Experience Entry"}
            </p>
            <p className="text-xs text-[#8696A0] mt-1">
              Last updated: {exp.period.split("-")[1]?.trim() || "Present"}
            </p>
          </div>
        </div>
      </header>

      {/* Chat area with WhatsApp background texture */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-primary/5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`max-w-[80%] rounded-2xl px-4 py-2.5 relative group ${
              msg.isYou
                ? "bg-[#005E54] text-white ml-auto rounded-tr-none shadow-md after:content-[''] after:absolute after:top-0 after:right-[-8px] after:border-8 after:border-transparent after:border-l-[#005E54]"
                : "bg-[#202C33] text-white mr-auto rounded-tl-none shadow-md after:content-[''] after:absolute after:top-0 after:left-[-8px] after:border-8 after:border-transparent after:border-r-[#202C33]"
            }`}
          >
            <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>

            {/* Timestamp + fake read ticks */}
            <div className="absolute bottom-1 right-2 text-[10px] text-[#AEBAC1] flex items-center gap-1">
              <span>{msg.time}</span>
              {msg.isYou && <span className="text-[#53BDEB]">✓✓</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
