import React, { useState } from "react";
import FormInput from "../formInput/formInput";
import Button from "../buttons/buttons";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./signin.styles.scss";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = e => {
    setError("");
    e.target.name === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={e => handleChange(e)}
          value={email}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={e => this.handleChange(e)}
          label="Password"
          required
        />
        {error && <div className="error">{error}</div>}
        <div className="buttons">
          <Button type="submit"> Sign In </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
