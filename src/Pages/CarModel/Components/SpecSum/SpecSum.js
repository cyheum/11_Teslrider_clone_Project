import React, { Component } from 'react';
import DialIcon from './DialIcon';
import './SpecSum.scss';

class SpecSum extends Component {
  constructor() {
    super();
    this.state = {
      innerCirlce: false,
      dailParams: false,
      distance: 0,
      speed: 0,
      speedT: 0,
      loading: 0,
      activeClass: "",
    };
  }

  componentDidMount () {
    setTimeout(()=>this.setState({
      innerCirlce: true,
      dailParams: true
    }), 500)
    this.countNum("distance", 261);
    this.countNum("speed", 2);
    this.countNum("speedT", 5);
    this.delay();
  }

  delay = () => {
    setTimeout(() => {
      this.setState(() => ({ activeClass: "appearComponent" }));
    }, 100);
  };

  countNum = (name, limit) => {
    let increase = setInterval(() => {
      this.setState({
        [name]: this.state[name] + 1,
      });
      if (this.state[name] > limit - 1) {
        clearInterval(increase);
      }
    }, 1);
  };

  render() {
    const { distance, speed, speedT } = this.state;
    return (
      <div className="SpecSum">
        <ul className="specSumContainer">
          <li className="specSumContents">
            <div className="contentsHeder">AWD</div>
            <div className="contentsText">
              듀얼 모터 AWD로 어떠한 기상 조건에서도 트랙션 및 토크를 즉시 제어
            </div>
          </li>
          <li className="specSumContents border">
            <div className="contentsHeder">
              <section className="dialAnimate">
                <DialIcon />
                <div className="digits">
                  <div className="digisitsNum">{speed}</div>
                  <span className="digisitsNum">.</span>
                  <div className="digisitsNum">{speedT}</div>
                  <span className="digisitsNum">초</span>
                </div>
                </section>
            </div>
            <div className="contentsText">
              0-100 km/h 도달 시간이 2.5에 불과하여 지구 상에서 가장 빠른 가속을 자랑하는 세단입니다.
            </div>
          </li>
          <li className="specSumContents">
            <div className="contentsHeder">{distance} km/h</div>
            <div className="contentsText">향상된 핸들링 및 공기역학을 통해 최고 속도 261km/h 달성</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SpecSum;