import { useState } from "react";
import Text from "./Text";

function Counter({ start }) {
  let [count, setCount] = useState(start);
  let inc = () => {
    setCount(count + 1);
  };

  let dec = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1 data-testid="h1-counter-props">Count : {count}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <Text />
    </>
  );
}

export default Counter;
