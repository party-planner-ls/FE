import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  FETCH_PARTIES_START,
  FETCH_PARTIES_SUCCESS,
  FETCH_PARTIES_FAILURE
} from "../Actions";

//example party
const dummyParty1 = {
  id: 1,
  todos: [
    { id: 1, name: "buy confetti", completed: false },
    { id: 2, name: "book entertainer", completed: false }
  ],
  shoppingList: [
    { id: 1, name: "confetti", purchased: false, price: 0 },
    { id: 2, name: "plates", purchased: true, price: 20.0 }
  ],
  moodBoard: [{ id: 1, name: null, imageData: null }]
};

const dummyParty2 = {
  id: 2,
  todos: [
    { id: 3, name: "buy beer", completed: false },
    { id: 4, name: "book venue", completed: false }
  ],
  shoppingList: [
    { id: 3, name: "chairs", purchased: true, price: 50 },
    { id: 4, name: "beer", purchased: false, price: 0 }
  ],
  moodBoard: [{ id: 1, name: null, imageData: null }]
};

const dummyParties = [dummyParty1, dummyParty2];

const initialState = {
  parties: [],
  loginToken: null,
  loggingIn: false,
  fetchingParties: false,
  addingParty: false,
  updatingParty: false,
  deletingParty: false,
  error: null,
  todos: [],
  todosLoading: false
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
    case FETCH_PARTIES_START:
      return {
        ...state,
        fetchingParties: true,
        error: null
      };
    case FETCH_PARTIES_SUCCESS:
      return {
        ...state,
        parties: action.payload,
        fetchingParties: false,
        error: null
      };
    case FETCH_PARTIES_FAILURE:
      return {
        ...state,
        fetchingParties: false,
        error: action.payload
      };
    case GET_TODOS:
      return {
        ...state,
        todosLoading: true
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        todosLoading: false,
        todos: action.payload
      };

    case GET_TODOS_FAILED:
      return {
        ...state,
        todosLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
