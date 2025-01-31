import React from "react";
import "../styles/Onboarding.css";
import Layout from "../components/Layout";

const OnboardingPage = ({ step, handleNext, handleBack, handleSkip }) => {
    
    const stepContent = {
        1: {
            image: "/src/assets/locate.jpg", 
            title: "Locate",
            description: "Find a nearby bike using the app's map feature.",
        },
        2: {
            image: "/src/assets/unlock.jpg", 
            title: "Unlock",
            description: "Scan the QR code to unlock the bike and start your ride.",
        },
        3: {
            image: "/src/assets/ride.gif", 
            title: "Ride",
            description: "Enjoy the ride and return the bike to a docking station.",
        },
    };

    const { image, title, description } = stepContent[step];

    return (
        <div className="onboarding-container">
            <div className="onboarding-content">
                <img
                    src={image}
                    alt={title}
                    className="onboarding-image"
                />
                <h2 className="onboarding-title">{title}</h2>
                <p className="onboarding-description">{description}</p>

                <div className="onboarding-buttons">
                    {step > 1 && (
                        <button
                            className="onboarding-button back"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                    )}
                    {step < 3 ? (
                        <button
                            className="onboarding-button next"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            className="onboarding-button finish"
                            onClick={handleSkip}
                        >
                            Finish
                        </button>
                    )}
                    <button
                        className="onboarding-button skip"
                        onClick={handleSkip}
                    >
                        Skip
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingPage;
