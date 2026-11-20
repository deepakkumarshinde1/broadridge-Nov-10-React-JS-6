import { useFetchDataByGet } from "./hooks/products.hooks";

function Products() {
  let { data, dataCount, error, isLoading, setUrl } = useFetchDataByGet();

  if (isLoading) return <p>Loading ....</p>;
  return (
    <>
      <div>Products {dataCount}</div>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        GET POST DATA
      </button>
    </>
  );
}

export default Products;
