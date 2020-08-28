import React, { Component } from "react";
import LogInNav from "./LogInNav";
import LoginScreen from "./LoginScreen";
import LoginFooter from "./LoginFooter";
import "./Login.scss";

class LogIn extends Component {
  render() {
    return (
      <div className="LogIn">
        <LogInNav />
        <LoginScreen />
        <LoginFooter />
      </div>
    );
  }
}

export default LogIn;
