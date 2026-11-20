import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, reset } from "./redux/slices/counter.slice";

function App() {
  let dispatch = useDispatch();
  let { count } = useSelector((state) => state.counterReducer);

  let inputRef = useRef(null);

  let setCounterValue = (event) => {
    if (event.keyCode === 13) {
      //setCount(Number(inputRef.current.value));
      let { value } = inputRef.current;
      dispatch(reset(value));
    }
  };

  let increment = () => {
    dispatch(inc());
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter Count Start Number"
        onKeyUp={setCounterValue}
      />
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch(inc())}>INC</button>
    </>
  );
}

export default App;
