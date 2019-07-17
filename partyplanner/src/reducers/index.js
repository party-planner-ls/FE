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
  GET_SHOPPING_LIST_START,
  GET_SHOPPING_LIST_SUCCESS,
  GET_SHOPPING_LIST_FAILURE
} from "../Actions";

const dummyParty1 = {
  id: 1,
  name: "birthday party",
  guests: 25,
  date: "9/4/2019",
  theme: "Hawaiian",
  budget: 300
};

const dummyParty2 = {
  id: 2,
  name: "wedding reception",
  guests: 20,
  date: "9/20/2019",
  theme: "Fun",
  budget: 500
};

const dummyParties = [dummyParty1, dummyParty2];

const dummyTodos = [
  { id: 3, name: "buy beer", completed: false },
  { id: 4, name: "book venue", completed: false }
];

const dummyShoppingList = [
  { id: 3, name: "chairs", purchased: true, price: 50 },
  { id: 4, name: "beer", purchased: false, price: 0 }
];

const dummyMoodBoard = [{ id: 1, name: null, imageData: null }];

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
  todos: dummyTodos,
  todosLoading: false,
  shoppingList: dummyShoppingList,
  fetchingShoppingList: false
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
    case GET_SHOPPING_LIST_START:
      return {
        ...state,
        fetchingShoppingList: true
      };

    case GET_SHOPPING_LIST_SUCCESS:
      return {
        ...state,
        fetchingShoppingList: false,
        shoppingList: action.payload
      };

    case GET_SHOPPING_LIST_FAILURE:
      return {
        ...state,
        fetchingShoppingList: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
