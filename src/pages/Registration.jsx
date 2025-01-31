import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Registration.css";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    nicNo: "",
    ridername: "", // Changed from Ridername to ridername
    password: "",
    confirmPassword: "",
    roles: ["RIDER"], // Added roles field
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-z]{2,20}$/.test(value)) {
          newErrors[name] = "Must be 2-20 letters only.";
        } else {
          delete newErrors[name];
        }
        break;

      case "email":
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          newErrors[name] = "Invalid email address.";
        } else {
          delete newErrors[name];
        }
        break;

      case "mobileNumber":
        if (!/^\d{10}$/.test(value)) {
          newErrors[name] = "Must be a 10-digit number.";
        } else {
          delete newErrors[name];
        }
        break;

      case "nicNo":
        if (!/^\d+$/.test(value)) {
          newErrors[name] = "NIC should only contain numbers.";
        } else {
          delete newErrors[name];
        }
        break;

      case "ridername":
        if (!/^[a-zA-Z][a-zA-Z0-9._]{1,19}$/.test(value)) {
          newErrors[name] =
            "Ridername must start with a letter and can contain letters, numbers, dots, or underscores.";
        } else {
          delete newErrors[name];
        }
        break;

      case "password":
        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(
            value
          )
        ) {
          newErrors[name] =
            "Password must have 1 uppercase, 1 lowercase, 1 number, 1 special character, and be at least 8 characters long.";
        } else {
          delete newErrors[name];
        }
        break;

      case "confirmPassword":
        if (value !== formData.password) {
          newErrors[name] = "Passwords do not match.";
        } else {
          delete newErrors[name];
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.keys(errors).length > 0) {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await axios.post("/auth/register", formData); // Updated endpoint
      if (response.status === 200) {
        alert("Registration Successful. Please verify your email.");
        navigate("/otp-verification"); // Redirect to OTP verification page
      }
    } catch (error) {
      alert("An error occurred. Please try again later");
      console.error("Error during registration:", error);
    }
  };
  
  return (
    <div className="register-container">
      <h1>Welcome New User!</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="side-by-side">
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="side-by-side">
            <div>
              <label htmlFor="mobileNumber">Mobile Number:</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {errors.mobileNumber && (
                <span className="error">{errors.mobileNumber}</span>
              )}
            </div>
            <div>
              <label htmlFor="nicNo">NIC No:</label>
              <input
                type="text"
                id="nicNo"
                name="nicNo"
                value={formData.nicNo}
                onChange={handleChange}
                required
              />
              {errors.nicNo && <span className="error">{errors.nicNo}</span>}
            </div>
          </div>

          <div>
            <label htmlFor="ridername">Ridername:</label>
            <input
              type="text"
              id="ridername"
              name="ridername"
              value={formData.ridername}
              onChange={handleChange}
              required
            />
            {errors.ridername && <span className="error">{errors.ridername}</span>}
          </div>

          <div className="side-by-side">
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div>
            <label htmlFor="confirmPassword">Re-enter Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
