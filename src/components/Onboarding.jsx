import React from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        // Logic for next onboarding step or final navigation
        alert("Welcome to the Bike Sharing App!");
    };

    return (
        <div className="onboarding-container">
            <div className="onboarding-content">
                <h1>Welcome to My Bike App</h1>
                <p>Locate, borrow, and enjoy rides with ease!</p>
                <button className="onboarding-button" onClick={handleNext}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
