import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./routes/MainPage";
import SingleProduct from "./routes/SingleProduct";
import AllProducts from "./routes/AllProducts";
import Checkout from "./routes/Checkout";
import ContactUs from "./routes/ContactUs";
import Shopping from "./routes/Shopping";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} /> {/*fq 1*/}
        <Route path="/product" element={<SingleProduct />} />{" "}
        {/*te gjitha produktet */}
        <Route path="/product/:id" element={<SingleProduct />} />
        {/* single products */}
        <Route path="/shopping" element={<Shopping />} /> {/* Shopping Cart */}
        <Route path="/shopping/:categoryId" element={<Shopping />} />{" "}
        {/* Shopping Cart */}
        <Route path="/checkout" element={<Checkout />} /> {/* Checkout */}
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
