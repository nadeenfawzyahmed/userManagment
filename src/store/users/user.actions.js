import UsersActionTypes from "./users.type";
import userService from "./user.service";


/////////fetch
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
  export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersStart());
  
    try {
      const response = await userService.fetchUsers();
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error.message));
    }
  };
  //////delete
  export const deleteUserStart = (payload) => ({
    type: UsersActionTypes.DELETE_USER_START,
    payload,
  });
  
  export const deleteUserSuccess = (id) => ({
    type: UsersActionTypes.DELETE_USER_SUCCESS,
    payload: id,
  });
  
  export const deleteUserFailure = (errorMessage) => ({
    type: UsersActionTypes.DELETE_USER_FAILURE,
    payload: errorMessage,
  });
  
  export const deleteUser = (id) => (dispatch) => {
    dispatch(deleteUserStart());
    userService
      .deleteUser(id)
      .then(() => {
        dispatch(deleteUserSuccess(id));
        dispatch(fetchUsers());
      })
      .catch((error) => dispatch(deleteUserFailure(error.message)));
  };
  /////////add
  export const addUserStart = (payload) => ({
    type: UsersActionTypes.ADD_USER_START,
    payload,
  });
  
  export const addUserSuccess = (user) => ({
    type: UsersActionTypes.ADD_USER_SUCCESS,
    payload: user,
  });
  
  export const addUserFailure = (errorMessage) => ({
    type: UsersActionTypes.ADD_USER_FAILURE,
    payload: errorMessage,
  });


  export const addUser = (user) => (dispatch) => {
    dispatch(addUserStart());
    userService
      .addUser(user)
      .then(() => {
        dispatch(addUserSuccess(user));
        dispatch(fetchUsers());
      })
      .catch((error) => dispatch(addUserFailure(error.message)));
  };
  ///////update
  export const updateUserStart = (payload) => ({
    type: UsersActionTypes.UPDATE_USER_START,
    payload,
  });
  
  export const updateUserSuccess = (user) => ({
    type: UsersActionTypes.UPDATE_USER_SUCCESS,
    payload: user,
  });
  
  export const updateUserFailure = (errorMessage) => ({
    type: UsersActionTypes.UPDATE_USER_FAILURE,
    payload: errorMessage,
  });


  export const updateUser = (user) => (dispatch) => {
    dispatch(updateUserStart());
    userService
      .updateUser(user)
      .then(() => {
        dispatch(updateUserSuccess(user));
        dispatch(fetchUsers());
      })
      .catch((error) => dispatch(updateUserFailure(error.message)));
  };