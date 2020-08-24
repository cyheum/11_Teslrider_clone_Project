import React, { Component } from 'react';
import Aside from '../Components/Aside';
import './Secure.scss';

class Secure extends Component {
  render() {
    return (
      <div className="Secure">
        <Aside dataname={"secure"}/>
        <main className="main">
          <div className="mainImgContainer">
            <ul className="mainSpecs">
              <li className="SpecItem itemCrush">
                <span className="spectItemText">전방 충돌 방지</span>
              </li>
              <li className="SpecItem itemShock">
                <span className="spectItemText">측면 충격 보호</span>
              </li>
              <li className="SpecItem itemReverse">
                <span className="spectItemText">매우 낮은 전복 위험</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Secure;