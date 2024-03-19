import React from "react";
import "./Header.css";
import logo from "./images/Logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div>
            <p className="headertext">Call center : 900200</p>
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#"></a>Home
              </li>
              <li className="linktext">
                <a href="#"></a>Find your menu
              </li>
              <li>
                <a href="#"></a>Best seller
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={logo} alt="This is a logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
