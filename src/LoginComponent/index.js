import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Login extends Component {
  render() {
    return (
      <form className="login-container">
        <h1 className="signin-heading">Sign In</h1>

        <div className="mb-3">
          <label>Email address</label>
          <br />
          <input type="email" className="" placeholder="Enter email" />
        </div>

        <div className="">
          <label>Password</label>
          <br />
          <input type="password" className="" placeholder="Enter password" />
        </div>
        <br />
        <div className="">
          <div className="">
            <input type="checkbox" className="" id="customCheck1" />

            <label className="" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <br />
        <div className="">
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </div>
        <p className="">Forgot password?</p>
        <Link className="nav-link" to={"/sign-up"}>
          Sign Up
        </Link>
      </form>
    );
  }
}

export default Login;
