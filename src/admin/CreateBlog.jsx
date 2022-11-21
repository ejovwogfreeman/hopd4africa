import React, { useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { postBlog } from "../api";
import { BlogContext } from "../context/BlogContext";

const CreateBlog = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = React.useState(false);
  const [UserState, setUserState] = React.useContext(UserContext);
  const [BlogState, setBlogState] = React.useContext(BlogContext);
  const navigate = useNavigate();

  const [blogPost, setBlogPost] = React.useState({
    // method: params.method ? params.method : "Bitcoin",
    title: "",
    content: "",
    file: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let user;
    user = JSON.parse(localStorage.getItem("user"));
    let token = user.authorization.token;

    // let formData = new FormData();

    // formData.append("files", blogPost.file[0]);
    // formData.append("title", blogPost.title);
    // formData.append("content", blogPost.content);

    let blog = await postBlog(token, blogPost);

    try {
      // const blog = await postBlog(blogPost);
      setBlogState(blog);
      setToastifyState({
        ...ToastifyState,
        message: blog.message,
        variant: "success",
        open: true,
      });
      navigate("/admin_dashboard");
      setLoading(false);
    } catch (err) {
      console.log(err);
    }

    console.log(BlogState);

    // if (blog.success) {
    //   setBlogState(blog);
    //   setToastifyState({
    //     ...ToastifyState,
    //     message: blog.message,
    //     variant: "success",
    //     open: true,
    //   });
    //   navigate("/admin_dashboard");
    //   setLoading(false);
    // } else {
    //   setToastifyState({
    //     ...ToastifyState,
    //     message: blog.message,
    //     variant: "error",
    //     open: true,
    //   });
    //   console.log(blog.message);
    //   setLoading(false);
    // }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   let blog = await postBlog(blogPost);

  //   console.log(blog);

  //   if (blog.error) {
  //     setLoading(false);
  //     return setToastifyState({
  //       ...ToastifyState,
  //       message: blog.message,
  //       variant: "error",
  //       open: true,
  //     });
  //   }

  //   setToastifyState({
  //     ...ToastifyState,
  //     message: "Post added successfully.",
  //     variant: "success",
  //     open: true,
  //   });

  //   setLoading(false);
  //   setBlogState(blog);
  //   navigate("./admin_dashboard");
  //   // setBlog({ ...blog, title: null });
  //   // navigate("/admin_dashboard", { state: "reload" });
  // };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Blog Title"
              value={blogPost.title}
              required
              onChange={(e) =>
                setBlogPost({
                  ...blogPost,
                  title: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Content</label>
            <textarea
              type="text"
              placeholder="Enter Blog Content"
              value={blogPost.content}
              required
              onChange={(e) =>
                setBlogPost({
                  ...blogPost,
                  content: e.target.value,
                })
              }
            />
          </div>
          <div>
            <label>Thumbnail</label>
            <input
              type="file"
              accept="image/*"
              // required
              onChange={(e) =>
                setBlogPost({
                  ...blogPost,
                  file: e.target.files,
                })
              }
            />
          </div>
          <button disabled={loading}>{loading ? "LOADING..." : "POST"}</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
