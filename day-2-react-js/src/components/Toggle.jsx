import { useEffect, useState } from "react";

function Toggle() {
  let [toggle, setToggle] = useState(true);
  let [toggle2, setToggle2] = useState(true);
  let [checkApiStatus, setApiStatus] = useState(false);

  let toggling = () => {
    setToggle(!toggle);
  };

  // mounting
  useEffect(() => {
    console.log("Comp is mounted");
  }, []); // once

  // unmounted
  useEffect(() => {
    return () => {
      console.log("Comp is unmounted");
    };
  }, []); // once

  // updating
  useEffect(() => {
    setApiStatus(true);
  }, [toggle, toggle2]);
  // 3s

  useEffect(() => {
    if (checkApiStatus) {
      // call api => 10s
      setApiStatus(false);
    }
  }, [checkApiStatus]);

  return (
    <>
      {/* {toggle === true ? <h1>I am True</h1> : <h1>I am False</h1>} */}
      {/* <h1>I am {toggle === true ? "True" : "False"}</h1> */}
      <h1>I am {toggle ? "True" : "False"}</h1>
      <button onClick={toggling}>Toggle</button>
    </>
  );
}

export default Toggle;
// ternary
// cond ? true : false
