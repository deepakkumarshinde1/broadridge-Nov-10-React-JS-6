// by function

import { useState } from "react";

function Counter(props) {
  let [count, setCount] = useState(props.start); // return array

  let increment = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  let resetCount = () => {
    setCount(props.start);
  };

  return (
    <>
      <h1>The Count is {count}</h1>
      <button onClick={increment}>Inc Count</button>
      <button onClick={resetCount}>Reset</button>
      <hr />
    </>
  );
}

export default Counter;
