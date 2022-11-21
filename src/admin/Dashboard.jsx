import React, { useState, useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import { UserContext } from "../context/UserContext";
import { ToastifyContext } from "../context/ToastifyContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../api";

const Dashboard = () => {
  const [UserState, setUserState] = React.useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);
  const navigate = useNavigate();
  const location = useLocation();

  // useEffect(async () => {
  //   setLoading(true);
  //   let user = await getUser(UserState.token);

  //   if (user.error) {
  //     setLoading(false);
  //     setToastifyState({
  //       ...ToastifyState,
  //       message: user.message,
  //       variant: "error",
  //       open: true,
  //     });
  //     return navigate("/login");
  //   }
  //   localStorage.setItem("user", JSON.stringify(user));
  //   setUserState(user);

  //   setLoading(false);
  //   location.state = null;

  //   if (!user.username) {
  //     return navigate("/admin_signin");
  //   }
  // }, [location.state]);

  let timeDay = new Date().getHours();
  let timeGreet = null;
  if (timeDay < 12) {
    timeGreet = "Good Morinng";
  } else if (timeDay < 16) {
    timeGreet = "Good Afternoon";
  } else if (timeDay < 21) {
    timeGreet = "Good Evening";
  } else {
    timeGreet = "Good Night";
  }

  return (
    <div className="container">
      <div className="top-bar">
        <div>{UserState ? <>Hello {timeGreet}.</> : null}</div>
        <div className="links">
          <Link to="/admin_create_blog">Add post</Link>
          <Link to="/admin_create_project">Add project</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
