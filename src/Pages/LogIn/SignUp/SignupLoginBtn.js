import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignupLoginBtn.scss";

class SignupLoginBtn extends Component {
  render() {
    return (
      <Link to="/login">
        <button className="SignupLoginBtn" type="submit">
          로그인
        </button>
      </Link>
    );
  }
}

export default SignupLoginBtn;
