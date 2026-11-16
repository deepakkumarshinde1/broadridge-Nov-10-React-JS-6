import { Link, useParams } from "react-router-dom";
import { useUserContext } from "../context/user.context";
import { useEffect } from "react";
import composeSignals from "../../node_modules/axios/lib/helpers/composeSignals";

function UserAccountProfile() {
  let { id } = useParams();
  let { getSingleUserData, user } = useUserContext();
  useEffect(() => {
    getSingleUserData(id);
  }, []);

  return (
    <>
      {user && (
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div
                className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                style={{ width: "55px", height: "55px", fontSize: "22px" }}
              >
                {user.name.split(" ")[0].slice(0, 1)}
                {user.name.split(" ")[1].slice(0, 1)}
              </div>

              <div>
                <h5 className="mb-1">{user.name}</h5>
                <small className="text-muted">
                  User ID: #USR{user.id}{" "}
                  {user.status ? (
                    <span className="badge bg-success ms-auto">Active</span>
                  ) : (
                    <span className="badge bg-danger ms-auto">Inactive</span>
                  )}
                </small>
              </div>

              <Link to="/users" className="btn btn-danger badge  ms-auto">
                Back
              </Link>
            </div>

            <hr />

            <div className="mb-3">
              <small className="text-muted">Available Balance</small>
              <h3 className="fw-bold mb-0">₹{user.balance}</h3>
            </div>

            <div className="row g-3">
              <div className="col-6">
                <small className="text-muted">Email Address</small>
                <div className="fw-medium small">{user.email}</div>
              </div>

              <div className="col-6">
                <small className="text-muted">Mobile Number</small>
                <div className="fw-medium small">{user.mobile}</div>
              </div>

              <div className="col-6">
                <small className="text-muted">Account Type</small>
                <div className="fw-medium">Savings</div>
              </div>

              <div className="col-6">
                <small className="text-muted"> KYC Status</small>
                <div className="fw-medium">
                  <span className="text-success fw-semibold">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserAccountProfile;
