import React, { Component } from 'react';
import DialIcon from './DialIcon';
import './SpecSum.scss';

class SpecSum extends Component {
  render() {
    return (
      <div className="SpecSum">
        <ul className="specSumContainer">
          <li className="specSumContents">
            <div className="contentsHeder">AWD</div>
            <div className="contentsText">
              듀얼 모터 AWD로 어떠한 기상 조건에서도 트랙션 및 토크를 즉시 제어
            </div>
          </li>
          <li className="specSumContents">
            <div className="contentsHeder">
              <section className="dialAnimate">
                <DialIcon />
                <div className="digits">
                  <div className="digisitsNum">2</div>
                  <span className="digisitsNum">.</span>
                  <div className="digisitsNum">5</div>
                  <span className="digisitsNum">초</span>
                </div>
                </section>
            </div>
            <div className="contentsText">
              0-100 km/h 도달 시간이 2.5에 불과하여 지구 상에서 가장 빠른 가속을 자랑하는 세단입니다.
            </div>
          </li>
          <li className="specSumContents">
            <div className="contentsHeder">261 km/h</div>
            <div className="contentsText">향상된 핸들링 및 공기역학을 통해 최고 속도 261km/h 달성</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SpecSum;