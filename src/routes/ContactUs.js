import React, { useState } from "react";
import "./ContactUs.css";
import Header from "./Header";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  return (
    <>
      <Header></Header>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
import './ContactUs.css';

<footer>
    <div class="container">
        <p>&copy; 2024 Udemy. Të gjitha të drejtat e rezervuara.</p>
        <ul>
            <li><a href="/about">Rreth Nesh</a></li>
            <li><a href="/privacy">Politika e Privatësisë</a></li>
            <li><a href="/contact">Na Kontaktoni</a></li>
        </ul>
        <p>Na ndiqni në:</p>
        <ul class="social-links">
            <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
        </ul>
    </div>
</footer>
