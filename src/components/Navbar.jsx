import React, { useState } from "react";
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
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavbarMobile open={open} />
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
            <h1>Hope4Africa</h1>
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
              <Link to="/donate" className="donate">
                <AiOutlineHeart className="heart" />
                DONATE
              </Link>
            </li>
          </ul>
          <div className="right">
            <span className="mobileNav">
              {open ? (
                <AiOutlineCloseSquare onClick={() => setOpen(!open)} />
              ) : (
                <AiOutlineMenu onClick={() => setOpen(!open)} />
              )}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
