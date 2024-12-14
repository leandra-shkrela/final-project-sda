import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style/main.css";

function Checkout() {
  const [loaded, setLoaded] = useState(false);
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
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
      <Header></Header>
      <body>
        <div class="main-content">
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
          <div>
            Total:{" "}
            {Math.round(
              productsInCart.reduce((sum, product) => sum + product.price, 0) *
                100
            ) / 100}
          </div>
        </div>

        <Footer></Footer>
      </body>
    </>
  );
}

export default Checkout;
