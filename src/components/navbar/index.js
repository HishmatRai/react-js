import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
          <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      {/* <hr />
      <button onClick={() => window.location.assign("/")}>Home</button>
      <button onClick={() => window.location.assign("/about")}>About</button>
      <hr />
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About</button> */}
    </div>
  );
};
export default Navbar;
