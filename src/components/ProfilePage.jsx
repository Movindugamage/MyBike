import React from "react";
import "./ProfilePage.css";
import bikeImage from "../assets/bike-image.jpg"; // Replace with the appropriate path to your image
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProfilePage = () => {
  const navigate = useNavigate(); // Hook for navigation
  // Sample user data
  const user = {
    name: "John Doe",
    balance: 10.5,
    usage: [
      { date: "2024-12-01", distance: "5.3 km", duration: "25 min" },
      { date: "2024-12-02", distance: "8.1 km", duration: "42 min" },
    ],
    weeklyPassPrice: 24.99,
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <button className="back-button" onClick={() => window.history.back()}>←</button>
        <h1>My Wallet</h1>
      </header>
      <section className="profile-card">
        <div className="card-image">
          <img src={bikeImage} alt="Bike" />
        </div>
        <div className="card-content">
          <h2>Weekly Pass</h2>
          <p className="price">${user.weeklyPassPrice}</p>
          <button className="purchase-button">Purchase</button>
        </div>
      </section>
      <section className="balance-section">
        <div className="balance-info">
          <h3>Balance</h3>
          <p>${user.balance.toFixed(2)}</p>
        </div>
        <button
          className="top-up-button"
          onClick={() => navigate("/topup")} // Navigate to TopUp
        >
          Top Up
        </button>
      </section>
      <section className="usage-section">
        <h3>Usage History</h3>
        <ul>
          {user.usage.map((entry, index) => (
            <li key={index}>
              <span>{entry.date}</span>
              <span>{entry.distance}</span>
              <span>{entry.duration}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProfilePage;
 