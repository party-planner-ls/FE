import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
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

  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  ADD_IMAGE,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_FAILURE,
  DELETE_IMAGE,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_FAILURE,
  GET_ENT,
  GET_ENT_SUCCESS,
  GET_ENT_FAILURE,
  ADD_ENT,
  ADD_ENT_SUCCESS,
  ADD_ENT_FAILURE,
  DELETE_ENT,
  DELETE_ENT_SUCCESS,
  DELETE_ENT_FAILURE,
  GET_SHOPPING_LIST_START,
  GET_SHOPPING_LIST_SUCCESS,
  GET_SHOPPING_LIST_FAILURE,
  START_SHOPPING_LIST_EDIT,
  STOP_SHOPPING_LIST_EDIT,
  DELETE_SHOPPING_LIST_ITEM_START,
  DELETE_SHOPPING_LIST_ITEM_SUCCESS,
  DELETE_SHOPPING_LIST_ITEM_FAILURE,
  UPDATE_SHOPPING_LIST_ITEM_START,
  UPDATE_SHOPPING_LIST_ITEM_SUCCESS,
  UPDATE_SHOPPING_LIST_ITEM_FAILURE,
  ADD_SHOPPING_LIST_ITEM_START,
  ADD_SHOPPING_LIST_ITEM_SUCCESS,
  ADD_SHOPPING_LIST_ITEM_FAILURE,
  ADD_SHOPPING_LIST_ID_START,
  ADD_SHOPPING_LIST_ID_SUCCESS,
  ADD_SHOPPING_LIST_ID_FAILURE
} from "../Actions";

export const devMode = false;

const devToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6IndpbGxAZXhhbXBsZS5jb20iLCJpYXQiOjE1NjM1MDY3NTksImV4cCI6MTU2MzU5MzE1OX0.CbTGhXtWhPqYLqw7KzhENlH2eeYOlBVvdTh--jXjC84";
const devUserId = 3;

const initialToken = devMode ? devToken : null;
const initialUserId = devMode ? devUserId : null;

// after we're able to connect to the API, we will need to replace
// parties: dummyParties with parties: [].
const initialState = {
  parties: [],
  loginToken: initialToken,
  userId: initialUserId,
  loggingIn: false,
  isLoggedIn: false,
  fetchingParties: false,
  addingParty: false,
  updatingParty: false,
  deletingParty: false,
  error: null,
  todosLoading: false,
  todosAdding: false,
  todosDeleting: false,
  entLoading: false,
  entAdding: false,
  entDeleting: false,
  imgLoading: false,
  imgAdding: false,
  imgDeleting: false,
  ent: [],
  images: [],
  todos: [],
  shoppingList: [],
  shoppingListId: null,
  deletingShoppingListItem: false,
  updatingShoppingListItem: false,
  addngShoppingListItem: false,
  fetchingShoppingList: false,
  editingShoppingList: false
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
      isLoggedIn: false,
      error: action.payload
    }

    case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true,
        isLoggedIn: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loginToken: action.payload,
        isLoggedIn: true
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload,
        isLoggedIn: false
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

    case GET_TODOS_FAILURE:
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
        todos: action.payload
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
        todos: action.payload
      };

    case DELETE_TODO_FAILURE:
      return {
        ...state,
        todosDeleting: false,
        error: action.payload
      };

    case GET_ENT:
      return {
        ...state,
        entLoading: true,
        error: ""
      };

    case GET_ENT_SUCCESS:
      return {
        ...state,
        entLoading: false,
        ent: action.payload
      };

    case GET_ENT_FAILURE:
      return {
        entLoading: false,
        error: action.payload
      };

    case ADD_ENT:
      return {
        ...state,
        todosAdding: true,
        error: ""
      };

    case ADD_ENT_SUCCESS:
      return {
        ...state,
        entAdding: false,
        todos: action.payload
      };

    case ADD_ENT_FAILURE:
      return {
        ...state,
        entAdding: false,
        error: action.payload
      };

    case DELETE_ENT:
      return {
        ...state,
        entDeleting: true,
        error: ""
      };

    case DELETE_ENT_SUCCESS:
      return {
        ...state,
        entDeleting: false,
        ent: action.payload
      };

    case DELETE_ENT_FAILURE:
      return {
        ...state,
        entDeleting: false,
        error: action.payload
      };

    case GET_IMAGES:
      return {
        ...state,
        imgLoading: true,
        error: ""
      };

    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        imgLoading: false,
        images: action.payload
      };

    case GET_IMAGES_FAILURE:
      return {
        ...state,
        imgLoading: false,
        error: action.payload
      };

    case ADD_IMAGE:
      return {
        ...state,
        imgAdding: true,
        error: ""
      };

    case ADD_IMAGE_SUCCESS:
      return {
        ...state,
        imgAdding: false,
        images: action.payload
      };

    case ADD_IMAGE_FAILURE:
      return {
        ...state,
        imgAdding: false,
        error: action.payload
      };

    case DELETE_IMAGE:
      return {
        ...state,
        imgDeleting: true,
        error: ""
      };

    case DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        imgDeleting: false,
        images: action.payload
      };

    case DELETE_IMAGE_FAILURE:
      return {
        ...state,
        imgDeleting: false,
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
        shoppingList: action.payload.shoppingList,
        shoppingListId: action.payload.shoppingListId
      };

    case GET_SHOPPING_LIST_FAILURE:
      return {
        ...state,
        fetchingShoppingList: false,
        error: action.payload
      };

    case DELETE_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        deletingShoppingListItem: true
      };

    case DELETE_SHOPPING_LIST_ITEM_SUCCESS:
      return {
        ...state,
        deletingShoppingListItem: false
      };

    case DELETE_SHOPPING_LIST_ITEM_FAILURE:
      return {
        ...state,
        deletingShoppingListItem: false,
        error: action.payload
      };

    case UPDATE_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        updatingShoppingListItem: true
      };

    case UPDATE_SHOPPING_LIST_ITEM_SUCCESS:
      return {
        ...state,
        updatingShoppingListItem: false
      };

    case UPDATE_SHOPPING_LIST_ITEM_FAILURE:
      return {
        ...state,
        updatingShoppingListItem: false,
        error: action.payload
      };

    case ADD_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        addingShoppingListItem: true
      };

    case ADD_SHOPPING_LIST_ITEM_SUCCESS:
      return {
        ...state,
        addingShoppingListItem: false
      };

    case ADD_SHOPPING_LIST_ITEM_FAILURE:
      return {
        ...state,
        addingShoppingListItem: false,
        error: action.payload
      };
    case ADD_SHOPPING_LIST_ID_START:
      return {
        ...state,
        addingShoppingListId: true
      };

    case ADD_SHOPPING_LIST_ID_SUCCESS:
      return {
        ...state,
        shoppingListId: action.payload,
        addingShoppingListId: false
      };

    case ADD_SHOPPING_LIST_ID_FAILURE:
      return {
        ...state,
        addingShoppingListId: false,
        error: action.payload
      };

    case START_SHOPPING_LIST_EDIT:
      return {
        ...state,
        editingShoppingList: true
      };

    case STOP_SHOPPING_LIST_EDIT:
      return {
        ...state,
        editingShoppingList: false
      };

    default:
      return state;
  }

};

export default reducer;
