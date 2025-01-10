import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
    const navigate = useNavigate();

    return (
        <div className="splash-container">
            
            <div className="splash-content">
                <img src="/logo.jpeg" alt="My Bike Logo" className="logo" />    
                <h1>Welcome to My Bike</h1>
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
                   
                    <br /><br />
                </div>
                </div>

Below Buttons are for testing purpose. They will vanish after finalization.

                <div className="test-buttons">
                <button onClick={() => navigate("/home")}>Test Home Page</button>
            </div> 
            </div>
    );
};

export default SplashScreen;
