import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineMore } from "react-icons/ai";
// import img from "../assets/img1.jpg";
import { Link, useNavigate, useParams } from "react-router-dom";
import profile from "../assets/default.jpg";
import ScrollToTop from "../components/ScrollToTop";
import { getToken } from "../api";
import axios from "axios";
import { ToastifyContext } from "../context/ToastifyContext";
import { UserContext } from "../context/UserContext";

const BlogDetails = () => {
  const [UserState, setUserState] = React.useContext(UserContext);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  let user;
  if (UserState) {
    user = UserState.data;
  } else {
    user = null;
  }

  const [blog, setBlog] = useState({});
  useEffect(() => {
    const getData = async (id) => {
      id = Number(params.id);
      console.log(id);
      const res = await fetch(`http://localhost:8000/api/blog/${id}`);
      const data = await res.json();
      setBlog(data.data);
    };
    getData();
  }, []);
  console.log(blog);

  const handleDelete = () => {
    const token = getToken();
    let id = blog.id;
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
    setToastifyState({
      ...ToastifyState,
      message: "Blog Deleted successfully",
      variant: "success",
      open: true,
    });
    navigate("/admin_dashboard");
    setLoading(false);
  };

  return (
    <div className="container">
      <ScrollToTop />
      <div className="post-bar">Post Details</div>
      <div className="blog-container" style={{ marginBottom: "20px" }}>
        <div className="img-cont">
          <img src={blog.thumbnail} alt="" />
        </div>
        <div className="text-cont">
          <div className="top">
            <span className="pro">
              <img src={profile} alt="" />
              <span style={{ marginLeft: "10px" }}>
                <p>user123</p>
                <p>May2 . 1min</p>
              </span>
            </span>
            <span>
              <AiOutlineMore />
            </span>
          </div>

          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <hr />
          <div className="bottom">
            {user ? (
              <span>
                <Link to={`/edit_blog/${blog.id}`}>EDIT</Link>
                <button onClick={handleDelete}>DELETE</button>
              </span>
            ) : null}
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default BlogDetails;
