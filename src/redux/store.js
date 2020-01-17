import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [];

let store;

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  store = createStore(rootReducer, applyMiddleware(...middlewares));
} else {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}
export const persistor = persistStore(store);
export default store;
