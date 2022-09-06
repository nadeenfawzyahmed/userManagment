import apiClient from "../../utils/apiClient";
const RESOURCE = "users";

const fetchPosts = () => {
  return apiClient.get(RESOURCE);
};
export default { fetchPosts};
