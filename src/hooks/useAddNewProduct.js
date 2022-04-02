import { useState } from "react";

import { ref, push, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";

import { db, storage } from "libs/firebase";

function useAddNewProduct() {
  const [loading, setLoading] = useState(false);

  async function productLoader(productData, imageFile) {
    setLoading(true);

    // Get the unique key to add to the product data
    const newRef = await push(ref(db, "products"));

    // Gets a storage ref for the product image
    const imageRef = await storageRef(storage, `images/products/${newRef.key}`);

    // Uploads the product image to the storage
    const uploadRef = await uploadBytes(imageRef, imageFile);
    const imageUrl = await getDownloadURL(imageRef);

    // Wait until all the promises are resolved
    let results = Promise.all([newRef, imageRef, uploadRef, imageUrl]);

    // Now write the data to firebase real time database
    results.then(() => {
      set(newRef, {
        ...productData,
        imageUrl,
        imageStoragePath: uploadRef.metadata.fullPath,
        uid: newRef.key
      }).then(() => {
        setLoading(false);
      });
    });
  }

  return [loading, productLoader];
}

export { useAddNewProduct };
