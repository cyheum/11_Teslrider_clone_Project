import React, { Component } from "react";

export default class InputUserExpirationCardInfo extends Component {
  render() {
    const { title, option } = this.props.select;
    return (
      <div className="inputUserExpirationCardInfoContainer">
        <div>{title}</div>
        <div className="selectBoxWrap">
          <select name="cars" id="cars">
            {option.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
