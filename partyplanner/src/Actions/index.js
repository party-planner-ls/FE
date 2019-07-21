import { axiosWithAuth } from "../utils/axiosAuth";
import axios from "axios";

import * as AT from "./actionTypes";

//placeholder for url
const URL = "placeholder";

const baseBackendURL = "https://party-planner-ls.herokuapp.com/api";

export const Register = credentials => dispatch => {
  dispatch({
    type: AT.REGISTER_START
  });
  return axiosWithAuth()
    .post(`/register`, credentials, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: AT.REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: AT.REGISTER_FAILURE,
        payload: err
      });
    });
};

export const LOGIN = credentials => dispatch => {
  dispatch({
    type: AT.LOGIN_START
  });

  return (
    axiosWithAuth()
      .post(`/login`, credentials, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.id);
        dispatch({
          type: AT.LOGIN_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: AT.LOGIN_FAILURE,
          payload: err
        });
      })
  );
};

export const getTodos = () => dispatch => {
  dispatch({ type: AT.GET_TODOS });
  axios
    .get("https://party-planner-ls.herokuapp.com/api/todo")
    .then(res => dispatch({ type: AT.GET_TODOS_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.GET_TODOS_FAILURE, payload: err }));
};

export const addTodo = todo => dispatch => {
  dispatch({ type: AT.ADD_TODO });
  axios
    .post("https://party-planner-ls.herokuapp.com/api/todo", todo)
    .then(res => dispatch({ type: AT.ADD_TODO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.ADD_TODO_FAILURE, payload: err }));
};

export const deleteTodo = id => dispatch => {
  dispatch({ type: AT.DELETE_TODO });
  axios
    .delete(`URL/${id}`)
    .then(res => dispatch({ type: AT.DELETE_TODO_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.DELETE_TODO_FAILURE, payload: err }));
};

export const getEnt = () => dispatch => {
  dispatch({ type: AT.GET_ENT });
  axios
    .get(URL)
    .then(res => dispatch({ type: AT.GET_ENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.GET_ENT_FAILURE, payload: err }));
};

export const addEnt = ent => dispatch => {
  dispatch({ type: AT.ADD_ENT });
  axios
    .post(URL, ent)
    .then(res => dispatch({ type: AT.ADD_ENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.ADD_ENT_FAILURE, payload: err }));
};

export const deleteEnt = ent => dispatch => {
  dispatch({ type: AT.DELETE_ENT });
  axios
    .delete(URL`api/entertainment`, ent)
    .then(res => dispatch({ type: AT.DELETE_ENT_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.DELETE_ENT_FAILURE, payload: err }));
};

export const getImages = () => dispatch => {
  dispatch({ type: AT.GET_IMAGES });
  axios
    .get(URL)
    .then(res => dispatch({ type: AT.GET_IMAGES_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.GET_IMAGES_FAILURE, payload: err }));
};

export const addImage = image => dispatch => {
  dispatch({ type: AT.ADD_IMAGE });
  axios
    .post(URL, image)
    .then(res => dispatch({ type: AT.ADD_IMAGE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.ADD_IMAGE_FAILURE, payload: err }));
};

export const deleteImage = id => dispatch => {
  dispatch({ type: AT.DELETE_IMAGE });
  axios
    .delete(URL`${id}`)
    .then(res => dispatch({ type: AT.DELETE_IMAGE_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: AT.DELETE_IMAGE_FAILURE, payload: err }));
};

export const party = () => dispatch => {
  dispatch({ type: AT.PARTY_START });
  let userName = "placeHolder";
  return axios
    .get(URL)
    .then(res => {
      console.log(res.data);
      dispatch({ type: AT.PARTY_SUCCESS, payload: res.data });
    })
    .catch(err => {});
};

export const getParties = (userId = null) => dispatch => {
  dispatch({ type: AT.FETCH_PARTIES_START });
  axios
    .get(`${baseBackendURL}/party`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      //filter the set of parties to be just those associated with our userId
      //the api should not be sending us party data from other users, but this is
      //the workaround to solve that issue.
      const filteredResData = res.data.filter(e => e.user_id === userId);
      dispatch({
        type: AT.FETCH_PARTIES_SUCCESS,
        payload: filteredResData
      });
    })
    .catch(err => {
      dispatch({ type: AT.FETCH_PARTIES_FAILURE, payload: err.response });
    });
};

