


import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import bikeImage from "../assets/bike-image.jpg";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate(); // Hook for navigation

  // State to store user data
  const [user, setUser] = useState({
    name: "",
    balance: 0,
    usage: [],
    weeklyPassPrice: 0,
  });

  // Function to fetch data from backend
  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/riders"); // Replace with your backend endpoint
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUser(data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to load user data. Please try again.");
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="profile-page">
      <header className="profile-header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h1>My Wallet</h1>
      </header>
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
      <section className="profile-card">
        <div className="card-image">
          <img src={bikeImage} alt="Bike" />
        </div>
        <div className="card-content">
          <h2>Weekly Pass</h2>
          <p className="price">${user.weeklyPassPrice.toFixed(2)}</p>
          <button className="purchase-button">Purchase</button>
        </div>
      </section>
      
      <section className="usage-section">
        <h3>Usage History</h3>
        <ul>
          {user.usage.length > 0 ? (
            user.usage.map((entry, index) => (
              <li key={index}>
                <span>{entry.date}</span>
                <span>{entry.distance}</span>
                <span>{entry.duration}</span>
              </li>
            ))
          ) : (
            <p>No usage data available.</p>
          )}
        </ul>
      </section>
      <section className="refresh-section">
        <button className="refresh-button" onClick={fetchUserData}>
          Refresh Data
        </button>
      </section>
    </div>
  );
};

export default ProfilePage;
