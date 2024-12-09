import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <Link to="/">MainPage</Link>
      <Link to="searchbar">SearchBar</Link>
      <Link to="cart">ShoppingCart</Link>
      <Link to="products">AllProducts</Link>
      <Link to="product/:id">SingleProduct</Link>
      <Link to="checkout">Checkout</Link>
      <Link to="contactus">ContactUs</Link>

    </ul>
  );
}

export default MainPage;
