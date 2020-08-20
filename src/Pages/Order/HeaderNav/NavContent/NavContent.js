import React, { Component } from "react";

export default class NavContent extends Component {
  render() {
    const { activeComponent, name, index, changeComponent } = this.props;
    return (
      <li
        className={`${
          activeComponent >= index ? "titleNav pushed" : "titleNav normal"
        }${activeComponent === index ? " actived" : ""}`}
        key={name}
        onClick={() => changeComponent(index)}
      >
        {name}
      </li>
    );
  }
}
