import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [logger];
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
