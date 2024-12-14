import React, { useState, useEffect } from "react";
import "../style/main.css";
import { categories } from "../data/antiquecategories";
import Header from "../routes/Header";
import Footer from "../routes/Footer";
import { Link } from "react-router-dom";
import Shopping from "./Shopping";



const HowToOrder = () => {
  return (
    <section className="how-to-order">
      <h2>How to Order</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <h1> 1 </h1>
          </div>
          <h3>Choose Your Product</h3>
          <p>
            Browse our collection and pick the item you love. You can filter by
            category and style.
          </p>
        </div>
        <div className="step">
          <div className="step-icon">
            <h1> 2 </h1>
          </div>
          <h3>Make a Payment</h3>
          <p>
            Proceed to checkout and choose your preferred payment method, from
            credit card to PayPal.
          </p>
        </div>
        <div className="step">
          <div className="step-icon">
            <h1> 3 </h1>
          </div>
          <h3>Enjoy Fast Delivery</h3>
          <p>
            Once your order is processed, we’ll ship your items to you,
            delivered with care and speed.
          </p>
        </div>
      </div>
    </section>
  );
};

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
        <HowToOrder></HowToOrder>
        <h2 className="title">Categories</h2>
        <div className="products">
          {categories.length === 0 ? (
            <p>No items found</p> // Display message when no items are found
          ) : (
            categories.map((category) => (
              <div className="product" key={category.id}>
                <img
                  className="product-image"
                  src={category.image}
                  alt={category.image}
                />
                <h4 className="product-name">{category.name}</h4>
                <div className="buttons">
                  <Link
                    className="btn"
                    to={`/shopping?categoryId=${category.id}&name=${category.name}`}
                  >
                    More
                  </Link>
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
