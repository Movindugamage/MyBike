import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <nav className="dashboard-menu">
        <Link to="/profile">My Profile</Link>
        {/* Add other navigation links here */}
      </nav>
    </div>
  );
};

export default Dashboard;
