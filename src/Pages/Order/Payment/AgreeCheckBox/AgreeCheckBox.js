import React, { Component } from "react";

export default class AgreeCheckBox extends Component {
  render() {
    const { index, text } = this.props;
    return (
      <label className="wrapAgreeCheckBox" for={index}>
        <input type="checkbox" className="agreeCheckBox" id={index} />
        {text}
      </label>
    );
  }
}
