import {
  SEARCH_USERS,
  LOADING,
  GET_USERNAME,
  SEARCH_SINGLE_USER
} from "../actions/index";

const initialState = {
  users: [],
  loading_stuffs: false,
  inputText: "",
  alert: null,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERNAME:
      return {
        ...state,
        inputText: action.payload
      };
    case LOADING:
      return {
        ...state,
        loading_stuffs: true
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading_stuffs: false
      };
    case SEARCH_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading_stuffs: false
      };
    default:
      return state;
  }
}
