import React, { useState, useEffect, useContext } from "react";
import "../css/General.css";
import "../css/Admin.css";
import { UserContext } from "../context/UserContext";
// import { ToastifyContext } from "../context/ToastifyContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getToken } from "../api";
// import { getUser } from "../api";
const token = getToken();

const Dashboard = () => {
  const [UserState, setUserState] = useContext(UserContext);

  // const navigate = useNavigate();
  let user;
  if (UserState) {
    user = UserState.data;
  } else {
    user = null;
  }

  // useEffect(() => {
  //   if (user === undefined) {
  //     navigate("/admin_signin");
  //   }
  // });

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
        <div>
          {token ? (
            <>
              Hello {timeGreet}, {user ? user.name : null}
            </>
          ) : null}
        </div>
        <div className="links">
          <Link to="/admin_create_blog">Add post</Link>
          <Link to="/admin_create_project">Add project</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
