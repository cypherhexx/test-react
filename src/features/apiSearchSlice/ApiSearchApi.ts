import axios from "axios";

export function userList(amount = "string") {
  return new Promise<{ data: string }>(async (resolve) => {
    axios.get(`https://reqres.in/api/users?page=${amount}`).then((response) => {
      resolve(response.data);
    });
  });
}

export function user(amount = "string") {
  return new Promise<{ data: string }>(async (resolve) => {
    axios.get(`https://reqres.in/api/users/${amount}`).then((response) => {
      resolve(response.data);
    });
  });
}
