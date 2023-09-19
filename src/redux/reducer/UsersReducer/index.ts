import { initUserState } from "../../../interfaces/ReduxState";
import { AnyAction } from "redux";

export const usersReducer = (state = initUserState(), action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
