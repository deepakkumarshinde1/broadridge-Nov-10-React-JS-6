import { useEffect } from "react";
import { useProductContext } from "../context/product.context";

function Products() {
  let { getProductList, products } = useProductContext();
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <>
      <section className="row  px-4 justify-content-between">
        {products.length === 0 && <h3 className="text-center">Loading...</h3>}
        {products.map((product) => {
          return (
            <div className="card col-3 mb-3">
              <img
                src={product.image}
                className="card-img-top image-height"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">₹ {product.price} /-</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Products;
