import "./App.css";
import React, { useEffect, useState } from "react";
import Profile from "./portfolioContainer/home/Profile";
import NavBar from "./portfolioContainer/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactMe from "./portfolioContainer/contactMe/ContactMe";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import AboutMe from "./portfolioContainer/aboutMe/AboutMe";
import Services from "./portfolioContainer/services/Services";
import Projects from "./portfolioContainer/projects/Projects";
import Featured from "./portfolioContainer/featured/Featured";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;

function App() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <main>
        <BsFillArrowUpSquareFill
          size={28}
          className={`scroll-to-top-button ${isVisible ? "visible" : ""}`}
          onClick={scrollToTop}
        />

        <Profile />
        <AboutMe />
        <Services />
        <Projects />
        <ContactMe />
      </main>
      <Featured />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
