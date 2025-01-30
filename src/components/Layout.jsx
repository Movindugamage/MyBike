import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children }) => {
<<<<<<< HEAD
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
=======
  const navigate = useNavigate();
  const location = useLocation();

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
              <span>Welcome, User</span>
            </div>
          </div>
>>>>>>> d29dfafcaef9799d3710a35cc7d0fa5266d220bd
        </div>
      </header>

      <main className="dashboard">
        <aside className="sidebar">
<<<<<<< HEAD
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/profile">My Wallet</Link>
            </li>
            <li>
              <Link to="/scan-bike">Scan Bike</Link>
            </li>
            <li>
              <Link to="/find-bicycle">Find a Bike</Link>
            </li>
            <li>
              <Link to="/feedback">Feedback</Link>
            </li>
            <li className="logout" onClick={handleLogout}>
              Logout
            </li>
          </ul>
=======
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
>>>>>>> d29dfafcaef9799d3710a35cc7d0fa5266d220bd
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
