import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILED,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE
} from "../Actions";

const initialState = {
  parties: [],
  loginToken: null,
  loggingIn: false,
  fetchingParties: false,
  addingParty: false,
  updatingParty: false,
  deletingParty: false,
  error: null,
  todosLoading: false,
  todosAdding: false,
  todosDeleting: false
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

    case ADD_TODO:
      return {
        ...state,
        todosAdding: true,
        error: ""
      };

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        parties: action.payload
      };

    case ADD_TODO_FAILURE:
      return {
        ...state,
        todosAdding: false,
        error: action.payload
      };

    case DELETE_TODO:
      return {
        ...state,
        todosDeleting: true,
        error: ""
      };

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        parties: action.payload
      };

    case DELETE_TODO_FAILURE:
      return {
        ...state,
        todosDeleting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
