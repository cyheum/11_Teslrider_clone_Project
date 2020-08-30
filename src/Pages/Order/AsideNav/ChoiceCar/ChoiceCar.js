import React, { Component } from "react";
import "./ChoiceCar.scss";

export default class ChoiceCar extends Component {
  render() {
    const { batteryIsPushedAt, icons } = this.props.totalData;
    if (!icons || !batteryIsPushedAt) return <div />;
    const { handleClickChangeCarBtn } = this.props;
    const { battery_value } = icons;
    return (
      <div className="ChoiceCar">
        <div className="headText">차량 선택하기</div>
        <div className="descriptionText">
          모든 차량에는 듀얼 모터 <span>AWD</span>, 어댑티브 에어서스펜션,
          프리미엄 인테리어 및 사운드 시스템이 포함됩니다.
        </div>
        <div className="wrapButton">
          {battery_value.map((el, idx) => {
            const keyName = Object.keys(el)[0];
            return (
              <button
                key={keyName}
                className={`choiceCarBtn ${
                  batteryIsPushedAt === keyName ? "pushed" : "normal"
                }`}
                onClick={() =>
                  handleClickChangeCarBtn(keyName, idx, "batteryIs")
                }
              >
                <span>{el[keyName]}</span>
                <span>{Price[idx]}</span>
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

const Price = ["₩107,990,000", "₩132,990,000"];
