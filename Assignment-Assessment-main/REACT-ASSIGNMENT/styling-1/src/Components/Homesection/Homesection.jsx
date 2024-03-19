import React from "react";
import "./Homesection.css";
import Homepic from "./images/Homesection.png";

const Homesection = () => {
  return (
    <>
      <div className="container mainsection">
        <h1 className="hometext">HEALTHY FRESH</h1>
        <div className="button">
          <button className="btn">BIG DEAL</button>
        </div>
        <p className="homelorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quia?
        </p>
        <div className="socialicon">
          <ul>
            <li>
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i class="fa-brands fa-github"></i>
            </li>
            <li>
              <i class="fa-solid fa-xmark"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homesection;
