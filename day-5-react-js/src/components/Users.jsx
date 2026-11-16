import { useEffect } from "react";
import "../css/User.css";
import { useUserContext } from "../context/user.context";
import { useNavigate } from "react-router-dom";

function Users() {
  const { users, getUsers } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (users.length === 0) getUsers();
  }, []);
  return (
    <div className="row justify-content-center ">
      <section className="col-10">
        <table className="table table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th width="10%">Sr. No.</th>
              <th width="50%">User Name</th>
              <th width="15%">Status</th>
              <th width="15%">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>
                    {user.status ? (
                      <span className="badge bg-success">Active</span>
                    ) : (
                      <span className="badge bg-danger">Inactive</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        navigate(`/user/profile/${user.id}`);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Users;
