import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Layout.css";
import { useAuthStore } from "../stores/authStore";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {firstName} = useAuthStore();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  const navigationItems = [
    { path: "/home", label: "Home" },
    { path: "/profile", label: "My Wallet" },
    { path: "/scan-bike", label: "Scan Bike" },
    { path: "/find-bicycle", label: "Find a Bike" },
    { path: "/feedback", label: "Feedback" },
  ];

  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="header-content">
          <h1>MyBike Share</h1>
          <div className="header-right">
            <div className="weather-info">
              <p>Weather: 22°C Sunny</p>
            </div>
            <div className="user-info">
              <span>Welcome {firstName}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard">
        <aside className="sidebar">
          <nav>
            <ul>
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </aside>

        <section className="content">{children}</section>
      </main>

      <footer className="footer">
        <p>© 2025 MyBike Bicycle Sharing System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
