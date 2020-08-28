import React, { Component } from "react";
import SignupNav from "./SignupNav";
import SignUpScreen from "./SignUpScreen";
import SignupFooter from "./SignupFooter";
import "./SignUp.scss";

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <SignupNav />
        <SignUpScreen />
        <SignupFooter />
      </div>
    );
  }
}

export default SignUp;
