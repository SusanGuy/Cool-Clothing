import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import HomePage from "./containers/homepage/homepage";
import Checkout from "./containers/checkout/checkout";
import Shop from "./containers/shop/shop";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import Spinner from "./components/Spinner/Spinner";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser, selectLoading } from "./redux/user/user.selector";
import Auth from "./containers/authenticationForm/auth";
//import PrivateRoute from "./components/routing/PrivateRoute";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <Navigation />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={Shop} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/auth"
                render={() =>
                  this.props.currentUser ? <Redirect to="/shop" /> : <Auth />
                }
              />
            </Switch>
          </Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loading: selectLoading
});

export default connect(mapStateToProps, {
  setCurrentUser
})(App);
