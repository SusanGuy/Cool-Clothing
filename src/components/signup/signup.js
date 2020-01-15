import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import Button from "../buttons/buttons";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.styles.scss";
class Signup extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: null
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({ error: "passwords don't match" });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  handleChange = e => {
    this.setState({
      error: null
    });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I donot have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={e => this.handleChange(e)}
            value={this.state.displayName}
            label="Name"
            required
          />

          <FormInput
            name="email"
            type="email"
            handleChange={e => this.handleChange(e)}
            value={this.state.email}
            label="Email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={e => this.handleChange(e)}
            label="Password"
            required
          />

          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={e => this.handleChange(e)}
            label="Confirm Password"
            required
          />
          {this.state.error && <div className="error">{this.state.error}</div>}
          <Button type="submit"> Sign Up </Button>
        </form>
      </div>
    );
  }
}

export default Signup;
