export const SEARCH_USERS = "SEARCH_USERS";
export const GET_SINGLE_USER = "GET_SINGLE_USER";
export const LOADING = "LOADING";
export const GET_USERNAME = "GET_USERNAME";
export const SEARCH_SINGLE_USER = "SEARCH_SINGLE_USER";

export const get_username = () => {
  return {
    type: GET_USERNAME
  };
};
export const search_single_user = () => {
  return {
    type: SEARCH_SINGLE_USER
  };
};

export const loading = () => {
  return {
    type: LOADING
  };
};

export const search_users = () => {
  return {
    type: SEARCH_USERS
  };
};

export const get_single_user = () => {
  return {
    type: GET_SINGLE_USER
  };
};
