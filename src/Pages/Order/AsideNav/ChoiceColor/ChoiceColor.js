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
      totalData: { isColorBtnPushedAt, isWheelBtnPushedAt },
    } = this.props;
    return (
      <div className="ChoiceColor">
        {aboutChoiceData.map((el, index) => {
          const { choiceBtn, title, description, price } = el;
          return (
            <div className="choiceContainer" key={index}>
              <div className="headText">{title}</div>
              <div className="wrapChoiceColorButton">
                {choiceBtn.map((style, btnIdx) => {
                  return (
                    <div
                      className={this.setButtonClassName(index, btnIdx)}
                      key={btnIdx}
                    >
                      <img
                        onClick={() => handleClickChangeBtn(index, btnIdx)}
                        alt="colorbuttonImg"
                        src={style}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="colorDescription">
                <span>
                  {index
                    ? description[isWheelBtnPushedAt]
                    : description[isColorBtnPushedAt]}
                </span>
                <span>
                  {index
                    ? price[isWheelBtnPushedAt]
                    : price[isColorBtnPushedAt]}
                </span>
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
    choiceBtn: [
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppsw.png?&version=v0028d202008130539",
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_pbsb.png?&version=v0028d202008130539",
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_pmng.png?&version=v0028d202008130539",
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppsb.png?&version=v0028d202008130539",
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppmr.png?&version=v0028d202008130539",
    ],
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
    choiceBtn: [
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODELS/UI/ui_swat_whl_wtas.png?&version=v0028d202008130539",
      "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODELS/UI/ui_swat_whl_wttc.png?&version=v0028d202008130539",
    ],
    title: "휠 선택하기",
    description: ["19인치 실버 휠", "21인치 소닉 카본 트윈 터빈 휠"],
    price: ["포함", "₩4,672,000"],
  },
];
