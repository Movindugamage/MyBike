// src/components/Onboarding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnboardingPage from "./OnboardingPage";
import "../styles/Onboarding.css";

const Onboarding = () => {
    const [step, setStep] = useState(1); // Tracks the current step
    const navigate = useNavigate();

    // Handle "Next" button
    const handleNext = () => {
        if (step < 3) setStep(step + 1);
    };

    // Handle "Back" button
    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    // Handle "Skip" button
    const handleSkip = () => {
        navigate("/registration"); // Navigate to registration page
    };

    return (
        <div className="onboarding-container">
            <OnboardingPage
                step={step}
                handleNext={handleNext}
                handleBack={handleBack}
                handleSkip={handleSkip}
            />
        </div>
    );
};

export default Onboarding;
