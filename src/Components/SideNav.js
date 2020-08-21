import React, { Component } from 'react';
import './SideNav.scss';

class SideNav extends Component {
  state = {
    label: [
      {labelText: "model S"},
      {labelText: "안전"},
      {labelText: "퍼포먼스"},
      {labelText: "주행 가능 거리"},
      {labelText: "오토파일럿"},
      {labelText: "인테리어"},
      {labelText: "외부"},
      {labelText: "사양"},
      {labelText: "주문하기"}
    ]
  }

  makeLabel = () => {
    let data = this.state.label;
    return data.map(({label}, idx) =>
      (
        <li className="sideNavItem">
        <div className="sideNavTab" />
        <div className="sideNavLabel">{data}</div>
      </li>
      )
    )
  }

  render() {
    return (
      <div className="SideNav">
        <ul className="sideNavContainer">
          {this.makeLabel()}
        </ul>
      </div>
    );
  }
}

export default SideNav;