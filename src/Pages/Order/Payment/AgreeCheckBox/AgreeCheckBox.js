import React, { Component } from "react";

export default class AgreeCheckBox extends Component {
  render() {
    return (
      <div className="wrapAgreeCheckBox">
        <div className="agreeCheckBox"></div>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
