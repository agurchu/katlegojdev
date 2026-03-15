// src/pages/Statuses.jsx
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import usePortfolioData from "../hooks/usePortfolioData";
import useGoogleSheet from "../hook/useGoogleSheet";

export default function Statuses() {
  const { data: projects = [] } = useGoogleSheet("projects");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const currentProject = projects[currentIndex];

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentIndex]);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/projects"); // back to chat list when finished
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!currentProject)
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        No demos available
      </div>
    );

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Progress bar at top (like WhatsApp) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600 flex gap-1 px-2 pt-2">
        {projects.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-0.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-white"
                : i < currentIndex
                  ? "bg-white/60"
                  : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
        <button
          onClick={() => navigate("/projects")}
          className="text-white p-2"
        >
          <ArrowLeft size={28} />
        </button>
        <div className="text-white font-medium">{currentProject.title}</div>
        <div className="w-10" /> {/* spacer */}
      </div>

      {/* Video */}
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          src={currentProject.video_url || "https://example.com/fallback.mp4"}
          className="w-full h-full object-cover"
          loop
          playsInline
          muted // remove if you want sound
          onEnded={handleNext}
        />

        {/* Play/Pause overlay */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity"
        >
          {isPlaying ? (
            <Pause size={64} className="text-white opacity-70" />
          ) : (
            <Play size={64} className="text-white opacity-70" />
          )}
        </button>

        {/* Swipe gestures (left/right) */}
        <div className="absolute inset-0 flex">
          <div className="flex-1" onClick={handlePrev} />
          <div className="flex-1" onClick={handleNext} />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-16 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-white text-xl font-semibold">
          {currentProject.title}
        </h3>
        <p className="text-gray-300 text-sm mt-1 line-clamp-2">
          {currentProject.description}
        </p>
      </div>
    </div>
  );
}
