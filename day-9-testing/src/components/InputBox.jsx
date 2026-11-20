import React, { useState } from "react";

function InputBox() {
  let [text, setText] = useState("");
  return (
    <div>
      <label htmlFor="text">User Text</label>
      <input
        id="text"
        value={text}
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setText(event.target.value)}
      />
      <h1>Name is : {text}</h1>
    </div>
  );
}

export default InputBox;
