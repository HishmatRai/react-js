import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Navbar = (props) => {
  // console.log("props ", props);
  // console.log("active page",)
  const navigate = useNavigate();
  const routerLocation = useLocation();
  // let path = window.location.pathname;
  let path = routerLocation.pathname;
  return (
    <div
      style={{
        backgroundColor: "#eec3c3ff",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 10px",
      }}
    >
      {/* <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul> */}
      {/* <hr />
      <hr />
      <hr /> */}
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link> */}

      {/* <hr />
      <button onClick={() => window.location.assign("/")}>Home</button>
      <button onClick={() => window.location.assign("/about")}>About</button>
      <hr />*/}
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ backgroundColor: path === "/" ? "blue" : "yellow" }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/about");
          }}
          style={{
            backgroundColor: path === "/about" ? "blue" : "yellow",
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          style={{
            backgroundColor: path === "/login" ? "blue" : "yellow",
          }}
        >
          Login
        </button>
      </div>
      <p>Active Page:- {props.activePage}</p>
    </div>
  );
};
export default Navbar;
