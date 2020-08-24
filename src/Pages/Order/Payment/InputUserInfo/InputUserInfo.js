import React, { Component } from "react";

export default class InputUserInfo extends Component {
  render() {
    return (
      <div className="inputUserInfoContainer">
        <div>{this.props.title}</div>
        <input type="text" />
      </div>
    );
  }
}
