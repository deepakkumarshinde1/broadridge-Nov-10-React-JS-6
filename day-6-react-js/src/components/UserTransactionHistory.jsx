import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/user.context";
import { useEffect } from "react";

function UserTransactionHistory() {
  let { paramsUserId } = useUserContext();
  let navigate = useNavigate();
  useEffect(() => {
    console.log(paramsUserId);
  }, [paramsUserId]);
  return (
    <>
      {/* {paramsUserId ? ( */}
      <section className="row">
        <section className="col-3">
          <ul className="list-group">
            <li
              className="list-group-item"
              onClick={() => navigate(`/user/profile/${paramsUserId}`)}
            >
              Profile
            </li>
            <li
              className="list-group-item"
              onClick={() => {
                navigate(`/user/transaction-history/${paramsUserId}`);
              }}
            >
              Transaction History
            </li>
          </ul>
        </section>
        <section className="col-7">
          <Outlet />
        </section>
      </section>
      {/* ) : (
        <Navigate to="/users" />
      )} */}
    </>
  );
}

export default UserTransactionHistory;
