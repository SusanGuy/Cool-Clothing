import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import HomePage from "./containers/homepage/homepage";
import Shop from "./containers/shop/shop";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import Auth from "./containers/authenticationForm/auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navigation currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/auth" component={Auth} />
        </Switch>
      </div>
    );
  }
}

export default App;
