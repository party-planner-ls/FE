import axios from "axios";

export const REGISTER_START = "REGISTER_START";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";
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
export const GET_ENT = "GET_ENT";
export const GET_ENT_SUCCESS = "GET_ENT_SUCCESS";
export const GET_ENT_FAILURE = "GET_ENT_FAILED";
export const ADD_ENT = "ADD_ENT";
export const ADD_ENT_SUCCESS = "ADD_ENT_SUCCESS";
export const ADD_ENT_FAILURE = "ADD_ENT_FAILURE";
export const DELETE_ENT = "DELETE_ENT";
export const DELETE_ENT_SUCCESS = "DELETE_ENT_SUCCESS";
export const DELETE_ENT_FAILURE = "DELETE_ENT_FAILURE";
export const GET_IMAGES = "GET_IMAGES";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILURE = "GET_IMAGES_FAILURE";
export const ADD_IMAGE = "ADD_ENT";
export const ADD_IMAGE_SUCCESS = "ADD_IMAGE_SUCCESS";
export const ADD_IMAGE_FAILURE = "ADD_IMAGE_FAILURE";
export const DELETE_IMAGE = "DELETE_IMAGE";
export const DELETE_IMAGE_SUCCESS = "DELETE_IMAGE_SUCCESS";
export const DELETE_IMAGE_FAILURE = "DELETE_IMAGE_FAILURE";
export const GET_SHOPPING_LIST_START = "GET_SHOPPING_LIST_START";
export const GET_SHOPPING_LIST_SUCCESS = "GET_SHOPPING_LIST_SUCCESS";
export const GET_SHOPPING_LIST_FAILURE = "GET_SHOPPING_LIST_FAILURE";
export const DELETE_SHOPPING_LIST_ITEM_START =
  "DELETE_SHOPPING_LIST_ITEM_START";
export const DELETE_SHOPPING_LIST_ITEM_SUCCESS =
  "DELETE_SHOPPING_LIST_ITEM_SUCCESS";
export const DELETE_SHOPPING_LIST_ITEM_FAILURE =
  "DELETE_SHOPPING_LIST_ITEM_FAILURE";
export const UPDATE_SHOPPING_LIST_ITEM_START =
  "UPDATE_SHOPPING_LIST_ITEM_START";
export const UPDATE_SHOPPING_LIST_ITEM_SUCCESS =
  "UPDATE_SHOPPING_LIST_ITEM_SUCCESS";
export const UPDATE_SHOPPING_LIST_ITEM_FAILURE =
  "UPDATE_SHOPPING_LIST_ITEM_FAILURE";
export const ADD_SHOPPING_LIST_ITEM_START = "ADD_SHOPPING_LIST_ITEM_START";
export const ADD_SHOPPING_LIST_ITEM_SUCCESS = "ADD_SHOPPING_LIST_ITEM_SUCCESS";
export const ADD_SHOPPING_LIST_ITEM_FAILURE = "ADD_SHOPPING_LIST_ITEM_FAILURE";
export const START_SHOPPING_LIST_EDIT = "START_SHOPPING_LIST_EDIT";
export const STOP_SHOPPING_LIST_EDIT = "STOP_SHOPPING_LIST_EDIT";

//placeholder for url
const URL = "placeholder";

const baseBackendURL = "https://party-planner-ls.herokuapp.com/api";

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
    .catch(err => dispatch({ type: GET_TODOS_FAILURE, payload: err }));
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

export const getEnt = () => dispatch => {
  dispatch({ type: GET_ENT });
  axios
    .get(URL)
    .then(res => dispatch({ type: GET_ENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_ENT_FAILURE, payload: err }));
};

export const addEnt = ent => dispatch => {
  dispatch({ type: ADD_ENT });
  axios
    .post(URL, ent)
    .then(res => dispatch({ type: ADD_ENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_ENT_FAILURE, payload: err }));
};

export const deleteEnt = id => dispatch => {
  dispatch({ type: DELETE_ENT });
  axios
    .delete(`URL/${id}`)
    .then(res => dispatch({ type: DELETE_ENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_ENT_FAILURE, payload: err }));
};

export const getImages = () => dispatch => {
  dispatch({ type: GET_IMAGES });
  axios
    .get(URL)
    .then(res => dispatch({ type: GET_IMAGES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_IMAGES_FAILURE, payload: err }));
};

export const addImage = image => dispatch => {
  dispatch({ type: ADD_IMAGE });
  axios
    .post(URL, image)
    .then(res => dispatch({ type: ADD_IMAGE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_IMAGE_FAILURE, payload: err }));
};

export const deleteImage = id => dispatch => {
  dispatch({ type: DELETE_IMAGE });
  axios
    .delete(URL`${id}`)
    .then(res => dispatch({ type: DELETE_IMAGE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_IMAGE_FAILURE, payload: err }));
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

export const getParties = (userId = null) => dispatch => {
  dispatch({ type: FETCH_PARTIES_START });
  axios
    .get(`${baseBackendURL}/party`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      //filter the set of parties to be just those associated with our userId
      //the api should not be sending us party data from other users, but this is
      //the workaround to solve that issue.
      // console.log(res);
      // console.log(res.status);
      // use these later on to accept status code from deletion success
      const filteredResData = res.data.filter(e => e.user_id === userId);
      dispatch({
        type: FETCH_PARTIES_SUCCESS,
        payload: filteredResData
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

export const getShoppingList = partyId => dispatch => {
  dispatch({ type: GET_SHOPPING_LIST_START });
  axios
    .get(`${baseBackendURL}/party/${partyId}/list/items`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: GET_SHOPPING_LIST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: GET_SHOPPING_LIST_FAILURE, payload: err.response });
    });
};

export const deleteShoppingListItem = (listItemId, partyId) => dispatch => {
  dispatch({ type: DELETE_SHOPPING_LIST_ITEM_START });
  return axios
    .delete(`${baseBackendURL}/items/${listItemId}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      if (res.status === 204) {
        dispatch({
          type: DELETE_SHOPPING_LIST_ITEM_SUCCESS
        });
      }
      return res;
    })
    .then(res => {
      getShoppingList(partyId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({
        type: DELETE_SHOPPING_LIST_ITEM_FAILURE,
        payload: err.response
      });
    });
};

export const updateShoppingListItem = listItem => dispatch => {
  const itemToSend = {
    name: listItem.name,
    purchased: listItem.purchased,
    shopping_list_id: listItem.shopping_list_id,
    price: listItem.price
  };
  const listItemId = listItem.id;
  const partyId = listItem.party_id;
  dispatch({ type: UPDATE_SHOPPING_LIST_ITEM_START });
  return axios
    .put(`${baseBackendURL}/items/${listItemId}`, itemToSend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: UPDATE_SHOPPING_LIST_ITEM_SUCCESS });
      return res;
    })
    .then(res => {
      getShoppingList(partyId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({
        type: UPDATE_SHOPPING_LIST_ITEM_FAILURE,
        payload: err.response
      });
    });
};

export const addShoppingListItem = (listItem, partyId) => dispatch => {
  dispatch({ type: ADD_SHOPPING_LIST_ITEM_START });
  return axios
    .put(`URL/list/`, listItem, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: ADD_SHOPPING_LIST_ITEM_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: ADD_SHOPPING_LIST_ITEM_FAILURE,
        payload: err.response
      });
    });
};

export const startEditingShoppingList = () => dispatch => {
  dispatch({ type: START_SHOPPING_LIST_EDIT });
};

export const stopEditingShoppingList = () => dispatch => {
  dispatch({ type: STOP_SHOPPING_LIST_EDIT });
};
