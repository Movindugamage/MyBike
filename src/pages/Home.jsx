import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import Layout from "../components/Layout";

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
        <Layout>
            <div className="info-section">
                <div className="weather-card">
                    <div className="weather-icon">
                        <img src="/src/assets/weather-icon.png" alt="Weather Icon" />
                    </div>
                    <div className="weather-details">
                        <h3>18°C Cloudy</h3>
                        <p>Marbella Dr</p>
                        <p>28 September, Wednesday</p>
                    </div>
                </div>
                <br />
                <div className="bike-card">
                    <img src="/src/assets/bike-image.jpg" alt="Bike" className="bike-image" />
                    <div className="bike-details">
                        <p>Distance: <strong>150m</strong></p>
                        <p>Haibike Sduro FullSeven</p>
                        <p>1 Available</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