export const deleteParty = (partyId, userId) => dispatch => {
  dispatch({ type: AT.DELETE_PARTY_START });
  return axios
    .delete(`${baseBackendURL}/party/${partyId}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      if (res.status === 204) {
        dispatch({
          type: AT.DELETE_PARTY_SUCCESS
        });
      }
      return res;
    })
    .then(res => {
      getParties(userId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({ type: AT.DELETE_PARTY_FAILURE, payload: err.response });
    });
};

export const editParty = (updatedParty, partyId, userId) => dispatch => {
  dispatch({ type: AT.EDIT_PARTY_START });
  return axios
    .put(`${baseBackendURL}/party/${partyId}`, updatedParty, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: AT.EDIT_PARTY_SUCCESS
      });
      return res;
    })
    .then(res => {
      getParties(userId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({ type: AT.EDIT_PARTY_FAILURE, payload: err.response });
    });
};

export const addParty = (party, userId) => dispatch => {
  const partyToAdd = {
    ...party,
    user_id: userId
  };
  dispatch({ type: AT.ADD_PARTY_START });
  return axios
    .post(`${baseBackendURL}/party/`, partyToAdd, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: AT.ADD_PARTY_SUCCESS
      });
      return res;
    })
    .then(res => {
      getParties(userId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({
        type: AT.ADD_PARTY_FAILURE,
        payload: err.response
      });
    });
};

export const getShoppingList = partyId => dispatch => {
  dispatch({ type: AT.GET_SHOPPING_LIST_START });
  axios
    .get(`${baseBackendURL}/party/${partyId}/list/items`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      let shoppingListId;
      if (res.data.length) {
        shoppingListId = res.data[0].shopping_list_id;
      } else {
        shoppingListId = -1;
      }
      dispatch({
        type: AT.GET_SHOPPING_LIST_SUCCESS,
        payload: { shoppingList: res.data, shoppingListId: shoppingListId }
      });
    })
    .catch(err => {
      dispatch({ type: AT.GET_SHOPPING_LIST_FAILURE, payload: err.response });
    });
};

export const addShoppingListId = partyId => dispatch => {
  const partyObjToSend = {
    party_id: partyId
  };
  dispatch({ type: AT.ADD_SHOPPING_LIST_ID_START });
  return axios
    .post(`${baseBackendURL}/shoppinglist`, partyObjToSend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: AT.ADD_SHOPPING_LIST_ID_SUCCESS,
        payload: res.data.id
      });
    })
    .catch(err => {
      dispatch({
        type: AT.ADD_SHOPPING_LIST_ID_FAILURE,
        payload: err.response
      });
    });
};

export const deleteShoppingListItem = (listItemId, partyId) => dispatch => {
  dispatch({ type: AT.DELETE_SHOPPING_LIST_ITEM_START });
  return axios
    .delete(`${baseBackendURL}/items/${listItemId}`, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      if (res.status === 204) {
        dispatch({
          type: AT.DELETE_SHOPPING_LIST_ITEM_SUCCESS
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
        type: AT.DELETE_SHOPPING_LIST_ITEM_FAILURE,
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
  dispatch({ type: AT.UPDATE_SHOPPING_LIST_ITEM_START });
  return axios
    .put(`${baseBackendURL}/items/${listItemId}`, itemToSend, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({ type: AT.UPDATE_SHOPPING_LIST_ITEM_SUCCESS });
      return res;
    })
    .then(res => {
      getShoppingList(partyId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({
        type: AT.UPDATE_SHOPPING_LIST_ITEM_FAILURE,
        payload: err.response
      });
    });
};

export const addShoppingListItem = (
  itemName,
  shoppingListId,
  partyId
) => dispatch => {
  const itemToAdd = {
    name: itemName,
    purchased: false,
    shopping_list_id: shoppingListId,
    price: 0
  };
  dispatch({ type: AT.ADD_SHOPPING_LIST_ITEM_START });
  return axios
    .post(`${baseBackendURL}/items/`, itemToAdd, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      dispatch({
        type: AT.ADD_SHOPPING_LIST_ITEM_SUCCESS
      });
      return res;
    })
    .then(res => {
      getShoppingList(partyId)(dispatch);
      return res;
    })
    .catch(err => {
      dispatch({
        type: AT.ADD_SHOPPING_LIST_ITEM_FAILURE,
        payload: err.response
      });
    });
};

export const startEditingShoppingList = () => dispatch => {
  dispatch({ type: AT.START_SHOPPING_LIST_EDIT });
};

export const stopEditingShoppingList = () => dispatch => {
  dispatch({ type: AT.STOP_SHOPPING_LIST_EDIT });
};
