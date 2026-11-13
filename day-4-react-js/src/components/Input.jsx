import { useUserContext } from "../context/users.context";

function Input() {
  let { user, inputChange, pressHandler } = useUserContext();
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={user}
        onChange={inputChange}
        onKeyUp={pressHandler}
      />
    </>
  );
}

export default Input;
