import { useForm } from "react-hook-form";

export function ErrorMessage({ message }) {
  return message ? (
    <span className="text-danger fw-bold">{message}</span>
  ) : null;
}
export function CreateAccount() {
  let skillsList = [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS",
    },
    {
      id: 3,
      name: "Javascript",
    },
    {
      id: 4,
      name: "React-JS",
    },
    {
      id: 5,
      name: "Node JS",
    },
  ];
  let { register, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      firstName: "Deepak",
      lastName: "Shinde",
      mobile: "8989898988",
      age: "18",
      gender: "Female",
      country: "India",
      skills: [],
      password: "",
      conformPassword: "",
    },
  });

  let formValidation = {
    firstName: {
      required: "Enter 1st Name",
      minLength: {
        value: 2,
        message: "Enter min 2 character",
      },
    },
    lastName: {
      required: "Please Enter Last Name",
    },
    mobile: {
      required: "Enter mobile number",
      pattern: {
        value: /^[6-9][0-9]{9}$/,
        message: "Invalid mobile number",
      },
    },
    age: {
      required: "Enter age",
      min: {
        value: 18,
        message: "Age must be above 17",
      },
    },
    gender: {
      required: "Please Select Gender",
    },
    country: {
      required: "Please Select Country",
    },
  };
  let { errors } = formState;

  let createAccount = (values) => {
    console.log(values);
  };

  return (
    <>
      <section className="row justify-content-center">
        <section className="col-11 col-lg-6 col-md-8  mt-5 card p-5">
          <h3 className="text-primary">User Login</h3>

          <form action="#" onSubmit={handleSubmit(createAccount)}>
            {/* <!-- Personal Information --> */}
            <h5 className="text-primary mb-3">1. Personal Information</h5>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input
                  {...register("firstName", formValidation.firstName)}
                  type="text"
                  className="form-control"
                  placeholder="Enter first name"
                />
                <ErrorMessage message={errors.firstName?.message} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input
                  {...register("lastName", formValidation.lastName)}
                  type="text"
                  className="form-control"
                  placeholder="Enter last name"
                />
                <ErrorMessage message={errors.lastName?.message} />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Mobile</label>
                <input
                  {...register("mobile", formValidation.mobile)}
                  type="text"
                  className="form-control"
                  placeholder="Enter Mobile"
                />
                <ErrorMessage message={errors.mobile?.message} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input
                  {...register("age", formValidation.age)}
                  type="number"
                  className="form-control"
                  placeholder="Enter age"
                />
                <ErrorMessage message={errors.age?.message} />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label d-block">Gender</label>

              <div className="form-check form-check-inline">
                <input
                  {...register("gender", formValidation.gender)}
                  className="form-check-input"
                  type="radio"
                  id="male"
                  value="Male"
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  {...register("gender", formValidation.gender)}
                  className="form-check-input"
                  type="radio"
                  id="female"
                  value="Female"
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  {...register("gender", formValidation.gender)}
                  className="form-check-input"
                  type="radio"
                  id="other"
                  value="Other"
                />
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
              </div>
              <br />
              <ErrorMessage message={errors.gender?.message} />
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label className="form-label">Country</label>
                <select
                  {...register("country", formValidation.country)}
                  className="form-select"
                  name="country"
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
                <ErrorMessage message={errors.country?.message} />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Select Skills</label>
              {skillsList.map((skill) => {
                return (
                  <div className="form-check" key={skill.id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`skill-${skill.id}`}
                      value={skill.name}
                      {...register("skills", {
                        validate: (value) => {
                          if (value.length < 2) {
                            return "Please select a min 2 skill";
                          }
                        },
                      })}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`skill-${skill.id}`}
                    >
                      {skill.name}
                    </label>
                  </div>
                );
              })}

              <ErrorMessage message={errors.skills?.message} />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  {...register("password", {
                    required: "Enter password",
                    minLength: {
                      value: 4,
                      message: "min 4 char password",
                    },
                  })}
                  className="form-control"
                  placeholder="Enter password"
                  minlength="8"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input
                  {...register("conformPassword", (password) => {
                    return {
                      validate: (value) => {
                        if (password !== value) {
                          return "Password don't match";
                        } else {
                          return true;
                        }
                      },
                    };
                  })}
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>
            {/* <!-- Buttons --> */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>

              <button
                type="button"
                onClick={() => reset()}
                className="btn btn-warning"
              >
                Reset Form
              </button>

              <button type="button" className="btn btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
}

// export default CreateAccount;
