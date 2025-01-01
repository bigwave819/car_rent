import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from '../hooks/useLogout'
import "./hello.css";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h2 className="text-light">Carrent</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li clasNames="nav-item">
                <Link className="nav-link text-light" to="/">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Cars
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Help
                </Link>
              </li>
              {!user && (
                <div>
                  {" "}
                  <li className="nav-item">
                    <Link className="btn btn-primary" to="/">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn btn-outline-primary" to="/">
                      Register
                    </Link>
                  </li>{" "}
                </div>
              )}
              { user && <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div> }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
