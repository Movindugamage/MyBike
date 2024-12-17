import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic (validate fields, store data)
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="register-container">
      <img src="/logo.jpeg" alt="My Bike Logo" className="logo" />
      <h1>Welcome New User!</h1>
      <br />

      <form onSubmit={handleRegister}>
        <label>First Name:</label>
        <input type="text" required />
        <br />
        <label>Last Name:</label>
        <input type="text" required />
        <br />
        <label>Email:</label>
        <input type="email" required />
        <br />
        <label>Mobile Number:</label>
        <input type="tel" required />
        <br />
        <label>NIC No:</label>
        <input type="text" required />
        <br />
        <label>Upload NIC Front:</label>
        <input type="file" accept=".png, .jpeg" required />
        <label>Upload NIC Back:</label>
        <input type="file" accept=".png, .jpeg" required />
        <br />
        <br />
        <br />
        <label>Username:</label>
        <input type="text" required />
        <br />
        <label>Password:</label>
        <input type="password" required />
        <br />
        <label>Re-enter Password:</label>
        <input type="password" required />
        <br />
        <br />
        <br />
      
      {/*  
        <label>Credit Card Details:</label>
        <input type="text" placeholder="XXXX-XXXX-XXXX-XXXX" required />
      */}
        <br />
        <br />
        <br />
        <button type="button" onClick={() => navigate("/")}>
          Back
        </button>
        <t />
        <button type="submit">Register</button>
        
      </form>
    </div>
  );
}

export default Registration;
