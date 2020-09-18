import { auth } from "./firebase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Create Account</h1>
        <form>
          <h5>Your Name</h5>
          <input
            className="login__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <h5>Mobile Number</h5>
          <input
            className="login__input"
            type="tel"
            pattern="+91 [0-9]{10}"
            placeholder="eg +91 123456789"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <h5>Email</h5>
          <input
            className="login__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            className="login__input"
            type="password"
            pattern="[0-9]{6+}"
            placeholder=" At least 6 chatacters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signUp} className="login__signIn">
            Continue
          </button>
          <p className="newSeparator">
            Already have an account?
            <Link to="./login"> Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
