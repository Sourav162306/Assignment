import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:3000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePass = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form className="login-container">
        <h1 className="signin-heading">Sign In</h1>

        <div className="">
          <label>Email address</label>
          <br />
          <input onChange={this.onChangeEmail} type="email" className="" placeholder="Enter email" />
        </div>

        <div className="">
          <label>Password</label>
          <br />
          <input onChange={this.onChangePass} type="password" className="" placeholder="Enter password" />
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
