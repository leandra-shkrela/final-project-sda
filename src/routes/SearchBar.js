import React from "react";
const SearchBar = ({ setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search for a product..."
        onChange={handleInputChange}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};
export default SearchBar;
