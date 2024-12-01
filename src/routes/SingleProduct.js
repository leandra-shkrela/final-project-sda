import React from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();

  return <h1>Product Details for Product ID: {id}</h1>;
}

export default SingleProduct;
