import React, { Component } from 'react';
import './SideNav.scss';

class SideNav extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  makeLabel = (label) => {
  return label.map((val, idx) =>
        <a href={`#${val.id}`} key={idx}>
          <li className="sideNavItem">
            <div className="sideNavTab" />
            <div className="sideNavLabel">{val.text}</div>
          </li>
        </a>
    )
  }

  render() {
    const LABEL = [
      {text: this.props.model, id : "main"},
      {text: "안전", id : "secure"},
      {text: "퍼포먼스", id : "performance"},
      {text: "주행 가능 거리", id : "distance"},
      {text: "오토파일럿", id : "autopilot"},
      {text: "인테리어", id : "interior"},
      {text: "외부", id : "exterior"},
      {text: "사양" , id : "specs"},
      {text: "주문하기" , id : "order"}
    ]
    
    return (
      <div className="SideNav">
        <ul className="sideNavContainer">
          {this.makeLabel(LABEL)}
        </ul>
      </div>
    );
  }
}

export default SideNav;