import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
const Card = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="card">
      {data.map((val, index) => {
        return (
          <div key={index}>
            <img src={val.imgURL} />
            <h6>{val.title}</h6>
            <p>{val.text}</p>
            <button
              onClick={() =>
                navigate(`/blog-details/${val.title}`, {
                  state: { data: val },
                })
              }
            >
              View more
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
