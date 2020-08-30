import React, { Component } from "react";
import "./ChoiceColor.scss";

export default class ChoiceColor extends Component {
  setButtonClassName = (index, btnIdx) => {
    const { colorBtnPushedAt, wheelBtnPushedAt } = this.props.totalData;
    const isPushed =
      (index && wheelBtnPushedAt === btnIdx) ||
      (!index && colorBtnPushedAt === btnIdx);
    return `choiceColorButton ${isPushed ? "pushed" : "normal"}`;
  };

  render() {
    const { batteryIsPushedAt, icons } = this.props.totalData;
    if (!icons || !batteryIsPushedAt) return <div />;
    const {
      handleClickChangeBtn,
      totalData: { colorBtnPushedIndex, wheelBtnPushedIndex },
    } = this.props;
    const { battery_value, color_icon, wheel_icon } = icons;
    const colorWheels = [color_icon, wheel_icon];

    return (
      <div className="ChoiceColor">
        {colorWheels.map((el, index) => {
          let newEl = {};
          if (index) {
            newEl =
              battery_value[batteryIsPushedAt] === "Long Range"
                ? el.slice(0, 2)
                : el.slice(2);
          }
          const btnPushedIndex = index
            ? wheelBtnPushedIndex
            : colorBtnPushedIndex;
          return (
            <div className="choiceContainer" key={index}>
              <div className="headText">{aboutChoiceData[index].title}</div>
              <div className="wrapChoiceColorButton">
                {newEl.map((style, btnIdx) => {
                  const keyName = Object.keys(style)[0];
                  const btnName = index ? "wheelBtn" : "colorBtn";
                  return (
                    <div
                      className={this.setButtonClassName(index, keyName)}
                      key={btnIdx}
                    >
                      <img
                        onClick={() =>
                          handleClickChangeBtn(keyName, btnIdx, btnName)
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
