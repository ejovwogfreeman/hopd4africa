import React from "react";
import "../css/General.css";
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";

const ContactPg = () => {
  return (
    <div>
      <ScrollToTop />
      <div style={{ paddingTop: "150px" }}>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPg;
