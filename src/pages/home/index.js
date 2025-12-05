import React from "react";
import { Navbar, Footer } from "../../components";
import "./index.css";
const Home = () => {
  const data = [
    {
      imgURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxtx5uOH2FwWtC_-HAnN75PQqBFgfLF9D2w&s",
      title:
        "Photographs: Realistic visual representations of people, places, and things.",
      text: "An image is a visual representation, like a photograph, drawing, or painting, used to communicate information or tell stories. Images  can be found online through search engines like Google Images, or on",
    },
    {
      imgURL:
        "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
      title:
        "Photographs: Realistic visual representations of people, places, and things.",
      text: "An image is a visual representation, like a photograph, drawing, or painting, used to communicate information or tell stories. Images  can be found online through search engines like Google Images, or on",
    },
  ];
  return (
    <div>
      <Navbar activePage="Home" />
      <h1>Home Data</h1>
      <div className="card">
        {data.map((val, index) => {
          return (
            <div key={index}>
              <img src={val.imgURL} />
              <h6>{val.title}</h6>
              <p>{val.text}</p>
              <button>View more</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default Home;
