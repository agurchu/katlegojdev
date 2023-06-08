import React from "react";
import SectionHeading from "../../components/SectionHeading";
import kat_graduate from "../../assets/kat-graduate.png";
import "./aboutMe.css";

export default function AboutMe() {
  return (
    <div className="text-secondary">
      <SectionHeading
        title="About Me"
        body="Web Developer | Creating Engaging Digital Experiences"
      />
      <div className="box">
        <div className="w-1/2 image">
          <img className="w-full" src={kat_graduate} alt="" />
        </div>
        <div className="content">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              numquam distinctio eum omnis praesentium quia, quidem veritatis
              temporibus facilis dolor nulla aliquam libero ullam aut similique,
              repellendus dicta delectus. Incidunt ipsa officiis iusto libero
              quibusdam repellendus a nemo in aliquam illo aspernatur sint
              accusamus, odio unde, ducimus eaque aperiam reprehenderit tempore
              quisquam odit quo nostrum? Veniam enim quis vitae, sit nemo illum,
              eaque dolor tempora incidunt officia aperiam voluptatibus. Ducimus
              id cum dolores officia. Sequi, expedita. Similique deleniti
              possimus quas voluptas mollitia est velit. Totam quas aut facere
              perspiciatis accusantium, cum reiciendis expedita eveniet officia?
              Doloribus magnam tempora omnis voluptates.
            </p>
          </div>
          <div className="skils">
            <h2>Hightlights</h2>
            <ul>
              <h3>Web Development Skills</h3>
              <li>React JS, JavaScript, Node JS, HTML, CSS, SEO </li>
              <li>Bootstrap, Tailwind, Express JS, Git, GitHub, Redux</li>
              <li>MongoDB, Visual Studio Code, Adobe Photoshop, Material UI</li>
            </ul>
            <ul>
              <h3>Additional Skills</h3>
              <li>Adobe Photoshop, Adobe Premier Pro, Adobe After Effects </li>
              <li>MS Office, music production, Graphic Design </li>
            </ul>
          </div>
          <div className="btns">
            <button className="button button-primary">Hire Me</button>
            <button className="button button-secondary">Get Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
