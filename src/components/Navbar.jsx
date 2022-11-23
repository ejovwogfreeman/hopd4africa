import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import NavbarMobile from "./NavbarMobile";
import { ImMail } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getToken } from "../api";

const Navbar = () => {
  // const token = getToken;
  const [UserState, setUserState] = useContext(UserContext);

  // console.log(UserState);
  let user;
  if (UserState) {
    user = UserState.data;
  } else {
    user = null;
  }
  const [open, setOpen] = useState(false);
  // const [UserState, setUserState] = React.useContext(UserContext);

  const handleOpen = () => {
    setOpen(false);
  };
  return (
    <>
      <NavbarMobile open={open} handleOpen={handleOpen} />
      <nav>
        <div className="top-nav">
          <div className="mail-cont">
            <ImMail className="mail" />
            info@hope4africa.foundation
          </div>
          <div className="icons">
            <a href="https://facebook.com">
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com">
              <FaTwitterSquare />
            </a>
            <a href="https://instagram.com">
              <FaInstagramSquare />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="main-nav">
          <div className="logo">
            <Link to="/">
              <h1>Hope4Africa</h1>
            </Link>
          </div>
          <ul className="links">
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
              <Link to="/blog">News</Link>
            </li>
            {user ? (
              <li>
                <Link to="/admin_dashboard">Dashboard</Link>
              </li>
            ) : null}
            <li>
              <Link to="/donate" className="donate">
                <AiOutlineHeart className="heart" />
                DONATE
              </Link>
            </li>
          </ul>
          <div className="right">
            <span className="mobileNav">
              <AiOutlineMenu onClick={() => setOpen(!open)} />
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
