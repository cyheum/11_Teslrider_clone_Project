import React, { Component } from "react";
import "./ChoiceAutopilot.scss";

export default class ChoiceAutopilot extends Component {
  constructor() {
    super();
    this.state = {
      autopilotDescription: [
        "내비게이트 온 오토파일럿: 교차로와 저속 추행 차량 추월 등을 포함한 고속도로 진입로 및 진출 차선에서 자동 주행합니다.",
        "자동 차선 변경: 고속도로 주행 시 자동으로 차선을 변경합니다.",
        "자동 주차(Autopark): 평행 및 직각 주차 공간 감지합니다.",
        "차량 호출(Summon): 차고에서 주차된 차량을 호출할 수 있습니다.",
      ],
    };
  }
  render() {
    const { autopilotDescription } = this.state;
    return (
      <div className="ChoiceAutopilot">
        <div className="wrapMainTitle">
          <div>
            <div className="mainTitle">오토파일럿</div>
            <span>포함</span>
          </div>
          <ul>
            <li>
              주행 중인 차선의 차량 및 보행자에 맞춰 차량의 조향, 속도 조절 및
              차량 제동을 할 수 있습니다.
            </li>
          </ul>
        </div>
        <div className="mainTitle">완전 자율 주행 기능</div>
        <ul>
          {autopilotDescription.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <div className="subTitle">출시예정:</div>
        <ul>
          <li>교통 신호등 및 정지 표지판을 인지하여 작동합니다.</li>
          <li>시내에서 자동 주행합니다.</li>
        </ul>
        <button>
          <div>
            <input type="checkbox" />
            옵션 선택하기
          </div>
          <div>₩9,043,000</div>
        </button>
        <div className="addDescription">
          완전 자율 주행 기능은 차량 인도 후에도 구입할 수 있으며, 새로운 기능이
          출시됨에 따라 추후에 가격이 인상될 수 있습니다.
        </div>
        <div className="lastDescription">
          현재 활성화된 오토파일럿 기능은 운전자의 적극적인 제어가 필요하며 완전
          자율 주행이 가능한 것은 아닙니다. 이 기능을 활성화하고 실제로
          사용하기까지 수십억 마일의 주행 테스트를 통해 차량의 자율 주행 능력이
          운전자의 주행 능력보다 크게 앞선다는 신뢰성과 규제 기관의 승인에 달려
          있으며 일부 관할권에서는 규제 승인이 더 오래 걸릴 수 있습니다. 자율
          주행 기능이 진화함에 따라 차량도 무선 소프트웨어(Over-The-Air)를 통해
          지속적으로 업그레이드 됩니다.
        </div>
      </div>
    );
  }
}
