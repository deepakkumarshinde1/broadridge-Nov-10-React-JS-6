import { useState } from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";

function App() {
  let [handler, setHandler] = useState(true);
  let updateHandler = () => {
    setHandler(!handler);
  };
  return (
    <>
      {/* <Counter start={5} />
      <Counter start={10} />
      <Counter start={15} />
      <Counter start={20} /> */}
      <button onClick={updateHandler}>
        {handler ? "Remove" : "Add"} Component
      </button>
      {handler && <Toggle />}
    </>
  );
}

export default App;

// Props => send data from parent to child
// App is parent and Counter is child
