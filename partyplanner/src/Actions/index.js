import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";
export const PARTY_START = "PARTY_START";
export const PARTY_SUCCESS = "PARTY_SUCCESS";
export const PARTY_FAILURE = "PARTY_FAILURE";
export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";
export const FETCH_PARTIES_START = "FETCH_PARTIES_START";
export const FETCH_PARTIES_SUCCESS = "FETCH_PARTIES_SUCCESS";
export const FETCH_PARTIES_FAILURE = "FETCH_PARTIES_FAILURE";
export const DELETE_PARTY_START = "DELETE_PARTY_START";
export const DELETE_PARTY_SUCCESS = "DELETE_PARTY_SUCCESS";
export const DELETE_PARTY_FAILURE = "DELETE_PARTY_FAILURE";

//placeholder for url
const URL = "placeholder";

export const Register = credentials => dispatch => {
  dispatch({
    type: REGISTER_START
  });
  return axios
    .post(URL, credentials)
    .then(res => {
      console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: REGISTER_FAILURE,
        payload: err
      });
    });
};

export const LOGIN = credentials => dispatch => {
  dispatch({
    type: LOGIN_START
  });

  return axios
    .post(URL, credentials)
    .then(res => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });
};

export const getTodos = () => dispatch => {
  dispatch({ type: GET_TODOS });
  axios
    .get(URL)
    .then(res => dispatch({ type: GET_TODOS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_TODOS_FAILED, payload: err }));
};

export const addTodo = todo => dispatch => {
  dispatch({ type: ADD_TODO });
  axios
    .post(URL, todo)
    .then(res => dispatch({ type: ADD_TODO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_TODO_FAILURE, payload: err }));
};

export const deleteTodo = id => dispatch => {
  dispatch({ type: DELETE_TODO });
  axios
    .delete(`URL/${id}`)
    .then(res => dispatch({ type: DELETE_TODO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_TODO_FAILURE, payload: err }));
};

export const party = () => dispatch => {
  dispatch({ type: PARTY_START });
  let userName = "placeHolder";
  return axios
    .get(URL)
    .then(res => {
      console.log(res.data);
      dispatch({ type: PARTY_SUCCESS, payload: res.data });
    })
    .catch(err => {});
};

export const getParties = () => dispatch => {
  dispatch({ type: FETCH_PARTIES_START });
  axios
    .get(URL)
    .then(res => {
      dispatch({
        type: FETCH_PARTIES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_PARTIES_FAILURE, payload: err.response });
    });
};

export const deleteParty = id => dispatch => {
  dispatch({ type: DELETE_PARTY_START });
  return axios
    .delete(`URL${id}`)
    .then(res => {
      dispatch({
        type: DELETE_PARTY_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: DELETE_PARTY_FAILURE, payload: err.response });
    });
};
