import React, { useState } from "react";
const Home = () => {
  const [color, setColor] = React.useState("blue");
  const [username, setUsername] = useState("Web Development");
  const updateUserName = () => {
    setUsername("FDKFJ");
  };

  const colors = ["Red", "Green", "Blue", "Yellow", "Black"];
  return (
    <div>
      <h1 id="home-heading" style={{ backgroundColor: color }}>
        Home Page
      </h1>
      <button onClick={() => setColor("red")}>Change Color</button>
      <p>{username}</p>
      <button onClick={() => setUsername("ABC")}>Change Name</button>
      <button onClick={updateUserName}>Update</button>
      <button onClick={() => updateUserName()}>Update</button>

      <ul>
        {colors.map((val, index) => {
          return <li>{val}</li>;
        })}
      </ul>

      <input type="text" placeholder="Type ..." value="fsdfds"/>
    </div>
  );
};
export default Home;
