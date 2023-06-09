import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function ServiceBadge({ icon, title, onClick }) {
  return (
    <div className="service_box">
      <div className="service_icon">{icon}</div>
      <h2>{title}</h2>
      <button onClick={onClick} className="service_btn">
        View More{" "}
        <span>
          <BsBoxArrowInRight size={12} />
        </span>
      </button>
    </div>
  );
}
