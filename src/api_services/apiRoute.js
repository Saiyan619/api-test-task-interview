import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const getUsers = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const res = await api.get("/users/" + id);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

const getTaskByUserId = async (id) => {
  try {
    const res = await api.get("users/" + id + "/todos");
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers, getUserById, getTaskByUserId };
