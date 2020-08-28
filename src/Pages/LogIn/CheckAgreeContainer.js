import React, { Component } from "react";

class CheckAgreeContainer extends Component {
  render() {
    const { checked, check } = this.props;
    return (
      <div className="CheckAgreeContainer">
        <div className="checkboxContainer">
          <input type="checkbox" onClick={checked} />
        </div>
        <div className="agreeContainer">
          <div className="userAgree">{check}</div>
        </div>
      </div>
    );
  }
}

export default CheckAgreeContainer;
