import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

const Home = () => {
  return (
    <div className="app">
      <div className="Title-container">
        <h1 className="Title">React Login and Register Module</h1>
      </div>
      <div className="Link-container">
        <Link to="/register" className="Link">
          Register
        </Link>
        <Link to="/login" className="Link">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Home;
