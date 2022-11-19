import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const NotFound = () => {
  return (
    <div>
      <ScrollToTop />
      <p>
        Not Found <Link to="/">go back home</Link>
      </p>
    </div>
  );
};

export default NotFound;
