import React from "react";
const Card = ({ data }) => {
  return (
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
  );
};
export default Card;
