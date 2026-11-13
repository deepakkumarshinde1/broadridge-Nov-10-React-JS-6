import Input from "./components/Input";
import Products from "./components/Products";
import UserList from "./components/UserList";
import { ProductContextProvider } from "./context/product.context";

function App() {
  return (
    <>
      <main className="container-fluid">
        <section className="row">
          <section className="col-12">
            <Input />
            <UserList />
          </section>
        </section>

        <ProductContextProvider>
          <Products />
        </ProductContextProvider>
      </main>
    </>
  );
}

export default App;
