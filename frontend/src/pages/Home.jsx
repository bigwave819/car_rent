import React from "react";
import Navbar from "../components/Navbar";
import HomePage from "./HomePage";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo"
import Cars from "./Cars"

const Home = () => {
  return (
    <>
    <div className="home">
      <Navbar />
      <HomePage/>
    </div>
    <AboutOne/>
    <Cars/>
    <AboutTwo/>
    </>
  );
};

export default Home;
