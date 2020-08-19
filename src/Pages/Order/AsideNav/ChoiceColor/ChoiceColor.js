import React, { Component } from "react";
import "./ChoiceColor.scss";

export default class ChoiceColor extends Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    const { aboutChoiceData } = this.state;
    return (
      <div className="ChoiceColor">
        {aboutChoiceData.map((el) => {
          const { choiceBtn, title, description, include } = el;
          return (
            <div className="choiceContainer">
              <div className="headText">{title}</div>
              <div className="wrapChoiceColorButton">
                {choiceBtn.map((style) => {
                  return (
                    <div className="choiceColorButton">
                      <img src={style} alt="colorbuttonImg" />
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
