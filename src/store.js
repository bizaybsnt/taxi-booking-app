import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const initialStore = {};

const enhancers = [];
const middleWare = [thunk];

const composedEnhancers = compose(
  applyMiddleware(...middleWare),
  ...enhancers
);

const store = createStore(reducer, initialStore, composedEnhancers);

export default store;
