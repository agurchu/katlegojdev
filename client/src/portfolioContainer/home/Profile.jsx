import "./Profile.css";
import Typical from "react-typical";
import Footer from "./footer/Footer";
import webdev from "../../assets/websearch.png";
import { Link } from "react-scroll";

export default function Profile() {
  const typeAnimation = () => {
    return (
      <Typical
        loop={Infinity}
        steps={[
          "Frontend Developer",
          2000,
          "ReactJS Developer",
          2000,
          "MERN Stack Developer",
          2000,
          "Graphic Designer",
          2000,
          "Video Editor",
          2000,
          "Biomedical Scientist",
          2000,
        ]}
      />
    );
  };

  return (
    <section className="home">
      <div id="home" className="profile__container">
        <div className="profile-parent container">
          <div className="profile__details">
            <div className="cols">
              <div className="cols__icon">
                <a target="_blank" href="https://github.com/agurchu">
                  <i className="bx bxl-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://studio.youtube.com/channel/UCB5aCwD9eXi4BH0H-m_vHbw"
                >
                  <i className="bx bxl-youtube"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/katlego-j-mtimane-a1538822b/"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/agurchu">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
            </div>
            <div className="profile__details-name">
              <span className="primary__text">
                Hello! I'm{" "}
                <span className="highlighted-text">Katlego Mtimane</span>{" "}
              </span>
            </div>
            <div className="profile__details-role">
              <span className="primary__text">
                <div>
                  <h1>{typeAnimation()}</h1>
                </div>
                <span className="profile-role_tagline">
                  Transforming ideas of applications into stunning realities.
                </span>
              </span>
            </div>

            <div className="profile__options">
              <Link
                spy={true}
                activeClass="active"
                to={"contact"}
                className=" button button-primary"
              >
                Hire Me
              </Link>
            </div>
          </div>
          <div className="profile__image">
            <div className="profile__image-box">
              <div className="profile__image-background"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <img className="bg_webicon2" src={webdev} alt="" />
    </section>
  );
}
