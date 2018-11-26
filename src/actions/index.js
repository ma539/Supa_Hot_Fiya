import axios from "axios";
import { SET_RAPPER_DETAILS } from "./types";

export function fetchRapperDetails() {
  return function(dispatch) {
    return axios.get("http://localhost:3000/rappers").then(({ data }) => {
      dispatch(setRapperDetails(data));
    });
  };
}
function setRapperDetails(data) {
  return {
    type: SET_RAPPER_DETAILS,
    payload: data
  };
}
