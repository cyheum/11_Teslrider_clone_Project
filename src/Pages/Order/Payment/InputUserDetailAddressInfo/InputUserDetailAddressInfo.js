import React, { Component } from "react";

export default class InputUserDetailAddressInfo extends Component {
  render() {
    return (
      <div className="inputUserDetailAddressInfoContainer">
        <div>{this.props.title}</div>
        <input type="text" />
      </div>
    );
  }
}
