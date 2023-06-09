import React from "react";
import { FaReact } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function ServiceBadge() {
  return (
    <div className="service_box">
      <div className="service_icon">{<FaReact size={32} />}</div>
      <h2>Frontend Developer</h2>
      <button className="service_btn">
        View More{" "}
        <span>
          <BsBoxArrowInRight size={12} />
        </span>
      </button>
    </div>
  );
}
