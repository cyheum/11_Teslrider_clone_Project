import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

class Aside extends Component {
  render() {
    return (
      <div className="Aside">
        <div className="asideContainer">
            <div className="asideHeader">
            <header>
              <div className="upperHeader">주행 가능 거리</div>
              <div className="lowerHeader">자유로운 장거리 여행</div>
            </header>
          </div>
          <div className="asideContents">
            <p className="asideContentText">업계 최고 수준의 주행 가능 거리와 편리한 충전 옵션을 자랑하는 Model S와 함께 전 세계 어디든 원하는 곳으로 떠날 수 있습니다.</p>
            <div className="asideLowBtn">
              <div className="asideLowLeft orderBtnText">
                <div className="asideLowLeftBtnWrap">
                  <div className="asideLowLeftBtn"></div>
                </div>
                자세히 알아보기
              </div>
              <div className="asideLowright">
                <Link to="/model" className="orderBtn">
                  <div className="orderBtnText">지금 주문하기</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;