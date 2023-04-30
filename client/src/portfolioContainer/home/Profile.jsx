import "./Profile.css";
import Typical from "react-typical";

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
    <div className="profile__container container-px">
      <div className="profile-parent">
        <div className="profile__details">
          <div className="cols">
            <div className="cols__icon">
              <a target="_blank" href="#">
                <i class="bx bxl-github"></i>
              </a>
              <a target="_blank" href="#">
                <i class="bx bxl-facebook-circle"></i>
              </a>
              <a target="_blank" href="#">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a target="_blank" href="#">
                <i class="bx bxl-instagram"></i>
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
              <h1>{typeAnimation()}</h1>
              <span className="profile-role_tagline">
                Transforming ideas of applications into stunning realities.
              </span>
            </span>
          </div>

          <div className="profile__options">
            <button className="button button-primary">Hire Me</button>
          </div>
        </div>
        <div className="profile__image">
          <div className="profile__image-box">
            <div className="profile__image-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
