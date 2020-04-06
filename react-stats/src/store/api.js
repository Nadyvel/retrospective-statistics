import axios from "axios";
//this function "memorizes" all my reaquests, which are called in actions later to pass them to the redux thunk middleware
export function getBase() {
  return axios.get(
      `http://localhost:8082/statistics`
  );
}
