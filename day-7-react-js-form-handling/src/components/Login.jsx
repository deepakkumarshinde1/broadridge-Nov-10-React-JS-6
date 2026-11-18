import React, { useRef, useState } from "react";
import InputBox from "./InputBox";

function Login() {
  let emailRef = useRef(null);
  let passwordRef = useRef(null);
  let fullNameRef = useRef(null);

  let handelSubmit = (event) => {
    event.preventDefault();
    let email = emailRef.current;
    let password = passwordRef.current;

    console.log(email.value);
    console.log(password.value);
  };

  console.log("rendering");
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-11 col-lg-4 col-md-6  mt-5 card p-5">
          <h3 className="text-primary">User Login</h3>
          <form onSubmit={handelSubmit}>
            <InputBox
              ref={emailRef}
              label="Email Address"
              type="email"
              id="email"
              name="email"
            />
            <InputBox
              ref={passwordRef}
              label="Password"
              type="password"
              id="password"
              name="password"
            />
            <InputBox
              ref={fullNameRef}
              label="Full Name"
              id="fullname"
              name="fullname"
            />

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </section>
      </section>
    </>
  );
}

export default Login;
