import React from "react";

const FilterBar = ({ filter, setFilter, city, setCity }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* Input for text filtering */}
      <input
        type="text"
        placeholder="Filter by keyword..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ddd",
          marginBottom: "10px",
        }}
      />
      {/* Dropdown for city filtering */}
      <select
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
      >
        <option value="">All Cities</option>
        <option value="Istanbul">Istanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="Izmir">Izmir</option>
        <option value="Utrecht">Utrecht</option>
      </select>
    </div>
  );
};

export default FilterBar;
