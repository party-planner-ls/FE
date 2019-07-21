import * as AT from "../Actions/actionTypes";

import { devMode, devSettings } from "../config";

const initialToken = devMode ? devSettings.devToken : null;
const initialUserId = devMode ? devSettings.devUserId : null;

// after we're able to connect to the API, we will need to replace
// parties: dummyParties with parties: [].
const initialState = {
  parties: [],
  isRegistering: false,
  loginToken: initialToken,
  userId: initialUserId,
  fetchingUserId: false,
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
    case AT.REGISTER_START:
      return {
        ...state,
        isRegistering: true,
        error: null
      };
    case AT.REGISTER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        error: null
      };
    case AT.REGISTER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload
      };

    case AT.LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true
      };

    case AT.LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        loginToken: action.payload,
        isLoggedIn: true,
        loggingIn: false
      };

    case AT.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        error: action.payload,
        isLoggedIn: false
      };
    case AT.FETCH_PARTIES_START:
      return {
        ...state,
        fetchingParties: true,
        error: null
      };
    case AT.FETCH_PARTIES_SUCCESS:
      return {
        ...state,
        parties: action.payload,
        fetchingParties: false,
        error: null
      };
    case AT.FETCH_PARTIES_FAILURE:
      return {
        ...state,
        fetchingParties: false,
        error: action.payload
      };
    case AT.FETCH_USER_ID_START:
      return {
        ...state,
        fetchingUserId: true,
        error: null
      };
    case AT.FETCH_USER_ID_SUCCESS:
      return {
        ...state,
        userId: action.payload,
        fetchingUserId: false,
        error: null
      };
    case AT.FETCH_USER_ID_FAILURE:
      return {
        ...state,
        fetchingUserId: false,
        error: action.payload
      };
    case AT.DELETE_PARTY_START:
      return {
        ...state,
        deletingParties: true,
        error: null
      };
    case AT.DELETE_PARTY_SUCCESS:
      return {
        ...state,
        deletingParties: false,
        error: null
      };
    case AT.DELETE_PARTY_FAILURE:
      return {
        ...state,
        deletingParties: false,
        error: action.payload
      };
    case AT.ADD_PARTY_START:
      return {
        ...state,
        addingParties: true,
        error: null
      };
    case AT.ADD_PARTY_SUCCESS:
      return {
        ...state,
        addingParties: false,
        error: null
      };
    case AT.ADD_PARTY_FAILURE:
      return {
        ...state,
        addingParties: false,
        error: action.payload
      };
    case AT.EDIT_PARTY_START:
      return {
        ...state,
        editingParties: true,
        error: null
      };
    case AT.EDIT_PARTY_SUCCESS:
      return {
        ...state,
        editingParties: false,
        error: null
      };
    case AT.EDIT_PARTY_FAILURE:
      return {
        ...state,
        editingParties: false,
        error: action.payload
      };
    case AT.PARTY_START:
      return {
        ...state,
        fetchingParties: true
      };
    case AT.PARTY_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingParties: false,
        parties: action.payload.party
      };
    case AT.PARTY_FAILURE:
      return {
        ...state,
        fetchingParties: false,
        error: action.payload
      };
    case AT.GET_TODOS:
      return {
        ...state,
        todosLoading: true
      };

    case AT.GET_TODOS_SUCCESS:
      return {
        ...state,
        todosLoading: false,
        todos: action.payload
      };

    case AT.GET_TODOS_FAILURE:
      return {
        ...state,
        todosLoading: false,
        error: action.payload
      };

    case AT.ADD_TODO:
      return {
        ...state,
        todosAdding: true,
        error: ""
      };

    case AT.ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload
      };

    case AT.ADD_TODO_FAILURE:
      return {
        ...state,
        todosAdding: false,
        error: action.payload
      };

    case AT.DELETE_TODO:
      return {
        ...state,
        todosDeleting: true,
        error: ""
      };

    case AT.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload
      };

    case AT.DELETE_TODO_FAILURE:
      return {
        ...state,
        todosDeleting: false,
        error: action.payload
      };

    case AT.GET_ENT:
      return {
        ...state,
        entLoading: true,
        error: ""
      };

    case AT.GET_ENT_SUCCESS:
      return {
        ...state,
        entLoading: false,
        ent: action.payload
      };

    case AT.GET_ENT_FAILURE:
      return {
        entLoading: false,
        error: action.payload
      };

    case AT.ADD_ENT:
      return {
        ...state,
        todosAdding: true,
        error: ""
      };

    case AT.ADD_ENT_SUCCESS:
      return {
        ...state,
        entAdding: false,
        todos: action.payload
      };

    case AT.ADD_ENT_FAILURE:
      return {
        ...state,
        entAdding: false,
        error: action.payload
      };

    case AT.DELETE_ENT:
      return {
        ...state,
        entDeleting: true,
        error: ""
      };

    case AT.DELETE_ENT_SUCCESS:
      return {
        ...state,
        entDeleting: false,
        ent: action.payload
      };

    case AT.DELETE_ENT_FAILURE:
      return {
        ...state,
        entDeleting: false,
        error: action.payload
      };

    case AT.GET_IMAGES:
      return {
        ...state,
        imgLoading: true,
        error: ""
      };

    case AT.GET_IMAGES_SUCCESS:
      return {
        ...state,
        imgLoading: false,
        images: action.payload
      };

    case AT.GET_IMAGES_FAILURE:
      return {
        ...state,
        imgLoading: false,
        error: action.payload
      };

    case AT.ADD_IMAGE:
      return {
        ...state,
        imgAdding: true,
        error: ""
      };

    case AT.ADD_IMAGE_SUCCESS:
      return {
        ...state,
        imgAdding: false,
        images: action.payload
      };

    case AT.ADD_IMAGE_FAILURE:
      return {
        ...state,
        imgAdding: false,
        error: action.payload
      };

    case AT.DELETE_IMAGE:
      return {
        ...state,
        imgDeleting: true,
        error: ""
      };

    case AT.DELETE_IMAGE_SUCCESS:
      return {
        ...state,
        imgDeleting: false,
        images: action.payload
      };

    case AT.DELETE_IMAGE_FAILURE:
      return {
        ...state,
        imgDeleting: false,
        error: action.payload
      };

    case AT.GET_SHOPPING_LIST_START:
      return {
        ...state,
        fetchingShoppingList: true
      };

    case AT.GET_SHOPPING_LIST_SUCCESS:
      return {
        ...state,
        fetchingShoppingList: false,
        shoppingList: action.payload.shoppingList,
        shoppingListId: action.payload.shoppingListId
      };

    case AT.GET_SHOPPING_LIST_FAILURE:
      return {
        ...state,
        fetchingShoppingList: false,
        error: action.payload
      };

    case AT.DELETE_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        deletingShoppingListItem: true
      };

    case AT.DELETE_SHOPPING_LIST_ITEM_SUCCESS:
      return {
        ...state,
        deletingShoppingListItem: false
      };

    case AT.DELETE_SHOPPING_LIST_ITEM_FAILURE:
      return {
        ...state,
        deletingShoppingListItem: false,
        error: action.payload
      };

    case AT.UPDATE_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        updatingShoppingListItem: true
      };

    case AT.UPDATE_SHOPPING_LIST_ITEM_SUCCESS:
      return {
        ...state,
        updatingShoppingListItem: false
      };

    case AT.UPDATE_SHOPPING_LIST_ITEM_FAILURE:
      return {
        ...state,
        updatingShoppingListItem: false,
        error: action.payload
      };

    case AT.ADD_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        addingShoppingListItem: true
      };

    case AT.ADD_SHOPPING_LIST_ITEM_SUCCESS:
      return {
        ...state,
        addingShoppingListItem: false
      };

    case AT.ADD_SHOPPING_LIST_ITEM_FAILURE:
      return {
        ...state,
        addingShoppingListItem: false,
        error: action.payload
      };
    case AT.ADD_SHOPPING_LIST_ID_START:
      return {
        ...state,
        addingShoppingListId: true
      };

    case AT.ADD_SHOPPING_LIST_ID_SUCCESS:
      return {
        ...state,
        shoppingListId: action.payload,
        addingShoppingListId: false
      };

    case AT.ADD_SHOPPING_LIST_ID_FAILURE:
      return {
        ...state,
        addingShoppingListId: false,
        error: action.payload
      };

    case AT.START_SHOPPING_LIST_EDIT:
      return {
        ...state,
        editingShoppingList: true
      };

    case AT.STOP_SHOPPING_LIST_EDIT:
      return {
        ...state,
        editingShoppingList: false
      };

    default:
      return state;
  }
};

export default reducer;
