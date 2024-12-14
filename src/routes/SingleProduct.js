import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { products } from "../data/antiqueitems";
import "../routes/SingleProduct.css";
import Header from "./Header";
import Footer from "./Footer";

function SingleProduct() {
  const params = queryString.parse(window.location.search);

  const [product, setProduct] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming getData is an async function
        const data = await filteredItem();
        console.log(data);

        setProduct(data); // Store the fetched data in state
        console.log(product);

        setLoaded(true); // Update loading state after data is fetched
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoaded(true); // Ensure loading state is updated even if fetching fails
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const filteredItem = async () => {
    return products.find((product) => product.id == params.id);
  };

  return (
    <>
      <Header />
      <body>
        <div class="main-content">
          {!loaded ? (
            <p>Loading ....</p>
          ) : (
            <div class="row">
              <div className="col-md-5">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.image}
                />
              </div>
              <div className="col-md-7">
                <div>Product Id: {product.id}</div>
                <div>Product Name: {product.name}</div>
                <div>Product description: {product.description}</div>
                <div>Product price: {product.price}</div>
              </div>
            </div>
          )}
        </div>

        <Footer />
      </body>
    </>
  );
}

export default SingleProduct;
