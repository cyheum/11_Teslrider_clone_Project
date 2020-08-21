import React, { Component } from "react";
import SecNav from "../SecNav/SecNav";
import SubjectAndBtnSimple from "../SubjectAndBtn/SubjectAndBtnSimple";
import FooterBtnContainer from "./FooterBtnContainer";
import KnowingTeslaVideo from "../ImgAndVideo/KnowingTeslaVideo";
import "./KnowingTesla.scss";

class KnowingTesla extends Component {
  constructor() {
    super();
    this.state = {
      subjectName: "Tesla 알아보기",
      btnName: "시승 신청",
    };
  }

  render() {
    const { subjectName, btnName } = this.state;
    return (
      <div className="KnowingTesla">
        <SecNav />
        <SubjectAndBtnSimple subjectName={subjectName} btnName={btnName} />
        <KnowingTeslaVideo />
        <FooterBtnContainer />
      </div>
    );
  }
}

export default KnowingTesla;
