import React from "react";
import "../css/News.css";
import img from "../assets/building1.webp";

const News = () => {
  return (
    <div className="news-comp">
      <h1>LATEST NEWS</h1>
      <p>See the construction of our Nigeria campus.</p>
      <img src={img} alt="" style={{ margin: "auto" }} />
    </div>
  );
};

export default News;
