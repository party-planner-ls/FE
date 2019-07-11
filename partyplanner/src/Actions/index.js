import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

//placeholder for url
const URL = "placeholder";

export const LOGIN = credentials => dispatch => {
  dispatch({
    type: LOGIN_START
  });

  return axios
    .post(URL)
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
