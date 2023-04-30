import "./App.css";
import React from "react";
import Profile from "./portfolioContainer/home/Profile";
import Footer from "./portfolioContainer/home/footer/footer";
import NavBar from "./portfolioContainer/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /* 

<i class="bx bx-up-arrow-alt"></i>
<i class="bx bxs-phone"></i>
<i class="bx bx-envelope"></i>
<i class="bx bxl-html5"></i>
<i class="bx bxl-css3"></i>
<i class="bx bxs-user"></i> */
}

function App() {
  return (
    <div className="App">
      <NavBar />

      <Profile />

      <Footer />
    </div>
  );
}

export default App;
