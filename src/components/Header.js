import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logo from "../assets/image.png"; // Adjust the path to your logo

const Header = () => {
  return (
    <header
      style={{
        background: "white", // White background for the header
        padding: "1rem",
        textAlign: "center",
        color: "var(--secondary-color)",
      }}
    >
      {/* Wrap the logo with Link */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="DodoLabs Logo"
          style={{
            height: "60px",
            objectFit: "contain",
            verticalAlign: "middle",
          }}
        />
      </Link>
    </header>
  );
};

export default Header;
