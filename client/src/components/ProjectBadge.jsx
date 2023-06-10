import React from "react";
import { BsGit, BsCameraVideo } from "react-icons/bs";
import { TbWorldUpload } from "react-icons/tb";

export default function ProjectBadge({ item }) {
  return (
    <div className="project_content">
      <img src={item.image} alt="" />
      <h4>
        {item.title} <br /> <small>Website</small>
      </h4>
      <p>{item.body} </p>
      <div className="btns">
        <a href={item.code} target="_blank">
          <BsGit /> <span>Code</span>
        </a>
        <a href={item.live}>
          <TbWorldUpload /> <span>Live</span>
        </a>
        <a href={item.video}>
          <BsCameraVideo />
          <span> Video</span>
        </a>
      </div>
    </div>
  );
}
