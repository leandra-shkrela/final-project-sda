import React from "react";
import { Link } from "react-router-dom";
import "../style/main.css";

function Header() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/contactus">Contact Us</Link>
    </div>
  );
}

export default Header;
