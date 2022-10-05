import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    navigate("/");
  };

  if (token) {
    return (
      <div className="app">
        <div className="Title-conatiner">
          <h1 className="Title">Dashboard</h1>
          <h2 className="Login">Welcome! You are logged in!</h2>
        </div>
        <div className="Link-container">
          <button onClick={handleLogout}>Log out</button>
        </div>
      </div>
    );
  } else {
    alert("Page not avalibe without signing in");
  }
};

export default Dashboard;
