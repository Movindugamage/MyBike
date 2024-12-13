import React from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

const SplashScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="splash-container">
            <img src="/src/assets/splash-bg.jpg" alt="Splash Background" className="splash-bg" />
            <div className="splash-content">
                <h1>Welcome to My Bike App</h1>
                <br />
                <br />
                <br />
                <div className="splash-buttons">
                    <button className="get-started-btn" onClick={() => navigate("/onboarding")}>
                        Get Started
                    </button>
                    <br />
                    <br />
                    Already have an account?
                    <button className="login-btn" onClick={() => navigate("/login")}>
                        Login
                    </button>
                    <br />
                    First time here?
                    <button className="signup-btn" onClick={() => navigate("/register")}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
