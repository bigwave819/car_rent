import React from "react";
import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "./pages.css"
import { useNavigate } from "react-router-dom";
// Import Text component if it belongs to a library like Chakra UI
// import { Text } from "@chakra-ui/react";

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  const navigate = useNavigate();
  return (
    <div>
    <div className="login_container">
      <div className="login_form_container">
        <div className="right">
          <form className="form_container" onSubmit={handleSubmit}>
            <h2 style={{ color: "#1c024e", fontFamily: "Poppins" }}>
              Log into your Account
            </h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <button type="submit" className="green_btn" disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
        <div className="left">
          {/* Replace <Text> with a div or appropriate component */}
          <div style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>
            New Here?
          </div>
          <button type="button" 
          className="white_btn"
          onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
