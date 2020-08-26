import React, { Component } from 'react';
import Aside from '../Components/Aside';
import './Secure.scss';

class Secure extends Component {
  render() {
    return (
    <div className="Secure" id="2">
        <Aside dataname={"secure"}/>
        <main className="main">
          <div className="mainImgContainer">
            {
            
          }
            <ul className="mainSpecs">
              { LABEL.map(({text}, idx) =>
                (
                  <li className="SpecItem" key={idx}>
                    <span className="spectItemText">{text}</span>
                  </li>
                )
                )}
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

const LABEL = [
  {text: "전방 충돌 방지"},
  {text: "측면 충격 보호"},
  {text: "매우 낮은 전복 위험"},
]

export default Secure;