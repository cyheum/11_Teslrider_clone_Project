import React, { Component } from 'react';
import './SideNav.scss';

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <ul className="sideNavContainer">
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">model S</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">안전</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">퍼포먼스</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">주행 가능 거리</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">오토파일럿</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">인테리어</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">외부</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">사양</div>
          </li>
          <li className="sideNavItem">
            <div className="sideNavTab"></div>
            <div className="sideNavLabel">주문하기</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideNav;