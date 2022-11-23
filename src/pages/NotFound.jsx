import React from "react";
import "../css/General.css";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const NotFound = () => {
  return (
    <div className="container">
      <ScrollToTop />
      <p>
        Not Found <Link to="/">go back home</Link>
      </p>
    </div>
  );
};

export default NotFound;
