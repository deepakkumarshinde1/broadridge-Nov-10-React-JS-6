import axios from "axios";
import { createContext, useContext, useState } from "react";

// create context
const ProductContext = createContext({});

// create hook

export function useProductContext() {
  const context = useContext(ProductContext);
  return context;
}

// create wrapper component
export function ProductContextProvider(props) {
  let [products, setProduct] = useState([]);

  let getProductList = async () => {
    try {
      let url = "https://fakestoreapi.com/products";
      let response = await axios.get(url);
      // console.log(response);
      setProduct(response.data);
    } catch (error) {
      alert("Something went wrong, try again");
    }
  };

  let shared = { getProductList, products };
  return (
    <ProductContext.Provider value={shared}>
      {props.children}
    </ProductContext.Provider>
  );
}
