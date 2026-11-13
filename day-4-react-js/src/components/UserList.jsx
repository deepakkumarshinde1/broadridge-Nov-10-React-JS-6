import { useUserContext } from "../context/users.context";
import UsersListItem from "./UserListItem";

function UserList() {
  let { users } = useUserContext();
  return (
    <ul>
      {users.map((value, index) => {
        return <UsersListItem key={value.id} value={value} />;
      })}
    </ul>
  );
}

export default UserList;
