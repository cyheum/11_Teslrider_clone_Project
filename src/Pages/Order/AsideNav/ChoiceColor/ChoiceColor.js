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
      handleClickChangeBtn,
      batteryIsPushedAt,
      totalData: {
        isColorBtnPushedAt,
        isWheelBtnPushedAt,
        data: {
          icons: { battery_value, color_icon, wheel_icon },
        },
      },
    } = this.props;
    const colorWheels = [color_icon, wheel_icon];
    return (
      <div className="ChoiceColor">
        {colorWheels &&
          colorWheels.map((el, index) => {
            const btnPushedAt = index ? isWheelBtnPushedAt : isColorBtnPushedAt;
            return (
              <div className="choiceContainer" key={index}>
                <div className="headText">{aboutChoiceData[index].title}</div>
                <div className="wrapChoiceColorButton">
                  {el.map((style, btnIdx) => {
                    const keyName = Object.keys(style);
                    if (index) {
                      keyName =
                        battery_value[batteryIsPushedAt] === "Long Range"
                          ? keyName.slice(0, 2)
                          : keyName.slice(2);
                    }
                    return (
                      <div
                        className={this.setButtonClassName(
                          index,
                          style[keyName]
                        )}
                        key={btnIdx}
                      >
                        <img
                          onClick={() =>
                            handleClickChangeBtn(index, style[keyName])
                          }
                          alt="colorbuttonImg"
                          src={style[keyName]}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="colorDescription">
                  <span>{aboutChoiceData[index].description[btnPushedAt]}</span>
                  <span>{aboutChoiceData[index].price[btnPushedAt]}</span>
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
    description: {
      16: "Pearl White Multi-Coat",
      17: "Solid Black",
      18: "Midnight Silver Metallic",
      19: "Deep Blue Metallic",
      20: "Red Multi-Coat",
    },
    price: {
      16: "포함",
      17: "₩1,929,000",
      18: "₩1,929,000",
      19: "₩1,929,000",
      20: "₩3,279,000",
    },
  },
  {
    title: "휠 선택하기",
    description: { 15: "19인치 실버 휠", 16: "21인치 소닉 카본 트윈 터빈 휠" },
    price: { 15: "포함", 16: "₩4,672,000" },
  },
];
