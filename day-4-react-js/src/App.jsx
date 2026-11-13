import { use, useState } from "react";
import Input from "./components/Input";
import UserList from "./components/UserList";

function App() {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState("");

  let inputChange = (event) => {
    setUser(event.target.value);
  };

  let pressHandler = (event) => {
    if (event.keyCode === 13) {
      let id = users.length === 0 ? 1 : users[users.length - 1].id + 1;

      let newUser = {
        id,
        name: user,
      };

      // [{},{}]
      // {}
      // [{},{},{}]
      let _users = [...users];
      _users.push(newUser); // at end of array

      setUsers(_users);
      setUser("");
    }
  };

  let removeUser = (id) => {
    let deleteIndex = users.findIndex((value) => value.id == id);
    let _users = [...users];
    _users.splice(deleteIndex, 1);
    setUsers(_users);
  };
  return (
    <>
      <Input
        user={user}
        inputChange={inputChange}
        pressHandler={pressHandler}
      />
      <UserList users={users} removeUser={removeUser} />
    </>
  );
}

export default App;
