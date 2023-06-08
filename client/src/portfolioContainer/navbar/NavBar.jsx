import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";

export default function NavBar() {
  return (
    <header className=" nav__container">
      <nav className=" navbar container">
        <Link to="home" className="nav__image mx-4">
          <img src="/kj_dev_long_logo3.png" alt="" />
        </Link>
        <ul className="nav_items ">
          <li>
            <Link
              spy={true}
              activeClass="active"
              className="text-decoration-none"
              to={"home"}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              spy={true}
              activeClass="active"
              className="text-decoration-none"
              to={"about"}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              className="text-decoration-none"
              to={"services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              spy={true}
              activeClass="active"
              className="text-decoration-none"
              to={"projects"}
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              spy={true}
              activeClass="active"
              className="text-decoration-none"
              to={"contact"}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
