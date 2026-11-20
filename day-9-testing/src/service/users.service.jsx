import axios from "axios";

export const getUserList = async () => {
  let response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

export const getSingleUser = async (id) => {
  let response = await axios.get(
    "https://jsonplaceholder.typicode.com/users" + id,
  );
  return response.data;
};
