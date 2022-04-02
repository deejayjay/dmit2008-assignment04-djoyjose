import React from "react";

import { ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice } from "./styles";
import { Label, Input } from "ui/forms";
import { ProductImageDropBox } from "../ProductImageDropBox";
import { TextArea } from "ui/forms/textarea";
import { SubmitButton } from "ui/buttons";

function ProductDataEntryForm({ children, setProductImage, handleProductName, handleProductPrice, handleProductDescription, handleSubmit, ...props }) {
  return (
    <ProductDataEntryFormStyles {...props} onSubmit={handleSubmit}>
      <ProductImage>
        <Label>Product Image</Label>
        <ProductImageDropBox setProductImage={setProductImage} />
      </ProductImage>

      <fieldset>
        <ProductName>
          <Label>Product Name</Label>
          <Input maxLength={30} onChange={(e) => handleProductName(e.target.value.trim())} />
        </ProductName>

        <ProductPrice>
          <Label>Product Price</Label>
          <Input maxLength={6} onChange={(e) => handleProductPrice(e.target.value.trim())} />
        </ProductPrice>
      </fieldset>

      <ProductDescription>
        <Label>Product Description</Label>
        <TextArea rows={6} maxLength={200} onChange={(e) => handleProductDescription(e.target.value.trim())} />
      </ProductDescription>

      <div>
        <SubmitButton width="100%" bgcolor="#64a64e" padding="0.75rem 0" margin="1.125rem 0 0 0" type="submit">
          Add Product
        </SubmitButton>
      </div>
    </ProductDataEntryFormStyles>
  );
}

export default ProductDataEntryForm;
