import "./Menu.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../logo.svg";
const Menu = (props) => {
  return (
    <div className="Menu">
      <h2 className="logo">Logo</h2>
      <a
        class="menu-option"
        onClick={() => {
          props.setCurrentPage("Home");
        }}
      >
        Hey
      </a>
      <a
        class="menu-option"
        onClick={() => {
          props.setCurrentPage("SignUp");
        }}
      >
        Account
      </a>
    </div>
  );
};

export default Menu;
