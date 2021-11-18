import "./Menu.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../logo.svg";
const Menu = (props) => {
  return (
    <div className="Menu">
      <h2 className="logo">Logo</h2>
      <a
        class="menu-option active"
        onClick={() => {
          props.setCurrentPage("Home");
        }}
      >
        <svg
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          space="preserve"
          class="menu-svg"
        >
          <g>
            <path
              d="M7,0H4A4,4,0,0,0,0,4V7a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V4A4,4,0,0,0,7,0ZM9,7A2,2,0,0,1,7,9H4A2,2,0,0,1,2,7V4A2,2,0,0,1,4,2H7A2,2,0,0,1,9,4Z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="M20,0H17a4,4,0,0,0-4,4V7a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V4A4,4,0,0,0,20,0Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V4a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="M7,13H4a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4H7a4,4,0,0,0,4-4V17A4,4,0,0,0,7,13Zm2,7a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2H7a2,2,0,0,1,2,2Z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="M20,13H17a4,4,0,0,0-4,4v3a4,4,0,0,0,4,4h3a4,4,0,0,0,4-4V17A4,4,0,0,0,20,13Zm2,7a2,2,0,0,1-2,2H17a2,2,0,0,1-2-2V17a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2Z"
              fill="#ffffff"
              data-original="#000000"
            />
          </g>
        </svg>
        Home
      </a>
      <a
        class="menu-option"
        onClick={() => {
          props.setCurrentPage("SignUp");
        }}
      >
        <svg
          version="1.1"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          space="preserve"
          class="menu-svg"
        >
          <g>
            <path
              d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z"
              fill="#ffffff"
              data-original="#000000"
            />
            <path
              d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z"
              fill="#ffffff"
              data-original="#000000"
            />
          </g>
        </svg>
        Account
      </a>
    </div>
  );
};

export default Menu;
