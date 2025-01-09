import React, { useState } from "react";
import Layout from "../components/Layout"; // Import Layout component

const Feedback = () => {
    const [feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Feedback submitted:", feedback);
    };

    const handleClear = () => {
        setFeedback("");
    };

    return (
        <Layout>
            <h1>Feedback Page</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Enter your feedback here..."
                    rows="5"
                    required
                />
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleClear}>Clear</button>
                </div>
            </form>
        </Layout>
    );
};

export default Feedback;
