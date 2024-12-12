import React, { useState, useEffect } from "react";
import "../style/main.css";
import { categories } from "../data/antiquecategories";
import Header from "../routes/Header";
import Footer from "../routes/Footer";

function MainPage() {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   setCategories(categories);
  // }, [categories]);

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div>Welcome to our shop</div>

        <h2 className="title">Categories</h2>
        <div className="products">
          {categories.length === 0 ? (
            <p>No items found</p> // Display message when no items are found
          ) : (
            categories.map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.image}
                />
                <h4 className="product-name">{product.name}</h4>
                <div className="buttons">
                  <button className="btn">More</button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default MainPage;
