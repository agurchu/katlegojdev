// src/pages/Statuses.jsx
import { ArrowLeft, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import usePortfolioData from "../hooks/usePortfolioData";
import VideoModal from "../components/VideoModal";
import useGoogleSheet from "../hook/useGoogleSheet";

export default function Statuses() {
  const { data: projects = [], loading } = useGoogleSheet("projects");
  const navigate = useNavigate();
  const projectsWithVideo = projects.filter(
    (p) => p.video_url && p.video_url !== "#" && p.video_url.trim() !== "",
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);

  if (loading) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }
  if (projectsWithVideo.length === 0) {
    return (
      <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white">
        <p>No Status videos available yet</p>
        <button
          onClick={() => navigate("/projects")}
          className="px-6 py-3 bg-primary text-black rounded-xl font-medium"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const currentProject = projectsWithVideo[currentIndex];
  // useEffect(() => {
  //   if (!videoRef.current) return;

  //   const handleEnded = () => {
  //     if (currentIndex < projectsWithVideo.length - 1) {
  //       setCurrentIndex(currentIndex + 1);
  //     } else {
  //       navigate("/projects");
  //     }

  //     videoRef.current.addEventListener("ended", handleEnded);

  //     return () => videoRef.current.removeEventListener("ended", handleEnded);
  //   };
  // }, [currentIndex, projectsWithVideo, navigate]);
  // useEffect(() => {
  //   if (videoRef.current) {
  //     if (isPlaying) {
  //       videoRef.current.play().catch(() => {});
  //     } else {
  //       videoRef.current.pause();
  //     }
  //   }
  // }, [isPlaying, currentIndex]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const openVideoModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Progress bar at top (like WhatsApp) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600 flex gap-1 px-2 pt-2">
        {projectsWithVideo.map((_, i) => (
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

      {/* Main Video */}
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          src={currentProject.video_url || "https://example.com/fallback.mp4"}
          className="w-full h-full object-cover"
          loop={false}
          playsInline
          muted // remove if you want sound
          onClick={togglePlay}
        />

        {/* Play/Pause overlay */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity z-10"
        >
          {isPlaying ? (
            <Pause size={64} className="text-white opacity-70" />
          ) : (
            <Play size={64} className="text-white opacity-70" />
          )}
        </button>

        {/* Swipe gestures (left/right) */}
        <div className="absolute inset-0 flex">
          <div
            className="flex-1"
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          />
          <div
            className="flex-1"
            onClick={() =>
              setCurrentIndex(
                Math.min(projectsWithVideo.length - 1, currentIndex + 1),
              )
            }
          />
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-16 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent z-10">
        <h3 className="text-white text-xl font-semibold">
          {currentProject.title}
        </h3>
        <p className="text-gray-300 text-sm mt-1 line-clamp-2">
          {currentProject.description}
        </p>
      </div>

      {/* Video Modal (embedded player) */}
      <VideoModal
        isOpen={showModal}
        onClose={closeModal}
        videoUrl={currentProject.video_url}
        title={currentProject.title}
      />
    </div>
  );
}
