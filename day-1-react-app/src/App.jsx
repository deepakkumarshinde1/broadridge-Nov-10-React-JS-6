import CheckBalance from "./components/CheckBalance";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  let books = "React JS"
  return (
    <>
      <Header />
      <CheckBalance />
      <Footer />
    </>
  );
}

export default App;
