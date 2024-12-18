// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import Home styles
// import authService from "../services/authService"; // Mock backend service

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ firstName: "Guest" });
    const [weather, setWeather] = useState({ temp: "--", condition: "Loading..." });

    // Fetch user data and weather info
    useEffect(() => {
        const fetchData = async () => {
            const userData = await authService.getUser();
            setUser(userData);

            // Mock Weather API
            const weatherData = await fetchWeather();
            setWeather(weatherData);
        };

        fetchData();
    }, []);

    // Mock weather function (replace with real API if needed)
    const fetchWeather = async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ temp: "28°C", condition: "Sunny" });
            }, 1000);
        });
    };

    return (
        <div className="home-container">
            <h1>Welcome {user.firstName}</h1>

            <div className="weather-info">
                <h2>Current Weather</h2>
                <p>{weather.temp} - {weather.condition}</p>
            </div>

            <div className="home-buttons">
                <button onClick={() => navigate("/profile")}>My Wallet</button>
                <button onClick={() => navigate("/scan-bike")}>Scan Bike</button>
                <button onClick={() => navigate("/find-bicycle")}>Find a Bike</button>
                <button onClick={() => navigate("/usage-history")}>Usage History</button>

                <button onClick={() => navigate("/feedback")}>Feedback</button>
                <button onClick={() => navigate("/settings")}>Settings</button>
                

                <button className="logout-button" onClick={() => navigate("/")}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Home;
