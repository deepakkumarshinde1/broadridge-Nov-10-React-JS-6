import { useEffect, useState } from "react";
import CounterText from "./Recap-CounterText";

function App() {
  let [count, setCount] = useState(3);
  let updateCount = () => {
    setCount(count + 1);
  };

  let decCount = () => {
    setCount(count - 1);
  };

  //useEffect(() => {
  // update state1
  // update state2
  // update state3
  //}, [count]);

  return (
    <>
      {count >= 0 ? <CounterText counterText={count} /> : null}
      <button onClick={updateCount}>Inc</button>
      <button onClick={decCount}>Dec</button>
    </>
  );
}

export default App;
