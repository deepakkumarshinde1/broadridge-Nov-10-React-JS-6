import React, { useState } from "react";

function Login() {
  let [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  let handelInput = (event) => {
    let { value, name } = event.target;
    let _userLogin = { ...userLogin };
    _userLogin[name] = value;
    setUserLogin(_userLogin);
  };

  let handelSubmit = (event) => {
    event.preventDefault();
    console.log(userLogin);
  };

  console.log("rendering");
  return (
    <>
      <section className="row justify-content-center">
        <section className="col-11 col-lg-4 col-md-6  mt-5 card p-5">
          <h3 className="text-primary">User Login</h3>
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                name="email"
                value={userLogin.email}
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter Email"
                onChange={handelInput}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                name="password"
                value={userLogin.password}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Password"
                onChange={handelInput}
              />
            </div>
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
