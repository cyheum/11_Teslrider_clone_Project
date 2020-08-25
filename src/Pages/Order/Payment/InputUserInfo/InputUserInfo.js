import React, { Component } from "react";

export default class InputUserInfo extends Component {
  render() {
    const { isEnterprise } = this.props;
    return (
      <div
        className={
          isEnterprise ? "inputUserInfoContainer" : "inputUserInfoContainer"
        }
      >
        <div>{this.props.title}</div>
        <input type="text" />
      </div>
    );
  }
}
