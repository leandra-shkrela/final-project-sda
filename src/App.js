import React, { useState, useEffect } from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "./routes/ShoppingCart";
import { products } from "./data/antiqueitems";

function App() {
  const [cartsVisibilty, setCartVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
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
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };
  const filteredItems = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <div className="navbar">
        <p className="logo">Home</p>
        <p className="logo">Antiques</p>
        <p className="logo" to="/signup">
          Contact Us
        </p>
        <button
          className="btn shopping-cart-btn"
          onClick={() => setCartVisible(true)}
        >
          <GiShoppingBag size={24} />
          {productsInCart.length > 0 && (
            <span className="product-count">{productsInCart.length}</span>
          )}
        </button>
      </div>
      <main>
        <p className="title">
          Search
          <input
            type="text"
            placeholder="Search for items"
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              marginBottom: "10px",
              marginLeft: "10px",
              padding: "5px",
              width: "200px",
            }}
          />
        </p>
        <h2 className="title">Products</h2>
        <div className="products">
          {filteredItems.length === 0 ? (
            <p>No items found</p> // Display message when no items are found
          ) : (
            filteredItems.map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.image}
                />
                <h4 className="product-name">{product.name}</h4>
                <p>{product.description}</p>
                <span className="product-price">{product.price}$</span>
                <div className="buttons">
                  <button className="btn">Detail</button>
                  <button
                    className="btn"
                    onClick={() => addProductToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
