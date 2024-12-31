import "./signup.css"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        background: "#080124",
      }}
    >
      <div className="signup_container">
        <div className="signup_form_container">
          <div className="left">
            <h1 fontSize={{ base: "1.3rem", md: "1.6rem" }}>Welcome!</h1>
            <button
              type="button"
              className="white_btn"
              onClick={() => navigate("/login")}
            >
              Sign in
            </button>
          </div>
          <div className="right">
            <form className="form_container">
              <h2 color="#1c024e" fontFamily="poppins">
                Create Account
              </h2>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input"
              />
              <input
                type="text"
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
              <input
                type="password"
                placeholder="Confirm Password"
                name="ConfirmPassword"
                className="input"
              />

              <button type="submit" className="green_btn">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;