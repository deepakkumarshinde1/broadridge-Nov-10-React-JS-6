import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductList,
  getSingleProduct,
} from "./redux/services/products.service";

function Products() {
  let dispatch = useDispatch();
  let { products, isLoading } = useSelector((state) => state.productReducer);
  useEffect(() => {
    //dispatch(getProductList());
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div>Products {products.length}</div>
      <button onClick={() => dispatch(getProductList())}>Products</button>
      <button onClick={() => dispatch(getSingleProduct(2))}>
        Get 1st Product
      </button>
    </>
  );
}

export default Products;
