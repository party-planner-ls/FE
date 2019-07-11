import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../Actions";

const initialState = {
  parties: [],
  loginToken: null,
  loggingIn: false,
  fetchingParties: false,
  addingParty: false,
  updatingParty: false,
  deletingParty: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loginToken: action.payload
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
