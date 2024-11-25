import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--primary-color)",
        color: "var(--secondary-color)",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} DodoLabs. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
