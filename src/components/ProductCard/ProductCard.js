import React from "react";
import { FaIcon } from "ui/FaIcon";

import { ProductCardStyles, ProductCardDescription, ProductCardImage, ProductCardName, ProductCardPrice } from "./styles";

function ProductCard({ children, product, ...props }) {
  return (
    <ProductCardStyles {...props}>
      <FaIcon className="fas fa-edit" size="1.25rem" />
      <FaIcon className="fas fa-trash" size="1.25rem" margin="0 0 0 2rem" color="#c13f3f;" />
      <ProductCardPrice>${product.productPrice}</ProductCardPrice>
      <ProductCardImage>
        <img src={product.imageUrl} alt={product.productName} />
      </ProductCardImage>
      <ProductCardName>{product.productName}</ProductCardName>
      <ProductCardDescription>{product.productDescription}</ProductCardDescription>
    </ProductCardStyles>
  );
}

export default ProductCard;
