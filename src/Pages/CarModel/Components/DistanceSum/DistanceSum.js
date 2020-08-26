import React, { Component } from 'react';
import './DistanceSum.scss';

class DistanceSum extends Component {

  render() {
    return (
      <div className="DistanceSum">
        <ul className="sumContainer">
          <li className="sumContents">
            <div className="contentsHeder">487</div>
            <span className="headerParams"> km</span>
            <div className="contentsText">
              1회 충전으로 487 km 이상 충전 주행 가능
            </div>
          </li>
          <li className="sumContents border">
            <div className="contentsHeder">15 </div>
            <span className="headerParams"> 분</span>
            <div className="contentsText">
              수퍼차저로 15분 내에 최대 171km 충전
            </div>
          </li>
          <li className="sumContents">
            <div className="contentsHeder">17,000+</div>
            <div className="contentsText">전 세계의 통행량이 많은 경로에</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default DistanceSum;