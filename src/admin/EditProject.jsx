import React, { useState, useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import axios from "axios";
import { getToken } from "../api";

// import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProject = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [project, setProject] = useState({});
  useEffect(() => {
    const getData = async (id) => {
      id = Number(params.id);
      const res = await fetch(`http://localhost:8000/api/project/${id}`);
      const data = await res.json();
      setProject(data.data);
      console.log(data.data);
      setTitle(data.data.title);
      setContent(data.data.description);
      setImage(data.data.thumbnail);
      setLoading(false);
    };
    getData();
  }, []);

  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const [loading, setLoading] = useState(false);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", title);
    formData.append("description", content);
    formData.append("thumbnail", image);
    const token = getToken();
    let id = project.id;
    axios
      .post(`http://localhost:8000/api/project/${id}`, formData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setToastifyState({
          ...ToastifyState,
          message: "Project Updated successfully",
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
          <h3 style={{ marginBottom: "10px" }}>Edit Project</h3>
          <div>
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Project Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              reguired
            />
          </div>
          <div>
            <label>Desctiption</label>
            <textarea
              type="text"
              placeholder="Enter Project description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              reguired
            />
          </div>
          <div>
            <label>Thumbnail</label>
            <input type="file" name="file" onChange={handleImage} reguired />
          </div>
          <button disabled={loading}>
            {loading ? "LOADING..." : "UPDATE"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProject;
