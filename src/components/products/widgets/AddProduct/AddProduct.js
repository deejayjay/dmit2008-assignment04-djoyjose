import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";
import { ProductEditor } from "components/products/ProductEditor";
import { AddProductStyles } from "./styles";
import PlaceHolderImage from "static/images/toys/toy-placeholder.png";

function AddProduct({ children, ...props }) {
  const formatter = useNumberFormat();

  // Create states for all inputs
  const [productImage, setProductImage] = useState(PlaceHolderImage);
  const [productName, setProductName] = useState("Product Name");
  const [productPrice, setProductPrice] = useState("0.00");
  const [productDescription, setProductDescription] = useState("Product Description");

  // These handlers will be passed down to ProductDataEntryForm to change the state when inputs are changed
  function handleProductName(name) {
    setProductName(name);
  }

  function handleProductPrice(price) {
    setProductPrice(formatter(price));
  }

  function handleProductDescription(desc) {
    setProductDescription(desc);
  }

  return (
    <AddProductStyles {...props}>
      <ProductEditor
        productImage={productImage}
        productName={productName}
        productPrice={productPrice}
        productDescription={productDescription}
        handleProductName={handleProductName}
        handleProductPrice={handleProductPrice}
        handleProductDescription={handleProductDescription}
        setProductImage={setProductImage}
      />
    </AddProductStyles>
  );
}

export default AddProduct;
