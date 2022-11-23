import React from "react";
import "../css/General.css";
import img from "../assets/img1.jpg";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";
import ScrollToTop from "../components/ScrollToTop";

const Team = () => {
  return (
    <div className="container" style={{ color: "white" }}>
      <ScrollToTop />
      <div className="team-heading" style={{ color: "black" }}>
        <h1>HOPE4AFRICA Team.</h1>
        <p>DIRECTORS, MANAGERS and ADVISORS</p>
      </div>
      <div className="team-members">
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Apama</h3>
            <p>
              Field Director of Bible
              <br /> Distribution
            </p>
          </div>
        </div>
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Akong</h3>
            <p>
              Field Director of Chicken <br /> Operations
            </p>
          </div>
        </div>
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Grace</h3>
            <p>
              Field Director of House of <br /> Grace
            </p>
          </div>
        </div>
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Juliette Anyawara</h3>
            <p>
              Assistant Director of Childrens <br /> Welfare
            </p>
          </div>
        </div>
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Pastor Augustine Ojeka</h3>
            <p>Assistant Director of Finances</p>
          </div>
        </div>
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Bishop David Anaywara</h3>
            <p>Director of Hope4Africa</p>
          </div>
        </div>
        <div className="cont">
          <div className="img">
            <img src={img} alt="" />
          </div>
          <div className="text">
            <h3>Lion of Judah</h3>
            <p>
              Executive Director of <br />
              Hope4Africa
            </p>
          </div>
        </div>
      </div>
      <div className="follow">
        <div>
          <h3>Email</h3>
          <p>info@hope4africa.foundation</p>
        </div>
        <div>
          <h3>Call</h3>
          <p>info@hope4africa.foundation</p>
        </div>
        <div>
          <h3>Follow</h3>
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
      </div>
    </div>
  );
};

export default Team;
