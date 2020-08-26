import React, { Component } from "react";
import CommonNav from "../CommonNav/CommonNav";
import SubjectAndBtn from "../SubjectAndBtn/SubjectAndBtn";
import FooterBtn from "../Footerbtn/FooterBtn";
import "./Models.scss";

class Models extends Component {
  constructor() {
    super();
    this.state = {
      title: "Model 3",
      backgroundPosition: "50%",
      storeBtn: false,
      btnColorS: "",
      btnBorderColorS: "",
      btnColor3: "white",
      btnBorderColor3: "white",
      btnColorX: "",
      btnBorderColorX: "",
    };
  }

  viewChangeEffect = (e) => {
    if (e.target.className === "model3") {
      this.setState({
        title: "Model 3",
        backgroundPosition: "50%",
        storeBtn: false,
        btnColorS: "",
        btnBorderColorS: "",
        btnColor3: "white",
        btnBorderColor3: "white",
        btnColorX: "",
        btnBorderColorX: "",
      });
    } else if (e.target.className === "modelS") {
      this.setState({
        title: "Model S",
        backgroundPosition: "0%",
        storeBtn: true,
        btnColorS: "white",
        btnBorderColorS: "white",
        btnColor3: "",
        btnBorderColor3: "",
        btnColorX: "",
        btnBorderColorX: "",
      });
    } else {
      this.setState({
        title: "Model X",
        backgroundPosition: "100%",
        storeBtn: true,
        btnColorS: "",
        btnBorderColorS: "",
        btnColor3: "",
        btnBorderColor3: "",
        btnColorX: "white",
        btnBorderColorX: "white",
      });
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
