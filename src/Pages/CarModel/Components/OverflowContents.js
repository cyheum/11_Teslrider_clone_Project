import React, { Component } from 'react';
import './OverflowContents.scss';

class OverflowContents extends Component {
  render() {
    return (
      <div className="OverflowContents">
        <div className="overflowContentsLeft">
          <ul className="overflowItemContainer">
            <li className="overflowItems">
              <div className="overflowItemsHeader">360°</div>
              <div className="overflowItemsContent">후방, 측방 및 전방 카메라가 최고의 가시성 제공</div>
            </li>
            <li className="overflowItems">
              <div className="overflowItemsHeader">160m</div>
              <div className="overflowItemsContent">전방 레이더가 원거리 물체에 대한 장거리 탐지 제공</div>
            </li>
            <li className="overflowItems">
              <div className="overflowItemsHeader">
                <div className="overflowItemsHeaderLast" />
                  <span>울트라소닉 센서</span>
                </div>
              <div className="overflowItemsContent">주변 차량 감지를 통한 잠재적 충돌 방지 및 주차 보조</div>
            </li>
          </ul>
        </div>
        <div className="overflowContentsCenter" />
        <div className="overflowContentsright" />
    </div>
    );
  }
}

export default OverflowContents;