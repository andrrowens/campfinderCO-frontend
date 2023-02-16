import React from 'react'
import { useState } from 'react'

 const Login = ({onLogin}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/authenticated_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((r) => r.json())
      .then((user) => onLogin(user));
}

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    /> 
    <br />
    <input
      type="text"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <button type="submit">Login</button>
  </form>
  );
};

export default Login
