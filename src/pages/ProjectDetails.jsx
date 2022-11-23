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

  const [project, setProject] = useState({});
  useEffect(() => {
    const getData = async (id) => {
      id = Number(params.id);
      const res = await fetch(`http://localhost:8000/api/project/${id}`);
      const data = await res.json();
      setProject(data.data);
    };
    getData();
  }, []);

  const handleDelete = () => {
    const token = getToken();
    let id = project.id;
    axios
      .delete(`http://localhost:8000/api/project/${id}`, {
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

  let user;
  if (UserState) {
    user = UserState.data;
  } else {
    user = null;
  }

  return (
    <div className="container project" style={{ color: "black" }}>
      <ScrollToTop />
      <div className="next">
        <div className="post-bar">Project Details</div>
        <div className="cont" style={{ color: "white" }}>
          <div>
            <img src={project.thumbnail} alt="" />
          </div>
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <hr />
            {user ? (
              <p style={{ display: "flex", aignItems: "center" }}>
                <Link
                  to={`/edit_project/${project.id}`}
                  style={{
                    border: "1px solid white",
                    padding: "7px",
                    color: "white",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  EDIT
                </Link>
                <button
                  onClick={handleDelete}
                  style={{
                    border: "1px solid white",
                    padding: "7px",
                    color: "white",
                    borderRadius: "5px",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  DELETE
                </button>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
