import UsersListItem from "./UserListItem";

function UserList(props) {
  let { users, removeUser } = props;
  return (
    <ul>
      {users.map((value, index) => {
        return (
          <UsersListItem key={value.id} value={value} removeUser={removeUser} />
        );
      })}
    </ul>
  );
}

export default UserList;
