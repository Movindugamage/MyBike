import React from "react";
import "./Onboarding.css";

const OnboardingPage = ({ step, handleNext, handleBack, handleSkip }) => {
    // Content for each step with images, titles, and descriptions
    const stepContent = {
        1: {
            image: "/src/assets/locate.jpg", // Replace with your image path
            title: "Locate",
            description: "Find a nearby bike using the app's map feature.",
        },
        2: {
            image: "/src/assets/unlock.jpg", // Replace with your image path
            title: "Unlock",
            description: "Scan the QR code to unlock the bike and start your ride.",
        },
        3: {
            image: "/src/assets/ride.gif", // Replace with your image path
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
