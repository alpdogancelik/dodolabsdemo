import React, { useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";

const HomePage = () => {
  const [filter, setFilter] = useState(""); // For keyword filtering
  const [city, setCity] = useState(""); // For city filtering

  // Filter properties based on both text and city filters
  const filteredProperties = properties.filter((property) => {
    const matchesKeyword = property.title
      .toLowerCase()
      .includes(filter.toLowerCase());
    const matchesCity = city === "" || property.location === city;
    return matchesKeyword && matchesCity;
  });

  return (
    <div style={{ padding: "1rem" }}>
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        city={city}
        setCity={setCity}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
