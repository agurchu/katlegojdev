import "./App.css";
import React from "react";
import Profile from "./portfolioContainer/home/Profile";
import NavBar from "./portfolioContainer/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactMe from "./portfolioContainer/contactMe/ContactMe";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
{
  /* 

<i class="bx bx-up-arrow-alt"></i>
<i class="bx bxs-phone"></i>
<i class="bx bx-envelope"></i>
<i class="bx bxl-html5"></i>
<i class="bx bxl-css3"></i>
<i class="bx bxs-user"></i> */
}
axios.defaults.baseURL = "http://localhost:8000";
function App() {
  return (
    <>
      <NavBar />

      <Profile />
      <ContactMe />
    </>
  );
}

export default App;
