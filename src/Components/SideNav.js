import React, { Component } from 'react';
import './SideNav.scss';

class SideNav extends Component {

  makeLabel = () => {
    return LABEL.map(({text}, idx) =>
      (
        <li className="sideNavItem" key={idx}>
        <div className="sideNavTab" />
        <div className="sideNavLabel">{text}</div>
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

const LABEL = [
  {text: "model S"},
  {text: "안전"},
  {text: "퍼포먼스"},
  {text: "주행 가능 거리"},
  {text: "오토파일럿"},
  {text: "인테리어"},
  {text: "외부"},
  {text: "사양"},
  {text: "주문하기"}
]

export default SideNav;