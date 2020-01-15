import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import HomePage from "./containers/homepage/homepage";
import Shop from "./containers/shop/shop";
import Auth from "./containers/authenticationForm/auth";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/auth" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
