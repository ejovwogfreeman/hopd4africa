import React from "react";
import { AiOutlineHeart, AiOutlineMore } from "react-icons/ai";
import img from "../assets/img1.jpg";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="container">
      <div className="post-bar">
        <p>All Posts</p>
        <Link to="/">Login / Sign Up</Link>
      </div>
      <div className="blog-container">
        <div className="img-cont">
          <img src={img} alt="" />
        </div>
        <div className="text-cont">
          <div className="top">
            <span className="pro">
              <img src={img} alt="" />
              <span style={{ marginLeft: "10px" }}>
                <p>user123</p>
                <p>May2 . 1min</p>
              </span>
            </span>
            <span>
              <AiOutlineMore />
            </span>
          </div>

          <h3>Our First Post</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            voluptatibus, impedit eos doloremque accusantium quasi rerum est,
            deserunt excepturi nam amet distinctio eius aperiam unde iusto ipsam
            perferendis! Asperiores repellat libero ipsam doloribus facilis,
            illum ipsum suscipit! Sapiente, eveniet in ut doloribus dignissimos
            a nobis veniam praesentium! Deserunt, labore officia.
          </p>
          <hr />
          <div className="bottom">
            <span>
              <p>0 views</p>
              <p>0 comments</p>
            </span>
            <span>
              <AiOutlineHeart />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
