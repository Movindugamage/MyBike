import React, { useState } from "react";
import Layout from "../components/Layout";
//import "../styles/Feedback.css";
import axios from "axios"; // Ensure axios is imported

const Feedback = () => {
  // State variables for each required field

  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
      // } catch (error) {
      //   console.error("Error submitting feedback:", error);
      //   alert("An error occurred while submitting feedback.");
      // }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
        alert(
          `An error occurred: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
        alert("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
        alert(`An error occurred: ${error.message}`);
      }
      console.error("Error config:", error.config);
    }
  };

  // Handle clearing the form
  const handleClear = () => {
    setFeedback("");
    setRating(1);
    setDate("");
  };

  return (
    <Layout>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <textarea
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
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
