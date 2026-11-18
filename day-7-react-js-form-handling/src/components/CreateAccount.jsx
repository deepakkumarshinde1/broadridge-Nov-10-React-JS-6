import { useForm } from "react-hook-form";

function CreateAccount() {
  let { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      mobile: "",
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
                <span className="text-danger fw-bold">
                  {errors.firstName?.message}
                </span>
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
                <span className="text-danger fw-bold">
                  {errors.lastName?.message}
                </span>
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
                <span className="text-danger fw-bold">
                  {errors.mobile?.message}
                </span>
              </div>
            </div>

            {/* <!-- Buttons --> */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>

              <button type="reset" className="btn btn-warning">
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

export default CreateAccount;
