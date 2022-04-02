import React, { useState } from "react";

import { useNumberFormat } from "hooks/useNumberFormat";
import { useAddNewProduct } from "hooks/useAddNewProduct";
import { ProductEditor } from "components/products/ProductEditor";
import { EditorFeedBack } from "components/products/EditorFeedBack";
import { AddProductStyles } from "./styles";
import placeHolderImage from "static/images/toys/toy-placeholder.png";

const defaults = {
  name: "Product Name",
  price: "0.00",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et libero faucibus, pharetra quam sit amet, molestie tortor."
};

function AddProduct({ children, ...props }) {
  const formatter = useNumberFormat();

  // Create states for all inputs
  const [productImage, setProductImage] = useState({ previewImage: placeHolderImage, file: null });
  const [productName, setProductName] = useState(defaults.name);
  const [productPrice, setProductPrice] = useState(defaults.price);
  const [productDescription, setProductDescription] = useState(defaults.description);
  const [isWriting, setIsWriting] = useState(false);
  const [loading, productLoader] = useAddNewProduct();

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

  // This handles the submit event of ProductDataEntryForm
  function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      productName,
      productPrice,
      productDescription
    };

    setIsWriting(true);
    productLoader(productData, productImage.file);

    // Load the form fields with default values
    setProductName(defaults.name);
    setProductPrice(defaults.price);
    setProductDescription(defaults.description);
    setProductImage({ previewImage: placeHolderImage, file: null });
  }

  if (isWriting) {
    return <EditorFeedBack uploadStatus={loading} writeCompleted={setIsWriting} />;
  } else {
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
          handleSubmit={handleSubmit}
        />
      </AddProductStyles>
    );
  }
}

export default AddProduct;
