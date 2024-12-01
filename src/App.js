import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage"
import SingleProduct from "./pages/SingleProduct"
import ShoppingCart from "./pages/ShoppingCart"
import AllProducts from "./pages/AllProducts"
import Checkout from "./pages/Checkout"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />                {/*fq 1*/}
        <Route path="/products" element={<AllProducts />} />     {/*te gjitha produktet */}
        <Route path="/product/:id" element={<SingleProduct />} />{/* single products */}
        <Route path="/cart" element={<ShoppingCart />} />        {/* Shopping Cart */}
        <Route path="/checkout" element={<Checkout />} />        {/* Checkout */}
      </Routes>
    </Router>
  );
}

export default App;
