import React, { useState } from "react";
import FormInput from "../formInput/formInput";
import Button from "../buttons/buttons";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup.styles.scss";
const Signup = () => {
  const [displayName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = e => {
    this.setState({
      error: null
    });
    switch (e.target.name) {
      case "displayName":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">I donot have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          handleChange={e => handleChange(e)}
          value={displayName}
          label="Name"
          required
        />

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
          handleChange={e => handleChange(e)}
          label="Password"
          required
        />

        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={e => handleChange(e)}
          label="Confirm Password"
          required
        />
        {error && <div className="error">{error}</div>}
        <Button type="submit"> Sign Up </Button>
      </form>
    </div>
  );
};

export default Signup;
