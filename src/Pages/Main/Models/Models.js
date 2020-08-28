import React, { Component } from "react";
import CommonNav from "../../../Components/CommonNav/CommonNav";
import SubjectAndBtn from "../SubjectAndBtn/SubjectAndBtn";
import FooterBtn from "../Footerbtn/FooterBtn";
import modelsData from "./modelsData";
import "./Models.scss";

class Models extends Component {
  constructor() {
    super();
    this.state = modelsData.model3;
  }

  viewChangeEffect = (e) => {
    if (e.target.className === "model3") {
      this.setState(modelsData.model3);
    } else if (e.target.className === "modelS") {
      this.setState(modelsData.modelS);
    } else {
      this.setState(modelsData.modelX);
    }
  };

  render() {
    const {
      title,
      backgroundPosition,
      storeBtn,
      btnColor3,
      btnBorderColor3,
      btnColorS,
      btnBorderColorS,
      btnColorX,
      btnBorderColorX,
    } = this.state;
    return (
      <div
        className="Models"
        style={{
          backgroundPosition: backgroundPosition,
          transition: "500ms",
        }}
      >
        <CommonNav />
        <div className="container">
          <SubjectAndBtn title={title} storeBtn={storeBtn} />
          <div className="mainViewBtnsContainer">
            <ul className="mainViewBtns">
              <div>
                <li
                  className="modelS"
                  onClick={this.viewChangeEffect}
                  style={{
                    backgroundColor: btnColorS,
                    border: btnBorderColorS,
                  }}
                />
                <li
                  className="model3"
                  onClick={this.viewChangeEffect}
                  style={{
                    backgroundColor: btnColor3,
                    border: btnBorderColor3,
                  }}
                />
                <li
                  className="modelX"
                  onClick={this.viewChangeEffect}
                  style={{
                    backgroundColor: btnColorX,
                    border: btnBorderColorX,
                  }}
                />
              </div>
              <FooterBtn />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Models;
