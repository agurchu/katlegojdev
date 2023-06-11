import React from "react";
import SectionHeading from "../../components/SectionHeading";
import kat_graduate from "../../assets/kat-graduate.png";
import webdev from "../../assets/webdevicon.png";
import "./aboutMe.css";
import { Link } from "react-scroll";

export default function AboutMe() {
  return (
    <div id="about" className="container about">
      <SectionHeading
        title="About Me"
        body="Web Developer | Creating Engaging Digital Experiences"
      />
      <div className="box">
        <div className=" image">
          <img src={kat_graduate} alt="" />
        </div>
        <div className="content">
          <div className="text">
            <p>
              A self-motivated individual with a BSc in Biomedical Science and a
              passion for frontend web development, also worked on full stack
              projects.
            </p>
            <p>
              As a multipotentialite, I bring a diverse range of skills and
              interests to the table, allowing me to approach projects with a
              unique perspective and think creatively.With strong
              problem-solving abilities, attention to detail, and a dedication
              to delivering high-quality work, I am confident in my ability to
              contribute to impactful web solutions.
            </p>
          </div>
          <div className="skils">
            <h2>Hightlights</h2>
            <ul>
              <h3>Web Development Skills</h3>
              <li>React JS, JavaScript, Node JS, HTML, CSS, SEO, </li>
              <li>Bootstrap, Tailwind, Express JS, Git, GitHub, Redux, </li>
              <li>MongoDB, Visual Studio Code, Adobe Photoshop, Material UI</li>
            </ul>
            <ul>
              <h3>Additional Skills</h3>
              <li>Adobe Photoshop, Adobe Premier Pro, Adobe After Effects </li>
              <li>MS Office, music production, Graphic Design </li>
            </ul>
          </div>
          <div className="btns">
            <Link
              spy={true}
              activeClass="active"
              to={"contact"}
              className="button button-primary"
            >
              Hire Me
            </Link>
            <button className="button button-secondary">Get Resume</button>
          </div>
        </div>
      </div>
      <img className="bg_webicon" src={webdev} alt="" />
    </div>
  );
}
