import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Layout.css";

const Layout = ({ children }) => {
    const handleLogout = () => {
        // Placeholder for logout logic
        console.log("User logged out");
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
                        <li><Link to="/my-wallet">My Wallet</Link></li>
                        <li><Link to="/scan-bike">Scan Bike</Link></li>
                        <li><Link to="/find-bicycle">Find a Bike</Link></li>
                        <li><Link to="/usage-history">Usage History</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
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
