import React from "react";
import "./Navbar.css";
import profileImage from "../assets/profile-image.jpg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h2 className="profile-name">John Doe</h2>
      </div>
      <div className="menu-section">
        <button className="menu-item">Scan Bike</button>
        <button className="menu-item">Find a Bicycle</button>
        <button className="menu-item">Find Empty Dock</button>
        <button className="menu-item">My Profile</button>
        <button className="menu-item">Usage History</button>
        <button className="menu-item">Feedback</button>
      </div>
      <div className="logout-section">
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
