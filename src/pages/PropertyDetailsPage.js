import React from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";

const PropertyDetailsPage = () => {
  const { id } = useParams(); // Get property ID from URL
  const property = properties.find((p) => p.id === parseInt(id)); // Find property by ID

  if (!property) {
    return <p>Property not found.</p>; // If property doesn't exist, show error
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{property.title}</h2>
      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <p>Location: {property.location}</p>
      <p>Price: ${property.price} / month</p>
      <p>Rooms: {property.rooms}</p>
      <p>Security: {property.security}</p>
      <p>Smoking Policy: {property.smoking}</p>
      <p
        style={{
          color: property.available ? "blue" : "red", // Blue for available, red for non-available
          fontWeight: "bold",
        }}
      >
        Availability: {property.available ? "Available" : "Not Available"}
      </p>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginTop: "10px",
          color: "white",
          backgroundColor: "var(--primary-color)",
          padding: "10px",
          textDecoration: "none",
          borderRadius: "5px",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PropertyDetailsPage;
