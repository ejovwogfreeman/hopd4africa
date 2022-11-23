import React from "react";
import "../css/Header.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div>
          <h1>
            TO GOD BE THE <br /> GLORY.
          </h1>
          <p>
            Join our mission to help communities in West Africa THRIVE. <br />
            Through faith, all things are possible.....
          </p>
          <span>
            <Link to="/donate" className="donate">
              <AiOutlineHeart className="heart" />
              DONATE
            </Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
