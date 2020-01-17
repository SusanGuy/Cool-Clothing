import React from "react";
import { Route, Redirect } from "react-router-dom";
import {
  selectCurrentUser,
  selectLoading
} from "../../redux/user/user.selector";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({
  component: Component,
  currentUser,
  loading,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!currentUser && !loading) {
        return <Redirect to="/auth" />;
      } else {
        if (loading) {
          return <Spinner />;
        }
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = state => {
  return {
    currentUser: selectCurrentUser(state),
    loading: selectLoading(state)
  };
};

export default connect(mapStateToProps)(PrivateRoute);
