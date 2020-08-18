import React, { Component } from "react";
import "./AsideNav.scss";

export default class AsideNav extends Component {
  render() {
    return (
      <aside className="AsideNav">
        <div className="wrapDescription">
          <div>Description</div>
        </div>
      </aside>
    );
  }
}
