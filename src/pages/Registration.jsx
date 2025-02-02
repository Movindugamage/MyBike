import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiService } from "../services/apiService";
import { useAuthStore } from "../stores/authStore";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    ridername: "",
    password: "",
    confirmPassword: "",
    roles: ["RIDER"],
  });

  console.log({ formData });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
      case "lastName":
        if (!/^[A-Za-z]{2,20}$/.test(value)) {
          newErrors[name] =
            "Must be 2-20 characters long and contain only letters.";
        } else {
          delete newErrors[name];
        }
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[name] = "Invalid email address.";
        } else {
          delete newErrors[name];
        }
        break;
      case "mobileNumber":
        if (!/^\+?\d{10,15}$/.test(value)) {
          newErrors[name] = "Must be a valid phone number.";
        } else {
          delete newErrors[name];
        }
        break;
      case "ridername":
        if (!/^[A-Za-z0-9]{2,20}$/.test(value)) {
          newErrors[name] =
            "Must be 2-20 characters long and contain only letters and numbers.";
        } else {
          delete newErrors[name];
        }
        break;
      case "password":
        if (value.length < 6) {
          newErrors[name] = "Must be at least 6 characters long.";
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
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData); // Log form data before submission
    // try {
    //   const response = await axios.post(
    //     "http://localhost:8080/auth/register",
    //     formData
    //   );
    //   if (response.status === 200) {
    //     alert("Registration Successful. Please verify your email.");
    //     navigate("/otp-verification");
    //   }
    // } catch (error) {
    //   if (error.response) {
    //     // Request made and server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //     alert(`Registration failed: ${error.response.data.message}`);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     console.log(error.request);
    //     alert("No response from server. Check network or server status.");
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log("Error", error.message);
    //     alert("Error in request setup: " + error.message);
    //   }
    // }
    try {
      const res = await apiService.post("/auth/register", formData);

      navigate("/otp-verification");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <span>{errors.firstName}</span>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <span>{errors.lastName}</span>}
          </div>
          <div>
            <input
              type="text"
              name="ridername"
              placeholder="Username"
              value={formData.ridername}
              onChange={handleChange}
            />
            {errors.ridername && <span>{errors.ridername}</span>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {errors.mobileNumber && <span>{errors.mobileNumber}</span>}
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
          </div>
          <div>
            <label>Role:</label>
            <select
              name="roles"
              value={formData.roles[0]} // Set the default selected value
              onChange={(e) =>
                setFormData({ ...formData, roles: [e.target.value] })
              }
            >
              <option value="RIDER">RIDER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>
          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
