import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateAccountBtn extends Component {
  render() {
    return (
      <Link to="/signup">
        <button className="CreateAccountBtn">계정 만들기</button>
      </Link>
    );
  }
}

export default CreateAccountBtn;
