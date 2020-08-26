import React, { Component } from "react";
import "./FuelCostReduction.scss";

export default class FuelCostReduction extends Component {
  render() {
    return (
      <div className="FuelCostReduction">
        <div className="title">연료비 절감 비용</div>
        <div>전기차는 가솔린 구동 차량에 비해 연료비가 저렴합니다.</div>
        <div className="distanceFuelContainer">
          {fuelCostReductionData.map((el) => {
            return (
              <div key={el.title} className="distanceFuel">
                <div>{el.title}</div>
                <input type="text" />
                <span>Hi</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const fuelCostReductionData = [
  { title: "주행 거리", unit: "Km / 년" },
  { title: "가솔린", unit: "/ 리터" },
];
