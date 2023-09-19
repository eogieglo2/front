import { User, UserRol, UserStatus } from "./User";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

export interface LoginState {}

export interface UserState {}

export interface RootState {
  loading: boolean;
  login: LoginState;
  users: User[];
}

export type MyThunkAction = ThunkAction<
  Promise<void>,
  RootState,
  null,
  AnyAction
>;

export const initLoginState = (): LoginState => ({});

export const initUserState = (): User[] => [
  {
    id: "u1",
    rol: UserRol.USER,
    status: UserStatus.ACTIVE,
    name: "Usuario 1",
    email: "user@example.com",
  },
];
