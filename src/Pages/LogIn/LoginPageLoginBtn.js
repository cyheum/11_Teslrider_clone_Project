import React, { Component } from "react";

class LoginPageLoginBtn extends Component {
  render() {
    const { login } = this.props;
    return (
      <button onClick={login} className="LoginPageLoginBtn" type="submit">
        로그인
      </button>
    );
  }
}

export default LoginPageLoginBtn;
