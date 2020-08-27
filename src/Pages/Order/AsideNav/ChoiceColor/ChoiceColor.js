import React, { Component } from "react";
import "./ChoiceColor.scss";

export default class ChoiceColor extends Component {
  setButtonClassName = (index, btnIdx) => {
    const { isColorBtnPushedAt, isWheelBtnPushedAt } = this.props.totalData;
    const isPushed =
      (index && isWheelBtnPushedAt === btnIdx) ||
      (!index && isColorBtnPushedAt === btnIdx);
    return `choiceColorButton ${isPushed ? "pushed" : "normal"}`;
  };

  render() {
    const {
      batteryIsPushedAt,
      data: { icons },
    } = this.props.totalData;
    if (!icons || !batteryIsPushedAt) return <div />;
    const {
      handleClickChangeBtn,
      totalData: {
        ColorBtnPushedIndex,
        WheelBtnPushedIndex,
        data: {
          icons: { battery_value, color_icon, wheel_icon },
        },
      },
    } = this.props;
    const colorWheels = [color_icon, wheel_icon];
    return (
      <div className="ChoiceColor">
        {colorWheels.map((el, index) => {
          if (index) {
            battery_value[batteryIsPushedAt] === "Long Range"
              ? el.splice(0, 2)
              : el.splice(2);
          }
          const btnPushedIndex = index
            ? WheelBtnPushedIndex
            : ColorBtnPushedIndex;
          return (
            <div className="choiceContainer" key={index}>
              <div className="headText">{aboutChoiceData[index].title}</div>
              <div className="wrapChoiceColorButton">
                {el.map((style, btnIdx) => {
                  const keyName = Object.keys(style)[0];
                  return (
                    <div
                      className={this.setButtonClassName(index, keyName)}
                      key={btnIdx}
                    >
                      <img
                        onClick={() =>
                          handleClickChangeBtn(index, keyName, btnIdx)
                        }
                        alt="colorbuttonImg"
                        src={style[keyName]}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="colorDescription">
                <span>
                  {aboutChoiceData[index].description[btnPushedIndex]}
                </span>
                <span>{aboutChoiceData[index].price[btnPushedIndex]}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const aboutChoiceData = [
  {
    title: "색상 선택하기",
    description: [
      "Pearl White Multi-Coat",
      "Solid Black",
      "Midnight Silver Metallic",
      "Deep Blue Metallic",
      "Red Multi-Coat",
    ],
    price: ["포함", "₩1,929,000", "₩1,929,000", "₩1,929,000", "₩3,279,000"],
  },
  {
    title: "휠 선택하기",
    description: ["19인치 실버 휠", "21인치 소닉 카본 트윈 터빈 휠"],
    price: ["포함", "₩4,672,000"],
  },
];
