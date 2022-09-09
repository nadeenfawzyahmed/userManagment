import axios from "axios";
const header = "631694f67f918c639cb4b968";
export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/631694f67f918c639cb4b968",
  headers: {
    "Content-Type": "application/json",
    "app-id" :`${header}`,
  },
});
