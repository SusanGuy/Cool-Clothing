import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./containers/homepage/homepage";
import Shop from "./containers/shop/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
