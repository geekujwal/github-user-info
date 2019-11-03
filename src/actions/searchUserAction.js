import {
  loading,
  SEARCH_USERS,
  GET_USERNAME,
  SEARCH_SINGLE_USER
} from "./index";
const axios = require("axios");
export const fetchUsers = username => dispatch => {
  dispatch(loading());
  axios
    .get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    )
    .then(res => {
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.items
      });
    });
};
export const fetchSingleUser = username => dispatch => {
  dispatch(loading());
  axios
    .get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`
    )
    .then(res => {
      dispatch({
        type: SEARCH_SINGLE_USER,
        payload: res.data
      });
    });
};
export const getUser = text => dispatch => {
  dispatch({
    type: GET_USERNAME,
    payload: text
  });
};
