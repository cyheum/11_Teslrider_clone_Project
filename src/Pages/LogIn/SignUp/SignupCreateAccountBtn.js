import React, { Component } from "react";
import "./SignupCreateAccountBtn.scss";

class SignupCreateAccountBtn extends Component {
  render() {
    return (
      <button
        onClick={this.props.signup}
        className="SignupCreateAccountBtn"
        type="submit"
      >
        계정 만들기
      </button>
    );
  }
}

export default SignupCreateAccountBtn;
