import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Login, Contact, NotFound ,BlogDetails} from "../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog-details/:id" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
