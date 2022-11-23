import React, { useState, useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import axios from "axios";
import { getToken } from "../api";
import { useParams } from "react-router-dom";

// import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { useNavigate } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate();
  const params = useParams();

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
  console.log(blog.title);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);
  const [image, setImage] = useState(blog.thumbail);

  console.log(title);
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  //   let id = blog.id;
  //   console.log(id);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("thumbnail", image);
    const token = getToken();
    let id = blog.id;
    console.log(id);
    axios
      .put(`http://localhost:8000/api/blog/${id}`, formData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
    setToastifyState({
      ...ToastifyState,
      message: "Blog Updated successfully",
      variant: "success",
      open: true,
    });
    navigate("/admin_dashboard");
    setLoading(false);
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h3 style={{ marginBottom: "10px" }}>Edit Post</h3>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              type="text"
              placeholder="Enter Blog Content"
              value={content}
              required
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label>Thumbnail</label>
            <input type="file" name="file" onChange={handleImage} />
          </div>
          <button disabled={loading}>{loading ? "LOADING..." : "EDIT"}</button>
          {/* <button>submit</button> */}
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
