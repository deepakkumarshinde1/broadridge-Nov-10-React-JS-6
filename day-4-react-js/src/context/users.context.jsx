import { createContext, useContext, useState } from "react";

// create context
const UserContext = createContext({});

// create customHook => access data across components
export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

// WrapperComponent => Provider

export function UserContextProvider(props) {
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

  let shared = {
    users,
    user,
    removeUser,
    inputChange,
    pressHandler,
  };
  return (
    <UserContext.Provider value={shared}>{props.children}</UserContext.Provider>
  );
}
