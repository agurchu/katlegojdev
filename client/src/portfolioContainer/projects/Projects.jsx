import React from "react";
import "./projects.css";
import { ProjectData } from "../../data/ProjectData";
import ProjectBadge from "../../components/ProjectBadge";

export default function Projects() {
  return (
    <section className="projects" id="projects ">
      <div className="projects_heading ">
        <h1>My Projects</h1>
        <p className="container">
          Step into a world of creativity and innovation as I showcase my
          portfolio of remarkable projects. From visually stunning web designs
          to captivating branding ventures, each project tells a unique story of
          dedication, passion, and success. Join me on this visual journey as I
          bring ideas to life and leave a lasting impact through my creative
          endeavors.
        </p>
      </div>
      <div className="projects_grid container">
        {ProjectData &&
          ProjectData.map((item, index) => (
            <ProjectBadge key={index} item={item} />
          ))}
      </div>
    </section>
  );
}
