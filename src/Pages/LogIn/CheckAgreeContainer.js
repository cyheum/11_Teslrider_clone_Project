import React, { Component } from "react";

class CheckAgreeContainer extends Component {
  render() {
    return (
      <div className="CheckAgreeContainer">
        <div className="checkboxContainer">
          <input type="checkbox" />
        </div>
        <div className="agreeContainer">
          <div className="userAgree">{this.props.check}</div>
        </div>
      </div>
    );
  }
}

export default CheckAgreeContainer;
