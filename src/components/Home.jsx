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
                // Make a request to the backend endpoint that calls findWeatherByLocation
                const weatherData = await fetchWeather();
                console.log("Fetched Weather Data:", weatherData); // Log the data to inspect it
                setWeather(weatherData);
            } catch (error) {
                console.error("Error fetching weather:", error);
                setWeather({ temp: "--", condition: "Error fetching weather" });
            }
        };
    
        fetchData();
    }, []);
    
    // Mock fetchWeather function in case you are directly calling backend
    const fetchWeather = async () => {
        try {
            const response = await fetch("/weather-endpoint");  // Make sure this is correct URL
            if (!response.ok) {
                throw new Error("Weather API request failed");
            }
            const weatherData = await response.json();
            return weatherData;  // Assuming the response structure matches the backend model
        } catch (error) {
            console.error("Error fetching weather:", error);
            return { temp: "--", condition: "Error fetching weather" };  // Return error state
        }
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
