import axios from "axios";
import { IUser, IUserState } from "./apisearchSlice";

export function userList(amount = "string") {
  return new Promise<IUserState>(async (resolve) => {
    axios.get(`https://reqres.in/api/users?page=${amount}`).then((response) => {
      resolve(response.data);
    });
  });
}

export function user(amount = "string") {
  return new Promise<IUser>(async (resolve) => {
    axios.get(`https://reqres.in/api/users/${amount}`).then((response) => {
      resolve(response.data.data);
    });
  });
}
