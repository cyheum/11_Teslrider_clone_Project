import React, { Component } from 'react';
import './SideNav.scss';

class SideNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      logoColor: true,
      scroll: 0
    }
  }

  componentDidUpdate (_, prevState) {
    const { innerHeight, scrollY } = window
    if (prevState.scroll !== scrollY) {
      this.setState ({
        scroll: scrollY
      })
  
      if ( innerHeight * 8 <=  scrollY && this.props.model ==="model3") {
        this.setState ({ logoColor: true })
      } else if (innerHeight * 8 <= scrollY ) {
        this.setState ({ logoColor: false })
      } else if ( innerHeight * 7 <=  scrollY ) {
        this.setState ({ logoColor: true })
      } else if ( innerHeight * 6 <= scrollY ) {
        this.setState ({ logoColor: false })
      } else if ( innerHeight * 5 <= scrollY ) {
        this.setState ({ logoColor: true })
      } else if ( innerHeight * 1 <=  scrollY) {
        this.setState ({ logoColor: false })
      }
    }
  }

  makeLabel = (label) => {
  return label.map((val, idx) =>
        <a href={`#${val.id}`} key={idx}>
          <li className="sideNavItem">
            <div className="sideNavTab" />
            <div className={`sideNavLabel ${this.state.logoColor ? "invert" : ""}`}>{val.text}</div>
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