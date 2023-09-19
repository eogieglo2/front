import { combineReducers } from "redux";
import { loadingReducer } from "./LoadingReducer";
import { usersReducer } from "./UsersReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  login: loadingReducer,
  users: usersReducer,
});

export default rootReducer;
