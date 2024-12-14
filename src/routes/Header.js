import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/main.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Antique Al</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/checkout">Checkout</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            {!token ? (
              <Nav.Link href="/login">Login</Nav.Link>
            ) : (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">LogOut</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <div className="navbar">
    //   <Link to="/">Home</Link>
    //   <Link to="/checkout">Checkout</Link>
    //   <Link to="/contactus">Contact Us</Link>
    //   <Link to="/login">Login</Link>
    // </div>
  );
}

export default Header;
