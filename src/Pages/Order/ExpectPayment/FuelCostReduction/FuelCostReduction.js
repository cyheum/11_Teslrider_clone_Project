import React, { Component } from "react";
import "./FuelCostReduction.scss";

export default class FuelCostReduction extends Component {
  constructor() {
    super();
    this.state = {
      distance: 12000,
      fuel: 1689.87,
    };
  }
  render() {
    const { distance, fuel } = this.state;
    return (
      <div className="FuelCostReduction">
        <div className="title">연료비 절감 비용</div>
        <div>전기차는 가솔린 구동 차량에 비해 연료비가 저렴합니다.</div>
        <div className="distanceFuelContainer">
          {fuelCostReductionData.map((el, idx) => {
            const newKey = idx ? fuel : distance;
            return (
              <div key={el.title} className="distanceFuel">
                <div className="inputBoxTitle">{el.title}</div>
                <div className="wrapInputBox">
                  <input type="text" value={newKey}></input>
                  <span>{el.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="description">
          전기차는 휘발유 구동 차량에 비해 연료비가 저렴합니다. 평균적인
          운전자는 연간 약 12,000km를 주행하며 ₩1,700,000 의 연료비를
          지출합니다. 이와 비교해 볼 때, Model S로 동일한 거리를 주행할 경우
          드는 전기 비용은 4 배 더 낮습니다. 평균 자동차 소유 기간을 5년으로
          가정할 때 이는 연료 비용으로 약 ₩6,800,000 을(를) 절감할 수 있는
          수치입니다.
        </div>
      </div>
    );
  }
}

const fuelCostReductionData = [
  { title: "주행 거리", unit: "Km / 년" },
  { title: "가솔린", unit: "/ 리터" },
];
