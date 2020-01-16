import React, { Component } from "react";
import FormInput from "../formInput/formInput";
import Button from "../buttons/buttons";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./signin.styles.scss";
class Signin extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: ""
      });
    } catch (err) {
      console.log(err.message);
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
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
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
          {this.state.error && <div className="error">{this.state.error}</div>}
          <div className="buttons">
            <Button type="submit"> Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
