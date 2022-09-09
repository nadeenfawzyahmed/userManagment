import axios from "axios";
import apiClient from "../../utils/apiClient";
const RESOURCE = "users";

const fetchUsers =async() => {
var response={};
await axios.get('https://dummyapi.io/data/v1/user/',
{headers:{
  "app-id":'631694f67f918c639cb4b968'
}}).then((res)=>{
  console.log("fetch",res.data);
  response=res.data ;
})
.catch((error)=>console.log("error axios",error));
return response;

};
///////////////

const deleteUser = (userId) => {
  return axios.delete(`https://dummyapi.io/data/v1/user/${userId}`,
  {headers:{
    "app-id":'631694f67f918c639cb4b968'
  }}
  );
};
//////

const addUser = (user) => {
  return axios.post(`https://dummyapi.io/data/v1/user/create/`,
  {
    
    firstName:user.firstName,
    lastName:user.lastName,
    email:user.email}
  ,
  {headers:{
    "app-id":'631694f67f918c639cb4b968'
  }}
  );};

  const updateUser = (user) => {
    return axios.put(`https://dummyapi.io/data/v1/user/${user.id}`,
    {
      
      firstName:user.firstName,
      lastName:user.lastName,
      }
    ,
    {headers:{
      "app-id":'631694f67f918c639cb4b968'
    }}
    );};
  


export default { fetchUsers,deleteUser,addUser,updateUser};
