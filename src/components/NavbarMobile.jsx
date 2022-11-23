import React, { useState, useContext } from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { UserContext } from "../context/UserContext";
import { getToken } from "../api";

const NavbarMobile = ({ open, handleOpen }) => {
  // const token = getToken;
  // const [UserState, setUserState] = React.useContext(UserContext);
  const [UserState, setUserState] = useContext(UserContext);

  // console.log(UserState);
  let user;
  if (UserState) {
    user = UserState.data;
  } else {
    user = null;
  }
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    setHide(!false);
  }, 1000);
  return (
    <div className={hide ? "showall" : null}>
      {hide ? (
        <div className={open ? "show-cont" : "hide"}>
          <div
            className={open ? "show-close" : null}
            onClick={() => handleOpen()}
          ></div>
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
                <Link to="/blog">News</Link>
              </li>
              {user ? (
                <li onClick={() => handleOpen()}>
                  <Link to="/admin_dashboard">Dashboard</Link>
                </li>
              ) : null}
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
