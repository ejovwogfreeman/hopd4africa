import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../api";

const ProtectedRoutes = () => {
  const userAuth = getToken();

  return userAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
