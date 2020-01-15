import React from "react";
import "./auth.styles.scss";
import SignIn from "../../components/signin/signin";
import Signup from "../../components/signup/signup";
const auth = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <Signup />
    </div>
  );
};

export default auth;
