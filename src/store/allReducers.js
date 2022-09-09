import { combineReducers } from "redux";
import users from"./users/user.reducer";

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
