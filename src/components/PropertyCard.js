import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={property.image}
        alt={property.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <h3 style={{ marginTop: "1rem" }}>{property.title}</h3>
      <p>Location: {property.location}</p>
      <p>Price: ${property.price} / month</p>
      <p>Rooms: {property.rooms}</p>
      <p
        style={{
          color: property.available ? "blue" : "red", // Blue for available, red for non-available
          fontWeight: "bold",
        }}
      >
        {property.available ? "Available" : "Not Available"}
      </p>
      <Link
        to={`/property/${property.id}`}
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
        View Details
      </Link>
    </div>
  );
};

export default PropertyCard;
