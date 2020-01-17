import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import "../src/App.css";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { persistor } from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>,
  document.getElementById("root")
);
