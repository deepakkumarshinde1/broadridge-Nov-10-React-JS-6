import { NavLink, Outlet } from "react-router-dom";

function UserTransactionHistory() {
  return (
    <>
      <section className="row">
        <section className="col-3">
          <ul className="list-group">
            <li className="list-group-item">
              <NavLink to="#">Profile</NavLink>
            </li>
            <li className="list-group-item">
              <NavLink to="#">Transaction History</NavLink>
            </li>
          </ul>
        </section>
        <section className="col-7">
          <Outlet />
        </section>
      </section>
    </>
  );
}

export default UserTransactionHistory;
