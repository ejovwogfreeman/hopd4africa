import React, { useState } from "react";
import "../css/Navbar.css";

const NavbarMobile = ({ open }) => {
  const [hide, setHide] = useState(false);
  setTimeout(() => {
    setHide(!false);
  }, 1000);
  return (
    <div className={hide ? "showall" : null}>
      {hide ? (
        <div className={open ? "show" : "hide"}>
          <ul>
            <li>Cart</li>
            <li>Help</li>
            <li>Account</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobile;
