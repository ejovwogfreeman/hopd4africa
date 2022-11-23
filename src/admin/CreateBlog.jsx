import React, { useState, useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import axios from "axios";
import { getToken } from "../api";

import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [UserState, setUserState] = React.useState(UserContext);
  // let user;
  // if (UserState) {
  //   user = UserState.data;
  // } else {
  //   user = null;
  // }

  // useEffect(() => {
  //   if (user === undefined) {
  //     navigate("/admin_signin");
  //   }
  // });

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("thumbnail", image);
    const token = getToken();
    axios
      .post("http://localhost:8000/api/blog", formData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "Blog added successfully",
          variant: "success",
          open: true,
        });
        navigate("/admin_dashboard");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setToastifyState({
          ...ToastifyState,
          message: "Please fill all Field",
          variant: "error",
          open: true,
        });
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h3 style={{ marginBottom: "10px" }}>Add Post</h3>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              type="text"
              placeholder="Enter Blog Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <label>Thumbnail</label>
            <input type="file" name="file" onChange={handleImage} />
          </div>
          <button disabled={loading}>{loading ? "LOADING..." : "POST"}</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
