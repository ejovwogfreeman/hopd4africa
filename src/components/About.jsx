import React from "react";
import "../css/About.css";
import img from "../assets/img3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about-cont">
        <div className="logo">
          <h1 style={{ margin: "0px 0px 50px" }}>Hope4Africa</h1>
        </div>
        <div className="contents">
          <div className="img">
            <img src={img} alt="" style={{ width: "100%" }} />
          </div>
          <div className="texts">
            <h2 style={{ marginBottom: "30px" }}>ABOUT</h2>
            <h3>God's Irony</h3>
            <p>
              What began as a commitment to provide a “single bag of rice” each
              month has turned into an impossible ministry of vision and
              obedience…
            </p>
            <h3>Our Story</h3>
            <p>
              Over 15 years ago and separated by over @13,000 kilometers Bishop
              David Anyawara and me, USA Businessman Tim Stevens, would have the
              “Mighty Hand of God” cross our paths while we were exploring and
              developing multiple business ventures in Africa… <br />
              Through the years Bishop David and I maintained our long-distance
              connection, reaching out to each other occasionally, as we both
              continued to look for mutually beneficial business ventures.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link to="">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
