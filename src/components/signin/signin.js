import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import Button from "../buttons/buttons";
import "./signin.styles.scss";
class Signin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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

          <Button type="submit"> Sign In </Button>
        </form>
      </div>
    );
  }
}

export default Signin;
