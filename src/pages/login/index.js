import React, { useState } from "react";
import { Input, Layout } from "../../components";
const Login = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const loginHandler = () => {
    setMessageType("error");
    if (fullName === "") {
      setMessage("Full Name Required!");
    } else if (email === "") {
      setMessage("Email Required!");
    } else if (
      !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      setMessage("Please enter valid email address!");
    } else if (password === "") {
      setMessage("Password Required!");
    } else {
      console.log("Full Name :- ", fullName);
      console.log("Email Address :- ", email);
      console.log("Password :- ", password);
      setMessageType("success");
      setMessage("Success!");
      setFullName("");
      setEmail("");
      setPassowrd("");
    }

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };
  return (
    <Layout activePage={"Login"}>
      <Input
        title="Full Name"
        type="text"
        placeholder="Enter full name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <Input
        title="Email Address"
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        title="Password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassowrd(e.target.value)}
      />

      <p style={{ color: messageType === "error" ? "red" : "green" }}>
        {message}
      </p>
      <button onClick={loginHandler}>Login</button>
    </Layout>
  );
};
export default Login;
