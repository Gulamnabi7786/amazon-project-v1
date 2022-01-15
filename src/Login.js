import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login--logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="login--container">
        <h1>Sign-In</h1>
        <form>
          <h5> E-mail or mobile phone number </h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login--signButton"> Continue </button>
        </form>
        <p>
          By continuing, you agree to Amazon's <a href="/" className="login--privacy"> Conditions of Use </a> and <a href="/" className="login--privacy"> Privacy </a>
        </p>
        <p>
          <b>Notice:</b> Our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login--registerButton">Create your Amazon Account </button>
      </div>
    </div>
  );
}

export default Login;
