import React, { useState } from "react";
import "./TopUp.css";

const TopUp = () => {
  const [selectedAmount, setSelectedAmount] = useState(5); // Default selected amount

  const amounts = [5, 10, 25, 50];

  return (
    <div className="topup-container">
      <header className="topup-header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h1>Top Up</h1>
      </header>
      <section className="amount-section">
        {amounts.map((amount) => (
          <div
            key={amount}
            className={`amount-box ${selectedAmount === amount ? "selected" : ""}`}
            onClick={() => setSelectedAmount(amount)}
          >
            <p>${amount}</p>
            {selectedAmount === amount && <span className="checkmark">✓</span>}
          </div>
        ))}
      </section>
      <section className="payment-section">
        <h3>MasterCard</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
          alt="MasterCard"
          className="payment-logo"
        />
      </section>
      <button className="topup-button">Top Up</button>
    </div>
  );
};

export default TopUp;
