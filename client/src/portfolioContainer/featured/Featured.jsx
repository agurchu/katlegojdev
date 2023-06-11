import React from "react";
import "./featured.css";

export default function Featured() {
  return (
    <div className="featured container-px">
      <div className="heading ">
        <h1>Subscribe To My YouTube Channel!</h1>
        <p>For music and more!</p>
      </div>
      <div className="featured_content">
        <h2>Check Out My Latest Release!</h2>
        <div className="image">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/H-bJGO8jIXk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
