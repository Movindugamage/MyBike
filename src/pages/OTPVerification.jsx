import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Registration.css"; // Use the same styling as in the registration page

const OTPVerification = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/verify-otp', { otp });
            if (response.status === 200) {
                // Redirect to login page
                window.location.href = '/login';
            }
        } catch (err) {
            setError('Invalid OTP. Please try again.');
            alert(error);
        }
    };

    const handleClear = () => {
        setOtp('');
        setError('');
    };

    return (
        <div className="otp-verification-container">
            <h1>OTP Verification</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="otp">Enter OTP:</label>
                    <input
                        type="text"
                        id="otp"
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                    />
                </div>
                {error && <span className="error">{error}</span>}
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    );
};

export default OTPVerification;
