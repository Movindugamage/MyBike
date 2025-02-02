import React, { useState } from "react";
import axios from "axios";
import "../styles/Registration.css"; // Use the same styling as in the registration page
import { apiService } from "../services/apiService";
import { useNavigate } from "react-router-dom";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:8080/auth/verify", {
    //     verificationCode: otp, // Use the correct key for the OTP
    //   });
    //   if (response.status === 200) {
    //     // Redirect to login page
    //     alert("Email verified. Please login to continue.");
    //     window.location.href = "/login";
    //   }
    // } catch (err) {
    //   setError("Invalid OTP. Please try again.");
    //   alert(error);
    // }
    try {
      const res = await apiService.post("/auth/verify", {
        verificationCode: otp,
      });
      navigation("/login");
    } catch (error) {
      console.error("OTP verification failed:", error);
      
    }
  };

  const handleClear = () => {
    setOtp("");
    setError("");
  };

  return (
    <div className="otp-verification-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>OTP:</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
        </div>
        {error && <span>{error}</span>}
        <button type="submit">Verify</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default OTPVerification;
