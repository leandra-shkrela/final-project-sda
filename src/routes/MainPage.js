import React, { useState, useEffect } from "react";
import "../style/main.css";
import { categories } from "../data/antiquecategories";
import Header from "../routes/Header";
import Footer from "../routes/Footer";
import { Link } from "react-router-dom";
import Shopping from "./Shopping";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../components/CarouselImage";

function MainPage() {
  // const [cartsVisibilty, setCartVisible] = useState(false);
  // const [productsInCart, setProducts] = useState(
  //   JSON.parse(localStorage.getItem("shopping-cart")) || []
  // );
  // useEffect(() => {
  //   localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  // }, [productsInCart]);
  // const addProductToCart = (product) => {
  //   const newProduct = {
  //     ...product,
  //     count: 1,
  //   };
  //   setProducts([...productsInCart, newProduct]);
  // };
  return (
    <>
      <body>
        <div class="main-content">
          <Carousel>
            {categories.length === 0 ? (
              <p>No items found</p> // Display message when no items are found
            ) : (
              categories.map((category) => (
                <Carousel.Item>
                  <ExampleCarouselImage
                    className="carousel"
                    image={category.image}
                    text="First slide"
                  />
                  <Carousel.Caption>
                    <h3>{category.name}</h3>
                    <p>
                      <Link
                        className="btn"
                        style={{ color: "white" }}
                        to={`/shopping?categoryId=${category.id}&name=${category.name}`}
                      >
                        More
                      </Link>
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            )}
          </Carousel>
          <div>
            <h3 className="center">Our Story</h3>
            <h4 className="center">Established 1912</h4>
            <br />

            <p className="center">
              Founded in 1912, M.S. Rau stands as one of North America’s most
              respected fine art, antiques and jewelry galleries. Led by
              third-generation owner, Bill Rau, the gallery operates globally,
              discovering items around the world and placing them in
              international collections, both public and private alike. The
              40,000-square-foot showroom features carefully selected works from
              a diverse array of artists and makers who have defined the fine
              and decorative arts over the centuries. These include Claude
              Monet, John Singer Sargent, Rembrandt van Rijn, Tiffany & Co.,
              Paul Revere, Thomas Chippendale, Louis Comfort Tiffany, René
              Lalique and many others.
            </p>
            <br />

            <p className="center">
              The jewelry boutique at M.S. Rau continues in the gallery’s
              century-long tradition of offering only the best in its category.
              Rau’s expert gemologists have curated a singular selection of high
              jewelry and one-of-a-kind gemstones that includes both designer
              pieces and sizeable stones from important mines.
            </p>
            <br />
            <p className="center">
              Over the last decade, M.S. Rau has also produced museum-quality
              exhibitions annually, both in its New Orleans gallery and at a
              selection of prestigious art and antique fairs around the country.
              These initiatives expand Rau’s extensive network of contacts
              around the globe, which allows the gallery’s acquisition experts
              to source the most desirable works available. Furthermore, the
              gallery’s team of over 50 specialists represent the very best in
              their respective fields, offering clients the foremost logistical
              and financial services throughout the acquisitions process. Rau’s
              team of expert researchers also ensures that each piece is
              thoroughly vetted for quality and authenticity.
            </p>
          </div>
          <p></p>
        </div>

        <Footer></Footer>
      </body>
    </>
  );
}

export default MainPage;
