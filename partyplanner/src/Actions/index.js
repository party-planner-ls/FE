import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//placeholder for url
const URL = 'placeholder';

export const LOGIN = (credentials) => dispatch => {
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
        })
    })
    .catch(err => {
        console.log(err);
        dispatch({
            type: LOGIN_FAILURE,
            payload: err
        })
    })
}