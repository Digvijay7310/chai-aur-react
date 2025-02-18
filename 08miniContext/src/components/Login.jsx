import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div
      className=" flex justify-center flex-wrap bg-blue-500 p-5 m-auto"
      style={{ height: "400px", width: "400px" }}
    >
      <div className="m-auto p-0">
        <h1 className="m-auto text-white text-3xl font-extrabold text-center">
          React with chai and share is important
        </h1>
        <h2 className="m-1.5 text-amber-50 font-bold text-center">Login</h2>
      </div>
      <div className="flex justify-center flex-col">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
          className="bg-amber-50 h-4 p-3 border-r-0 rounded-sm"
        />
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="bg-amber-50 h-3 p-3 border-r-0 rounded-sm"
        />
        <br />
        <button
          onClick={handleSubmit}
          className="bg-blue-950 text-white p-1 text-sm cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
