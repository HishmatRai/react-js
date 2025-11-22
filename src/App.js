import React from "react";
import WebImg from "./web.png";
import "./App.css";
import Home from "./Home";
import About from "./About";
const App = () => {
  return (
    <div>
      <Home />
      <About />
      {/* <h1>Web Development</h1>
      <h1 id="heading">Web Development</h1>
      <h1 className="web-dev">Web Development</h1>
      <h1>Web Development</h1>
      <h1>Web Development</h1>
      <h1 className="web-dev">Web Development</h1>
      <p>
        Web development is the process of creating and maintaining websites and
        web applications, encompassing front-end (what the user sees and
        interacts with) and back-end (server, database, and application logic)
        development. It involves a range of tasks, from basic design and coding
        to complex web applications, and requires skills in programming
        languages like HTML, CSS, and JavaScript, as well as database management
        and other technical fields.
      </p>
      <ul>
        <li>web development</li>
        <li>app development</li>
      </ul>
      <input placeholder="Type ..." />
      <hr />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGCDR5nBpsRnjkCoIccrnqoKpDSYUTG7MLA&s" />
      <hr />
      <img src={WebImg} />
      <hr />
      <hr />
      <img src={require("./web.png")} /> */}
    </div>
  );
};
export default App;
