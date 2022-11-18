import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const NavbarMobile = ({ open }) => {
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    setHide(!false);
  }, 1000);
  return (
    <div className={hide ? "showall" : null}>
      {hide ? (
        <div className={open ? "show" : "hide"}>
          <ul>
            <ul className="links mobile-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/timeline">Timeline</Link>
              </li>
              <li>
                <Link to="/team">Our Team</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/donate" className="donate">
                  <AiOutlineHeart className="heart" />
                  DONATE
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;
