import axios from "axios";
import { createContext, useContext, useState } from "react";

let axiosApi = axios.create({
  baseURL: "http://localhost:3000",
});

const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState(null);

  const getUsers = async () => {
    try {
      let response = await axiosApi.get("/users");
      setUsers(response.data);
    } catch (error) {
      alert("Unable to load users");
    }
  };

  const getSingleUserData = async (id) => {
    try {
      let response = await axiosApi.get(`/users/${id}`);
      setUser(response.data);
    } catch (error) {
      alert("Unable to load users");
    }
  };

  const shared = {
    users,
    getUsers,
    getSingleUserData,
    user,
  };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
