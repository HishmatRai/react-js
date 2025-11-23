import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />}/>
        <Route path="*" element={<h1>Page not Found!</h1>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;