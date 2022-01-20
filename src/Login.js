/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //it Successfully created a new user with email and Password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it Successfully created a new user with emial and Password
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login--logo" src="logo.png" alt="Logo" />
      </Link>

      <div className="login--container">
        <h1>Sign-In</h1>
        <form>
          <h5> E-mail or mobile phone number </h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login--signButton">
            {" "}
            Continue{" "}
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's
          <a href="/" className="login--privacy">
            <b>Conditions of Use</b>
          </a>
          and
          <a href="/" className="login--privacy">
            <b>Privacy</b>
          </a>
        </p>
        <p>
          <b>Notice:</b> Our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={register}
          className="login--registerButton"
        >
          Create your Amazon Account{" "}
        </button>

        <div className="socialMediaLink">
          <a href="https://www.instagram.com/invites/contact/?i=1hhhljxgtvhs2&utm_content=cn4fifb">
            {/* <InstagramIcon /> */}
            <img src="https://img.icons8.com/nolan/35/instagram-new.png" alt=""/>
          </a>
          <a href="https://www.facebook.com/gulamnabi.mundas">
            {/* <FacebookIcon /> */}
            <img src="https://img.icons8.com/nolan/35/facebook-new.png" alt=""/>
          </a>
          <a href="https://github.com/Gulamnabi7786">
            {/* <GitHubIcon /> */}
            <img src="https://img.icons8.com/nolan/35/github.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
