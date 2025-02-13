import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./routes/MainPage";
import SingleProduct from "./routes/SingleProduct";
import AllProducts from "./routes/AllProducts";
import Checkout from "./routes/Checkout";
import ContactUs from "./routes/ContactUs";
import Shopping from "./routes/Shopping";
import Login from "./routes/Login";
import ShoppingCart from "./routes/ShoppingCart";
import Header from "./routes/Header";
import Order from "./routes/Order";
import Wishlist from "./routes/Wishlist";
import WishlistCard from "./routes/WishlistCard";

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("token")) || null
  );
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const [productsinWishlist, setproductsinWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist-cart")) || []
  );

  const [cartsVisibilty, setCartVisible] = useState(false);

  const [wishlistvisible, setwishlistvisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
    localStorage.setItem("wishlist-cart", JSON.stringify(productsinWishlist));
  }, [productsInCart, productsinWishlist]);

  const addProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };
  const onQuantityChange = (productId, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productId);
      if (productsIndex !== -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex !== -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };

  const addwishlistproducts = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setproductsinWishlist([...productsinWishlist, newProduct]);
  };
  return (
    <>
      <Header
        productsInCartLea={productsInCart}
        setCartVisible={setCartVisible}
        setwishlistvisible={setwishlistvisible}
        productsinWishlist={productsinWishlist}
      ></Header>

      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <WishlistCard
        visibilty={wishlistvisible}
        products={productsinWishlist}
        onClose={() => setwishlistvisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />

      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/product" element={<SingleProduct />} />
          <Route
            path="/shopping"
            element={
              <Shopping
                addProductToCart={addProductToCart}
                addwishlistproducts={addwishlistproducts}
              />
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Order />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
