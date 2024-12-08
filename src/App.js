import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./routes/MainPage";
import SingleProduct from "./routes/SingleProduct";
import ShoppingCart from "./routes/ShoppingCart";
import AllProducts from "./routes/AllProducts";
import Checkout from "./routes/Checkout";
import SearchBar from "./routes/SearchBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/*fq 1*/}
        <Route path="/products" element={<AllProducts />} />{" "}
        {/*te gjitha produktet */}
        <Route path="/product/:id" element={<SingleProduct />} />
        {/* single products */}
        <Route path="/cart" element={<ShoppingCart />} /> {/* Shopping Cart */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout */}
        <Route path="/searchbar" element={<SearchBar />} />
      </Routes>
    </Router>
  );
}

export default App;
