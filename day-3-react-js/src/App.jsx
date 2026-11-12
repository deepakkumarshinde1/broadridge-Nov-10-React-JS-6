import { useState } from "react";
import TransactionMang from "./components/TransactionMang";

function App() {
  let [todoList] = useState([
    "React-Assignment-1",
    "React-Assignment-3",
    "React-Assignment-2",
    "React-Assignment-4",
  ]);
  return (
    <>
      <main className="container-fluid">
        <section className="row m-5">
          <TransactionMang />

          {/* <ul className="list-group">
            {todoList.map((value, index) => {
              return (
                <li key={index} className="list-group-item">
                  {value}
                </li>
              );
            })}
          </ul> */}
        </section>
      </main>
    </>
  );
}

export default App;

// loop => [] => map()
