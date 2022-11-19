import React from "react";
import "../css/Header.css";
// import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header2 = () => {
  return (
    <header>
      <div className="header-content header-content2">
        <div>
          <h1>
            A&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;O&nbsp;&nbsp;&nbsp;U&nbsp;&nbsp;&nbsp;T
          </h1>
          <span>
            <Link to="" className="donate">
              READ MORE
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header2;
