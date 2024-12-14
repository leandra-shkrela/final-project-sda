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
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Antique Al</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ paddingTop: "20px" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/contactus" style={{ paddingTop: "20px" }}>
              Contact Us
            </Nav.Link>
            <Nav.Link href="#">
              {" "}
              <button
                className="btn shopping-cart-btn"
                onClick={() => setCartVisible(true)}
              >
                <GiShoppingBag className="shoppingbag" size={35} />
                {productsInCart.length > 0 && (
                  <span className="product-count">{productsInCart.length}</span>
                )}
              </button>
            </Nav.Link>
            {!token ? (
              <Nav.Link href="/login" style={{ paddingTop: "20px" }}>
                Login
              </Nav.Link>
            ) : (
              <NavDropdown title="Profile" id="basic-nav-dropdown">
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
