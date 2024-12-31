import React from "react";
import "./hello.css"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div class="not-found">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <Link to="/" class="btn btn-primary">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
