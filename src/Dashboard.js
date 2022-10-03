import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('email');
        localStorage.removeItem('password');
    }

    return (
        <div className="app">
            <div className="Title-conatiner">
                <h1 className="Title">Dashboard</h1>
            </div>
            <div className="Link-container">
                <Link to="/" className="Link" onClick={handleLogout}>Log out</Link>
            </div>
        </div>
    )
}

export default Dashboard;