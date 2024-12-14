import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./routes/MainPage";
import SingleProduct from "./routes/SingleProduct";
import AllProducts from "./routes/AllProducts";
import Checkout from "./routes/Checkout";
import ContactUs from "./routes/ContactUs";
import Shopping from "./routes/Shopping";
import Login from "./routes/Login";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/product" element={<SingleProduct />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/shopping/:categoryId" element={<Shopping />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Login />} />
        <Route path="/wishlist" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
