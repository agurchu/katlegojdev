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
      {item.list && (
        <div>
          <small>Tools Used:</small>
          <ul>
            {item.list.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="btns">
        <a href={item.code} target="_blank">
          <BsGit />
          <span>Code</span>
        </a>
        <a href={item.live} target="_blank">
          <TbWorldUpload />
          <span>Live</span>
        </a>
        <a href={item.video} target="_blank">
          <BsCameraVideo />
          <span>Video</span>
        </a>
      </div>
    </div>
  );
}
