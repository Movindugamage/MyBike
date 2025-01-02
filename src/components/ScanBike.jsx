import React, { useState } from "react";
import './ScanBike.css';


const ScanBike = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false); // Toggle QR scanner
  const [qrData, setQrData] = useState(""); // Data from QR scanner
  const [manualCode, setManualCode] = useState(""); // Text input code
  const [error, setError] = useState(""); // Error message

  // Handle QR scan
  const handleScan = (data) => {
    if (data) {
      setQrData(data);
      setIsCameraOpen(false); // Close camera after successful scan
      console.log("Scanned QR Code Data:", data);
    }
  };

  const handleError = (err) => {
    console.error("QR Scan Error:", err);
    setError("Failed to scan QR code. Try again.");
  };

  // Handle submit button click
  const handleSubmit = async () => {
    const dataToSend = qrData || manualCode; // Send QR data or manual code

    if (!dataToSend) {
      setError("Please scan a QR code or enter the 4-digit code.");
      return;
    }

    try {
      const response = await fetch("https://your-backend-endpoint.com/scan-bike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: dataToSend }),
      });

      const result = await response.json();
      console.log("Backend Response:", result);
      alert("Data sent successfully!");
    } catch (err) {
      console.error("Error sending data to backend:", err);
      setError("Failed to send data to backend. Try again.");
    }
  };

  return (
    <div className="scan-container">
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Scan Bike</h1>

      {/* Button to open QR scanner */}
      <button
        onClick={() => setIsCameraOpen(true)}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Open Camera to Scan QR Code
      </button>

      {/* QR Scanner */}
      {isCameraOpen && (
        <div style={{ margin: "20px auto", maxWidth: "300px" }}>
          <QrReader
            delay={300}
            onResult={(result, error) => {
              if (!!result) handleScan(result.text);
              if (!!error) console.log(error);
            }}
            style={{ width: "100%" }}
          />
        </div>
      )}

      {/* Show scanned QR code data */}
      {qrData && <p>Scanned QR Code: {qrData}</p>}

      {/* Text input for manual 4-digit code */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Enter 4-digit code"
          value={manualCode}
          maxLength={4}
          onChange={(e) => setManualCode(e.target.value)}
          style={{ padding: "10px", marginRight: "10px", textAlign: "center" }}
        />
        <button onClick={handleSubmit} style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </div>

      {/* Display error message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
    </div>
  );
};

export default ScanBike;
