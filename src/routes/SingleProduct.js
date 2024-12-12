import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { products } from "../data/antiqueitems";
import "../routes/SingleProduct.css";
import Header from "./Header";
import Footer from "./Footer";
function SingleProduct() {
  const params = queryString.parse(window.location.search);

  // return <h1>Product Details for Product ID: {params.id}</h1>;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    filteredItems();
    console.log(product);
    //setProduct(products.filter((product) => product.id == params.id));
  }, []);

  const filteredItems = () => {
    const seleted = products.filter((product) => product.id === params.id);
    console.log(seleted);
  };

  return (
    <>
      <Header />
      {product && (
        <>
          <div>Product Id: {product.id}</div>
          <div>Product Name: {product.name}</div>
          <div>Product description: {product.description}</div>
          <div>Product price: {product.price}</div>
          <div>Product image: {product.image}</div>
        </>
      )}
      <Footer />
    </>
  );
}

export default SingleProduct;
