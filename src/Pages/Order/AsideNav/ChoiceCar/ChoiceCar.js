import React, { Component } from "react";
import "./ChoiceCar.scss";

export default class ChoiceCar extends Component {
  render() {
    const {
      handleClickChangeCarBtn,
      totalData: { batteryIsPushedAt },
    } = this.props;
    return (
      <div className="ChoiceCar">
        <div className="headText">차량 선택하기</div>
        <div className="descriptionText">
          모든 차량에는 듀얼 모터 <span>AWD</span>, 어댑티브 에어서스펜션,
          프리미엄 인테리어 및 사운드 시스템이 포함됩니다.
        </div>
        <div className="wrapButton">
          {choiceCarBtn.map(({ option, price }, index) => {
            return (
              <button
                key={index}
                className={
                  batteryIsPushedAt === index
                    ? "choiceCarBtn pushed"
                    : "choiceCarBtn normal"
                }
                onClick={() => handleClickChangeCarBtn(index)}
              >
                <span>{option}</span>
                <span>{price}</span>
              </button>
            );
          })}
        </div>
        <div className="descriptionText">
          <span>Tesla AWD</span>에 탑재된 두 개의 독립 모터는 향상된 효율성과
          우수한 내구성을 제공하며 차량의 유지보수를 최소화하는데 도움이 됩니다.
          또한, <span>Tesla AWD</span>는 전통적인 <span>AWD</span> 시스템과 달리
          전륜 및 후륜에 전달하는 토크를 디지털 방식으로 제어하여 한층 더 뛰어난
          핸들링과 트랙션 컨트롤을 제공합니다.
        </div>
      </div>
    );
  }
}

const choiceCarBtn = [
  { option: "Long Range", price: "₩107,990,000" },
  { option: "Performance", price: "₩132,990,000" },
];
