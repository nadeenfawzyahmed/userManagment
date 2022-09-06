import axios from "axios";
const token = "asdasdasd";
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
