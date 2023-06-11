import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" nav__container">
      <nav className=" navbar container">
        <Link to="home" className="nav__image mx-4">
          <img src="/kj_dev_long_logo3.png" alt="" />
        </Link>
        <NavItem navMobile="nav_items" />

        {!open ? (
          <div className="hamburger" onClick={() => setOpen(true)}>
            <RiMenu3Fill size={28} />
          </div>
        ) : (
          <div className="hamburger" onClick={() => setOpen(false)}>
            <RxCross1 size={28} />
          </div>
        )}
      </nav>
      {open && (
        <div className={`nav_mobile ${open ? "show" : ""}`}>
          <NavItem navMobile="nav_items" />
        </div>
      )}
    </header>
  );
}

const NavItem = ({ navMobile }) => {
  return (
    <ul className={navMobile}>
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
  );
};
