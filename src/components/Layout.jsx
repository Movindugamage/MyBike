import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Layout.css";

const Layout = ({ children }) => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogout = () => {
        console.log("User logged out");
        navigate("/"); // Navigate to the home page
    };
    return (
        <div className="dashboard-container">
            <header className="header">
                <h1>Welcome, User</h1>
                <div className="weather-info">
                    <p>Weather: --</p>
                </div>
            </header>

            <main className="dashboard">
                <aside className="sidebar">
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/profile">My Wallet</Link></li>
                        <li><Link to="/scan-bike">Scan Bike</Link></li>
                        <li><Link to="/FindBicycle">Find a Bike</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li className="logout" onClick={handleLogout}>Logout</li>
                    </ul>
                </aside>

                <section className="content">
                    {children}
                </section>
            </main>

            <footer className="footer">
                <p>© 2025 MyBike Bicycle Sharing System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
