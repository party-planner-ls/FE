import axios from "axios";

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";
export const PARTY_START = 'PARTY_START';
export const PARTY_SUCCESS = 'PARTY_SUCCESS';
export const PARTY_FAILURE = 'PARTY_FAILURE';


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
      })
  })
}

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

export const party = () => dispatch => {
  dispatch({type: PARTY_START});
  let userName = 'placeHolder';
  return axios
    .get(URL)
    .then(res => {
      console.log(res.data);
      dispatch({type: PARTY_SUCCESS, payload: res.data})
    })
    .catch(err => {

    });
}