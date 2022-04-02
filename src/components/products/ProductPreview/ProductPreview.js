import React from "react";

import { ProductDescription, ProductImage, ProductName, ProductPreviewStyles, ProductPrice } from "./styles";

function ProductPreview({ children, productImage, productName, productPrice, productDescription, ...props }) {
  return (
    <ProductPreviewStyles {...props}>
      <ProductImage>
        <img src={productImage.previewImage} alt="Select a Toy" width="320" height="184" />
      </ProductImage>
      <ProductName>{productName}</ProductName>
      <ProductPrice>${productPrice}</ProductPrice>
      <ProductDescription>{productDescription}</ProductDescription>
    </ProductPreviewStyles>
  );
}

export default ProductPreview;
