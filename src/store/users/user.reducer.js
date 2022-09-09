import UsersActionTypes from "./users.type";
import {
  addNewItem,
  deleteItem,
} from "../../utils/modifier";
const initialState = {
    isFetching: false,
    status: "idle",
    data: [],
    errorMessage: null,
    message: null,
  };
  const userReducer = (state = initialState, action) => {
    switch (action.type) { 
      //fetch
        case UsersActionTypes.FETCH_USERS_START:
        return {
          ...state,
          isFetching: true,
        };
      case UsersActionTypes.FETCH_USERS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload,
        };
      case UsersActionTypes.FETCH_USERS_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };

/////delete
        case UsersActionTypes.DELETE_USER_START:
      return {
        ...state,
        isFetching: true,
      };
    case UsersActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        data: deleteItem(state.data, action.payload),
        isFetching: false,
      };
    case UsersActionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
      ////add
      case UsersActionTypes.ADD_USER_START:
        return {
          ...state,
          isFetching: true,
        };
      case UsersActionTypes.ADD_USER_SUCCESS:
        return {
          ...state,
          data: addNewItem(state.data, action.payload),
          isFetching: false,
        };
      case UsersActionTypes.ADD_USER_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };
        ////update
        case UsersActionTypes.UPDATE_USER_START:
        return {
          ...state,
          isFetching: true,
        };
      case UsersActionTypes.UPDATE_USER_SUCCESS:
        return {
          ...state,
          data: addNewItem(state.data, action.payload),
          isFetching: false,
        };
      case UsersActionTypes.UPDATE_USER_FAILURE:
        return {
          ...state,
          isFetching: false,
          errorMessage: action.payload,
        };
        default:
            return state;
    }
};
export default userReducer;

