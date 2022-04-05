import { useState, useEffect } from "react";

import { ref, get } from "firebase/database";

import { db } from "libs/firebase";

function useGetAllProducts(path) {
  const [productData, setProductData] = useState(null);

  // Load product data
  useEffect(() => {
    async function getProducts() {
      const productRef = ref(db, path);
      const productDataSnapShot = await get(productRef);

      // Convert the data (Object of objects to array of objects) before setting it to ProductData
      setProductData(Object.values(productDataSnapShot.val()));
    }

    getProducts();
  }, [path]);
  return productData;
}

export { useGetAllProducts };
