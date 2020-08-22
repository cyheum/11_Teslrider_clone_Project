import React, { Component } from "react";
import SubjectAndBtnSimple from "../SubjectAndBtn/SubjectAndBtnSimple";
import FooterBtnContainer from "./FooterBtnContainer";
import KnowingTeslaVideo from "../ImgAndVideo/KnowingTeslaVideo";
import "./KnowingTesla.scss";

const knowingTeslaInfo = {
  subjectName: "Tesla 알아보기",
  btnName: "시승 신청",
};

class KnowingTesla extends Component {
  render() {
    const { subjectName, btnName } = knowingTeslaInfo;
    return (
      <div className="KnowingTesla">
        <SubjectAndBtnSimple subjectName={subjectName} btnName={btnName} />
        <KnowingTeslaVideo />
        <FooterBtnContainer />
      </div>
    );
  }
}

export default KnowingTesla;
