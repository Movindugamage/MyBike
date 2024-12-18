import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();

  // State to store form input data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    nicNo: "",
    nicFront: null,
    nicBack: null,
    username: "",
    password: "",
    confirmPassword: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value, // For file inputs, store the file
    });
  };

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create form data to send files and other fields
    const dataToSend = new FormData();
    dataToSend.append("firstName", formData.firstName);
    dataToSend.append("lastName", formData.lastName);
    dataToSend.append("email", formData.email);
    dataToSend.append("mobileNumber", formData.mobileNumber);
    dataToSend.append("nicNo", formData.nicNo);
    dataToSend.append("nicFront", formData.nicFront);
    dataToSend.append("nicBack", formData.nicBack);
    dataToSend.append("username", formData.username);
    dataToSend.append("password", formData.password);

    try {
      const response = await fetch("http://localhost:8080/api/riders", {
        method: "POST",
        body: dataToSend, // FormData includes files and text fields
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/");
      } else {
        const errorData = await response.json();
        alert("Registration failed: " + errorData.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="register-container">
      <img src="/logo.jpeg" alt="My Bike Logo" className="logo" />
      <h1>Welcome New User!</h1>
      <br />

      <form onSubmit={handleRegister}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Mobile Number:</label>
        <input
          type="tel"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        <br />
        <label>NIC No:</label>
        <input
          type="text"
          name="nicNo"
          value={formData.nicNo}
          onChange={handleChange}
          required
        />
        <br />
        <label>Upload NIC Front:</label>
        <input
          type="file"
          name="nicFront"
          accept=".png, .jpeg"
          onChange={handleChange}
          required
        />
        <label>Upload NIC Back:</label>
        <input
          type="file"
          name="nicBack"
          accept=".png, .jpeg"
          onChange={handleChange}
          required
        />
        <br />
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <label>Re-enter Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
