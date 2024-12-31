import React from "react";
import "./pages.css"
import { useNavigate } from "react-router-dom";
// Import Text component if it belongs to a library like Chakra UI
// import { Text } from "@chakra-ui/react";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
    <div className="login_container">
      <div className="login_form_container">
        <div className="right">
          <form className="form_container">
            <h2 style={{ color: "#1c024e", fontFamily: "Poppins" }}>
              Log into your Account
            </h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input"
            />
            <button type="submit" className="green_btn">
              Sign In
            </button>
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
