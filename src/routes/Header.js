import React, { useState, useEffect } from "react";
import "../style/main.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GiShoppingBag } from "react-icons/gi";

function Header({ productsInCart, setCartVisible }) {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );

  const LogOut = () => {
    localStorage.removeItem("token");

    window.location.reload();
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-nav">
      <Container>
        <Navbar.Brand href="/">Antique Al</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="/contactus" className="nav-link">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#" className="nav-link">
              {" "}
              <button
                className="btn shopping-cart-btn"
                onClick={() => setCartVisible(true)}
              >
                <GiShoppingBag className="nav-link" size={40} />
                {productsInCart.length > 0 && (
                  <span className="product-count">{productsInCart.length}</span>
                )}
              </button>
            </Nav.Link>
            {!token ? (
              <Nav.Link href="/login" className="nav-link login-link">
                Login
              </Nav.Link>
            ) : (
              <NavDropdown
                title="Profile"
                className="nav-link login-link"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/wishlist">Wishlist</NavDropdown.Item>
                <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">
                  <button className="btn" onClick={() => LogOut()}>
                    LogOut
                  </button>
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
