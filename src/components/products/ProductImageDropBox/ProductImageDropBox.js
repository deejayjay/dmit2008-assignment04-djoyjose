import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ProductImageDropBoxStyles } from "./styles";

function ProductImageDropBox({ setProductImage, ...props }) {
  const onDrop = useCallback((acceptedFiles) => {
    const path = acceptedFiles[0];

    setProductImage(URL.createObjectURL(path));
  }, []);
  const {
    getRootProps,
    getInputProps,

    isFocused,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: "image/jpeg,image/jpg,image/png,image/webp", maxFiles: 1, onDrop });

  return (
    <ProductImageDropBoxStyles {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      <p>Product Image Upload</p>
    </ProductImageDropBoxStyles>
  );
}

export default ProductImageDropBox;
