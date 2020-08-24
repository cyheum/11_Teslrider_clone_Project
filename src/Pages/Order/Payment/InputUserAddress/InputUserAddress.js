import React, { Component } from "react";

export default class InputUserAddress extends Component {
  render() {
    return (
      <div className="inputUserAddressContainer">
        <div>{this.props.title}</div>
        <input type="text" />
      </div>
    );
  }
}
