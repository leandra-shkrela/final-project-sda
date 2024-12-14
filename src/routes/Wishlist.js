import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style/main.css";

function Wishlist() {
  const [loaded, setLoaded] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoaded(true); // Update loading state after data is fetched
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoaded(true); // Ensure loading state is updated even if fetching fails
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <body>
        <div class="main-content">
          <h3>Your Wish list</h3>
          {productsInCart.length === 0 ? (
            <p>No items found</p> // Display message when no items are found
          ) : (
            productsInCart.map((product) => (
              <>
                <div>Product Name: {product.name}</div>
                <div>Product Price: {product.price}</div>
                <hr />
              </>
            ))
          )}
        </div>
        <Footer></Footer>
      </body>
    </>
  );
}

export default Wishlist;
