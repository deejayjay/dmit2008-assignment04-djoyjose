import React from "react";

import { ProductCardAgeGroup, ProductCardStyles, ProductCardDescription, ProductCardImage, ProductCardName, ProductCardPrice } from "./styles";
import placeholderImage from "static/images/toys/toy-1.webp";

function ProductCard({ children, ...props }) {
  return (
    <ProductCardStyles {...props}>
      <ProductCardPrice>$9.99</ProductCardPrice>
      <ProductCardImage>
        <img src={placeholderImage} alt="Toy placeholder" />
      </ProductCardImage>
      <ProductCardName>Toy Name</ProductCardName>
      <ProductCardAgeGroup>5 - 7 year olds</ProductCardAgeGroup>
      <ProductCardDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et libero faucibus, pharetra quam sit amet, molestie tortor. Maecenas eu euismod ipsum.
      </ProductCardDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
