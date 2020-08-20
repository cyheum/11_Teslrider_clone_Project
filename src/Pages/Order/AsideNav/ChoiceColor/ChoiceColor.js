import React, { Component } from "react";
import "./ChoiceColor.scss";

export default class ChoiceColor extends Component {
  constructor() {
    super();
    this.state = {
      isColorBtnPushedAt: 0,
      isWheelBtnPushedAt: 0,
      aboutChoiceData: [
        {
          choiceBtn: [
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppsw.png?&version=v0028d202008130539",
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_pbsb.png?&version=v0028d202008130539",
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_pmng.png?&version=v0028d202008130539",
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppsb.png?&version=v0028d202008130539",
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODEL3/UI/ui_swat_col_ppmr.png?&version=v0028d202008130539",
          ],
          title: "색상 선택하기",
          description: "Pearl White Multi-Coat",
          include: "포함",
        },
        {
          choiceBtn: [
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODELS/UI/ui_swat_whl_wtas.png?&version=v0028d202008130539",
            "https://static-assets.tesla.com/share/tesla_design_studio_assets/MODELS/UI/ui_swat_whl_wttc.png?&version=v0028d202008130539",
          ],
          title: "휠 선택하기",
          description: "19인치 실버 휠",
          include: "포함",
        },
      ],
    };
  }

  handleClickChangeBtn = (index, num) => {
    if (index === 0) {
      this.setState({
        isColorBtnPushedAt: num,
      });
    } else {
      this.setState({
        isWheelBtnPushedAt: num,
      });
    }
  };

  setButtonClassName = (index, btnIdx) => {
    const { isColorBtnPushedAt, isWheelBtnPushedAt } = this.state;
    if (index === 0) {
      return isColorBtnPushedAt === btnIdx
        ? "choiceColorButton pushed"
        : "choiceColorButton normal";
    } else {
      return isWheelBtnPushedAt === btnIdx
        ? "choiceColorButton pushed"
        : "choiceColorButton normal";
    }
  };

  render() {
    const { aboutChoiceData } = this.state;
    return (
      <div className="ChoiceColor">
        {aboutChoiceData.map((el, index) => {
          const { choiceBtn, title, description, include } = el;
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
                        onClick={() => this.handleClickChangeBtn(index, btnIdx)}
                        alt="colorbuttonImg"
                        src={style}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="colorDescription">
                <span>{description}</span>
                <span>{include}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
