import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Feedback.css";
import axios from "axios"; // Ensure axios is imported
import StarFill from "../assets/StarFill.png";
import StarHole from "../assets/StarHole.png";

const Feedback = () => {
  // State variables for each required field
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!feedback) {
      alert("Feedback cannot be empty.");
      return;
    }

    // Create the feedback object
    const feedbackData = {
      feedback,
      rating,
      date: date || new Date().toISOString(), // Use the current date if not provided
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/feedback/addFeedback",
        feedbackData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Feedback submitted successfully!");
        // Clear form fields after submission
        setFeedback("");
        setRating(1);
        setDate("");
      }
    } catch (error) {
      if (error.response) {
        alert(
          `An error occurred: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        alert("No response received from the server.");
      } else {
        alert(`An error occurred: ${error.message}`);
      }
    }
  };

  // Handle clearing the form
  const handleClear = () => {
    setFeedback("");
    setRating(1);
    setDate("");
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <Layout>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          className="feedback-textarea"
          placeholder="Enter your feedback here"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <div className="star-rating">
          {[...Array(5)].map((star, index) => (
            <img
              key={index}
              src={index < rating ? StarFill : StarHole}
              alt={`Star ${index + 1}`}
              className="star"
              onClick={() => handleStarClick(index)}
            />
          ))}
        </div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </Layout>
  );
};

export default Feedback;
