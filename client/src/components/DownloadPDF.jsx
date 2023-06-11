import React from "react";

export default function DownloadPDF() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../assets/documents/Resume_KATLEGO_MTIMANE.pdf"; // Update the path to your PDF file
    link.download = "Resume_KATLEGO_MTIMANE.pdf"; // Specify the desired file name
    link.click();
  };

  return (
    <button onClick={handleDownload} className="button button-secondary">
      Get Resume
    </button>
  );
}
