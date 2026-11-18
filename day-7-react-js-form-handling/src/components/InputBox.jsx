import React, { forwardRef } from "react";

function InputBox(
  { label = "Label", type = "text", id = "id", name = "name" },
  ref,
) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        name={name}
        ref={ref}
        type={type}
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={"Enter " + label}
      />
    </div>
  );
}

export default forwardRef(InputBox);
