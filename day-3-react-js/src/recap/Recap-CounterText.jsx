import { useEffect } from "react";

function CounterText(props) {
  useEffect(() => {
    console.log("Comp is mounted");
  }, []);

  useEffect(() => {
    return () => {
      console.log("Comp is unmounted");
    };
  }, []);

  return (
    <>
      <h1>Hello {props.counterText}</h1>
    </>
  );
}

export default CounterText;
