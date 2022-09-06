import UsersActionTypes from "./users.type";
import userService from "./user.service";
export const fetchUsersStart = () => ({
    type: UsersActionTypes.FETCH_USERS_START,
  });
  
  export const fetchUsersSuccess = (users) => ({
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: users,
  });
  
  export const fetchUsersFailure = (errorMessage) => ({
    type: UsersActionTypes.FETCH_USERS_FAILURE,
    payload: errorMessage,
  });