import React, { useState } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";

const NavbarMobile = ({ open, handleOpen }) => {
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    setHide(!false);
  }, 1000);
  return (
    <div className={hide ? "showall" : null}>
      {hide ? (
        <div className={open ? "show-cont" : "hide"}>
          <div className="show-close" onClick={() => handleOpen()}></div>
          <div className={open ? "show" : "hide"}>
            <div className="close">
              <AiOutlineCloseSquare onClick={() => handleOpen()} />
            </div>
            <ul className="links mobile-links">
              <li onClick={() => handleOpen()}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/timeline">Timeline</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/team">Our Team</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/projects">Projects</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/contact">Contact</Link>
              </li>
              <li onClick={() => handleOpen()}>
                <Link to="/donate" className="donate">
                  <AiOutlineHeart className="heart" />
                  DONATE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;
