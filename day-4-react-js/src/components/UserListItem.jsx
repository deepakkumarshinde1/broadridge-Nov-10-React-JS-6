import { useUserContext } from "../context/users.context";

function UsersListItem(props) {
  let { value } = props;
  let { removeUser } = useUserContext();

  return (
    <li key={value.id} className="my-3">
      {value.id} - {value.name}
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeUser(value.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default UsersListItem;
