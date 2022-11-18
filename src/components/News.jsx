import React from "react";
import "../css/News.css";
import img from "../assets/img1.jpg";
// import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news-comp">
      <h1>LATEST NEWS</h1>
      <p>See the construction of our Nigeria campus.</p>
      <img src={img} alt="" />
    </div>
  );
};

export default News;
