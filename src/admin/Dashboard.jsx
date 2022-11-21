import React, { useEffect } from "react";
import "../css/General.css";
import "../css/Admin.css";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [UserState, setUserState] = React.useContext(UserContext);

  useEffect(() => {
    setUserState(UserState);
  });

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
          {UserState ? (
            <>
              Hello {UserState.data.name}, {timeGreet}.
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
