import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED
} from "../Actions";

//example party
const dummyParty = {
  todos: [
    {
      name: "buy confetti",
      completed: false
    },
    {
      name: "book entertainer",
      completed: false
    }
  ],
  shoppingList: [
    {
      name: "confetti",
      purchased: false,
      price: 0
    },
    {
      name: "plates",
      purchased: true,
      price: 20.0
    }
  ],
  moodBoard: [
    {
      name: null,
      imageData: null
    }
  ]
};

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
