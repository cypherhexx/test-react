import axios from "axios";

export function search(amount = "string") {
  return new Promise<{ data: string }>(async (resolve) => {
    axios.get(`https://reqres.in/api/users?page=2`).then((response) => {
      resolve(response.data.data);
    });
  });
}
