import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("antiqueitems.json")
      .then((Response) => Response.json())
      .then((json) => {
        setData(json.items);
      })
      .catch((error) => console.error("Error fetching data:", error)); // Add error handling
  }, []);

  const filteredItems = data.filter((item) => {
    item.name.toLowerCase().includes(searchTerm.toLowerCase());
  }); // Filter by search term

  // Handle search input change
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Search for items"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
      />

      {/* Conditional Rendering of Filtered Items */}
      {filteredItems.length === 0 ? (
        <p>No items found</p> // Display message when no items are found
      ) : (
        <div className="items-list">
          {filteredItems.map((item) => (
            <Card style={{ width: "18rem" }} key={item.id}>
              <Card.Img variant="top" src={item.image || "default-image.jpg"} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
