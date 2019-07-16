import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore, applyMiddleware } from "redux"; // importing applyMiddleware to be able to add thunk later on
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducer from "./reducers"; // needs to be built

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);