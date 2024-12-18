import React from "react";
import { useNavigate } from "react-router-dom";
import "./SplashScreen.css";

const SplashScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="splash-container">
            <img src="/src/assets/splash-bg.jpg" alt="Splash Background" className="splash-bg" />
            <div className="splash-content">
                <img src="/logo.jpeg" alt="My Bike Logo" className="logo" />    
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
                   
                    <br /><br /><br />
                </div>



Below Buttons are for testing purpose. They will vanish after finalization.

                <div className="test-buttons">
                <button onClick={() => navigate("/scan-bike")}>Scan Bike</button>
                <button onClick={() => navigate("/find-bicycle")}>Find a Bicycle</button>
                <button onClick={() => navigate("/find-empty-dock")}>Find Empty Dock</button>
                <br />
                <button onClick={() => navigate("/profile")}>My Wallet</button>
                <button onClick={() => navigate("/settings")}>Settings</button>
                <button onClick={() => navigate("/usage-history")}>Usage History</button>
                <button onClick={() => navigate("/feedback")}>Feedback</button>
               
                <button onClick={() => navigate("/home")}>Test Home Page</button>

            </div>
            </div>
        </div>
    );
};

export default SplashScreen;
