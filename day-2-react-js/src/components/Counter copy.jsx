// by function

import { useState } from "react";

function Counter() {
  //let [username, setUsername]= useState("deepak");
  // let [studentList ,setStudentList ] = useState(["deepak","rohan","kunal"])
  // [state, updateFunction]

  let [count, setCount] = useState(100); // return array

  let increment = () => {
    // count++;
    let newCount = count + 1;
    setCount(newCount);
    //console.log("increment function is clicked");
    //console.log("count is ", count);
  };

  let resetCount = () => {
    setCount(100);
  };
  return (
    <>
      <h1>The Count is {count}</h1>
      <button onClick={increment}>Inc Count</button>
      <button onClick={resetCount}>Reset</button>
    </>
  );
}
// JSX Expression => {1} {"deepak"} {2+2} {fun()}
export default Counter;

// Event Click , DblClick , mouse ,keyboard

// State in React
// Object to store Data => 1,"a",true,[1,2,3,2],{student:"deepak"}

// State => Change => vDOM => Updated the Real DOM

// in-build =>
// function comp => state => useState() => Hooks
// use (hooks) => complex function in react
// in-build hooks of react => useState
// create own hooks => custom hooks => useLogin
// 3rd party hooks => useParams , useNavigate , useLocation , useSearchParams
// in function comp
