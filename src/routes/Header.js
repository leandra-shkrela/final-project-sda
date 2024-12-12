import React from "react";
import { Link } from "react-router-dom";
import "../style/main.css";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">MainPage</Link>
      <Link to="shopping">ShoppingCart</Link>
      <Link to="product/:id">SingleProduct</Link>
      <Link to="checkout">Checkout</Link>
      <Link to="contactus">ContactUs</Link>
    </div>
  );
}

export default Header;
