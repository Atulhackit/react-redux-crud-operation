import * as types from "./ActionType";
const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userRducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case types.UPDATE_USER:
    case types.DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case types.Add_USER:
      return {
        ...state,
        loading: false,
      };
    case types.GET_SINGLE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default userRducers;
