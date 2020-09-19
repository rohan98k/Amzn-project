import { auth } from "./firebase";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.kindpng.com/picc/b/17/172263.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <h5>E-mail</h5>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login__signIn">
            Continue
          </button>

          <p>
            By continuing, you agree to Rohan's Amazon Clone's Conditions of Use
            and Privacy Notice.
          </p>
        </form>
      </div>

      <p className="separator">New to Amazon?</p>
      <Link to="/register">
        <button className="login__register">Create your Amazon Account</button>
      </Link>
    </div>
  );
}

export default Login;
