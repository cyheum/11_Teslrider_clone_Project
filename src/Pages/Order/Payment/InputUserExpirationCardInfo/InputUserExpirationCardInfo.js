import React, { Component } from "react";

export default class InputUserExpirationCardInfo extends Component {
  render() {
    return (
      <div className="inputUserExpirationCardInfoContainer">
        <div>{this.props.title}</div>
        <input type="text" />
      </div>
    );
  }
}
