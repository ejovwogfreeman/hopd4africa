import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastifyContext } from "../context/ToastifyContext";

const Toastify = () => {
  const [ToastifyState, setToastifyState] = React.useContext(ToastifyContext);

  const showToast = () => {
    toast[ToastifyState.variant](ToastifyState.message);
  };

  setToastifyState(ToastifyState);

  if (ToastifyState.open) return showToast();

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Toastify;
