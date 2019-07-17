import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  FETCH_PARTIES_START,
  FETCH_PARTIES_SUCCESS,
  FETCH_PARTIES_FAILURE,
  DELETE_PARTY_START,
  DELETE_PARTY_SUCCESS,
  DELETE_PARTY_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  PARTY_START,
  PARTY_SUCCESS,
  PARTY_FAILURE,
} from "../Actions";

//example party
const dummyParty1 = {
  id: 1,
  name: "birthday party",
  guests: 25,
  date: "9/4/2019",
  theme: "Hawaiian",
  budget: 300,
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
  name: "wedding reception",
  guests: 20,
  date: "9/20/2019",
  theme: "Fun",
  budget: 500,
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

// after we're able to connect to the API, we will need to replace
// parties: dummyParties with parties: [].
const initialState = {
  parties: dummyParties,
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
    case REGISTER_START:
    return{
      ...state,
      isLoggedIn: false,
      error: null
    };
  case REGISTER_SUCCESS:
    return{
      ...state,
      isLoggedIn: true,
      error: null
    };
  case REGISTER_FAILURE:
    return{
      ...state,
      error: action.payload
    }

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
    case DELETE_PARTY_FAILURE:
      return {
        ...state,
        deletingParties: false,
        error: action.payload
      };
    case DELETE_PARTY_START:
      return {
        ...state,
        deletingParties: true,
        error: null
      };
    case DELETE_PARTY_SUCCESS:
      return {
        ...state,
        parties: action.payload,
        deletingParties: false,
        error: null
      };
    case FETCH_PARTIES_FAILURE:
      return {
        ...state,
        fetchingParties: false,
        error: action.payload
      };
    case PARTY_START:
      return{
        ...state,
        fetchingParties: true,
      };
    case PARTY_SUCCESS:
      return{
        ...state,
        error: null,
        fetchingParties: false,
        parties: action.payload.party
      }
    case PARTY_FAILURE:
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
