import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ firstName: "Guest" });
    const [weather, setWeather] = useState({ temp: "--", condition: "Loading..." });

    useEffect(() => {
        const fetchData = async () => {
            const userData = await authService.getUser();
            setUser(userData);

            try {
                const weatherData = await fetchWeather();
                setWeather(weatherData);
            } catch (error) {
                console.error("Error fetching weather:", error);
                setWeather({ temp: "--", condition: "Error fetching weather" });
            }
        };

        fetchData();
    }, []);

    const fetchWeather = async () => {
        try {
            const response = await fetch("/weather-endpoint");
            if (!response.ok) {
                throw new Error("Weather API request failed");
            }
            return await response.json();
        } catch (error) {
            console.error("Error fetching weather:", error);
            return { temp: "--", condition: "Error fetching weather" };
        }
    };

    return (
        <div className="dashboard-container">
            <header className="header">
                <h1>Welcome, {user.firstName}</h1>
                <div className="weather-info">
                    <p>Weather: {weather.temp} - {weather.condition}</p>
                </div>
            </header>

            <main className="dashboard">
                <aside className="sidebar">
                    <ul>
                        <li onClick={() => navigate("/Home")}>Home</li>
                        <li onClick={() => navigate("/profile")}>My Wallet</li>
                        <li onClick={() => navigate("/scan-bike")}>Scan Bike</li>
                        <li onClick={() => navigate("/find-bicycle")}>Find a Bike</li>
                        <li onClick={() => navigate("/usage-history")}>Usage History</li>
                        <li onClick={() => navigate("/feedback")}>Feedback</li>
                        <li onClick={() => navigate("/settings")}>Settings</li>
                        <li className="logout" onClick={() => navigate("/")}>Logout</li>
                    </ul>
                </aside>

                <section className="content">
    
    {/* Added Weather and Nearest Bike Details */}
    <div className="info-section">
        <div className="weather-card">
            <div className="weather-icon">
                <img src="/src/assets/weather-icon.png" alt="Weather Icon" /> {/* Replace with your image path */}
            </div>
            <div className="weather-details">
                <h3>18°C Cloudy</h3>
                <p>Marbella Dr</p>
                <p>28 September, Wednesday</p>
            </div>
        </div>
<br></br>
        <div className="bike-card">
            <img src="/src/assets/bike-image.jpg" alt="Bike" className="bike-image" /> {/* Replace with your image path */}
            <div className="bike-details">
                <p>Distance: <strong>150m</strong></p>
                <p>Haibike Sduro FullSeven</p>
                <p>1 Available</p>
            </div>
        </div>
    </div>
</section>

            </main>

            <footer className="footer">
                <p>© 2025 MyBike Bicycle Sharing System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;