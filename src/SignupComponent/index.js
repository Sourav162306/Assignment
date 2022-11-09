import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  };

  onChangeFname = (event) => {
    this.setState({ fname: event.target.value });
  };

  onChangeLname = (event) => {
    this.setState({ lname: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePass = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <form className="signup-container" onSubmit={this.handleSubmit}>
        <h1 className="signup-heading">Sign Up</h1>

        <div className="">
          <label>First name</label>
          <br />
          <input
            onChange={this.onChangeFname}
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="">
          <label>Last name</label>
          <br />
          <input
            onChange={this.onChangeLname}
            type="text"
            className=""
            placeholder="Last name"
          />
        </div>

        <div className="">
          <label>Email address</label>
          <br />
          <input
            onChange={this.onChangeEmail}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="">
          <label>Password</label>
          <br />
          <input
            onChange={this.onChangePass}
            type="password"
            className=""
            placeholder="Enter password"
          />
        </div>
        <br />
        <div className="">
          <button type="submit" className="signup-btn-primary">
            Sign Up
          </button>
        </div>
        <p className="">
          Already registered <Link to="/sign-in">sign in?</Link>
        </p>
      </form>
    );
  }
}

export default Signup;
