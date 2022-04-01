import React from "react";

import { ProductAgeGroup, ProductCardStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from "./styles";
import placeholderImage from "static/images/toys/toy-1.webp";

function ProductCard({ children, ...props }) {
  return (
    <ProductCardStyles {...props}>
      <ProductPrice>$9.99</ProductPrice>
      <ProductImage>
        <img src={placeholderImage} alt="Toy placeholder" />
      </ProductImage>
      <ProductName>Toy Name</ProductName>
      <ProductAgeGroup>5 - 7 year olds</ProductAgeGroup>
      <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et libero faucibus, pharetra quam sit amet, molestie tortor. Maecenas eu euismod ipsum.</ProductDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
