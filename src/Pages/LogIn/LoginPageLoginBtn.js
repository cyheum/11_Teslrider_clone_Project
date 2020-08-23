import React, { Component } from "react";

class LoginPageLoginBtn extends Component {
  render() {
    return (
      <button
        onClick={this.props.login}
        className="LoginPageLoginBtn"
        type="submit"
      >
        로그인
      </button>
    );
  }
}

export default LoginPageLoginBtn;
