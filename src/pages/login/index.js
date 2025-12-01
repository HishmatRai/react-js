import React, { useState } from "react";
const Login = () => {
  const [fullName, setFullName] = useState("");
  const loginHandler = () => {
    alert("login");
  };
  return (
    <div>
      <h1>Log In Page</h1>
      {fullName && (
        <p
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            margin: "10px",
            padding: "5px",
          }}
        >
          Full Name :- {fullName}
        </p>
      )}
      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};
export default Login;
