import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Topup.css"; // Correct path to Topup.css

const Topup = () => {
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

    const [selectedAmount, setSelectedAmount] = useState(5); // Default selected amount
    const amounts = [5, 10, 25, 50];

    return (
        <Layout user={user} weather={weather}>
            <div className="topup-container">
                <header className="topup-header">
                    <button className="back-button" onClick={() => window.history.back()}>
                        ←
                    </button>
                    <h1>Top Up</h1>
                </header>
                <section className="amount-section">
                    {amounts.map((amount) => (
                        <div
                            key={amount}
                            className={`amount-box ${selectedAmount === amount ? "selected" : ""}`}
                            onClick={() => setSelectedAmount(amount)}
                        >
                            <p>${amount}</p>
                            {selectedAmount === amount && <span className="checkmark">✓</span>}
                        </div>
                    ))}
                </section>
                <section className="payment-section">
                    <h3>MasterCard</h3>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                        alt="MasterCard"
                        className="payment-logo"
                    />
                </section>
                <button className="topup-button">Top Up</button>
            </div>
        </Layout>
    );
};

export default Topup;
