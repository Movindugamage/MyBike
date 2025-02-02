import React, { useState } from "react";
import axios from "axios";
import { apiService } from "../services/apiService";
import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { setToken ,setFirstName} = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:8080/auth/login", {
    //     ridername: formData.username,
    //     password: formData.password,
    //   });
    //   if (response.status === 200) {
    //     const { token } = response.data;
    //     localStorage.setItem("token", token); // Store the token in localStorage
    //     alert("Login successful");
    //     // Redirect to a protected route or dashboard
    //     window.location.href = "/home";
    //   }
    // } catch (error) {
    //   console.error("Login failed", error);
    //   setError("Invalid credentials. Please try again.");
    // }

    try {
      const res = await apiService.post("/auth/login", {
        ridername: formData.username,
        password: formData.password,
      });

      setToken(res.data.token);
      setFirstName(res.data.firstName);

      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        {error && <span>{error}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
