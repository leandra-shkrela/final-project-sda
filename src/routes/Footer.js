// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date(122).getFullYear();
  return (
    <footer>
      <div className="container">
        <p>&copy; 2024 Udemy. Të gjitha të drejtat e rezervuara.</p>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <p>Na ndiqni në:</p>
        <ul className="social-links">
          <li>
            <a href="https://facebook.com" target="_blank">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
        <p>&copy; 2024 SDA. All rights reserved..</p>
      </div>
    </footer>
  );
}
export default Footer;
