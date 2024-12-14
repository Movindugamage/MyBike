// src/components/OnboardingPage.jsx
import React from "react";

const OnboardingPage = ({ step, handleNext, handleBack, handleSkip }) => {
    // Content for each step
    const stepContent = {
        1: "Content 1",
        2: "Content 2",
        3: "Content 3",
    };

    return (
        <div className="onboarding-content">
            <h1>Welcome to My Bike App</h1>
            <p>{stepContent[step]}</p>

            <div className="onboarding-buttons">
                {step > 1 && (
                    <button className="onboarding-button back" onClick={handleBack}>
                        Back
                    </button>
                )}
                {step < 3 && (
                    <button className="onboarding-button next" onClick={handleNext}>
                        Next
                    </button>
                )}
                {step === 3 && (
                    <button
                        className="onboarding-button finish"
                        onClick={handleSkip}
                    >
                        Finish
                    </button>
                )}
                <button className="onboarding-button skip" onClick={handleSkip}>
                    Skip
                </button>
            </div>
        </div>
    );
};

export default OnboardingPage;
