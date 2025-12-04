import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
const Navbar = (props) => {
  console.log("props ", props);
  const navigate = useNavigate();
  const routerLocation = useLocation();
  let path = routerLocation.pathname;
  const pages = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/signup",
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#eec3c3ff",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px 10px",
      }}
    >
      <div>
        {pages.map((val, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                navigate(val.path);
              }}
              style={{ backgroundColor: path === val.path ? "blue" : "yellow" }}
            >
              {val.title}
            </button>
          );
        })}
      </div>
      <p>Active Page:- {props.activePage}</p>
    </div>
  );
};
export default Navbar;
