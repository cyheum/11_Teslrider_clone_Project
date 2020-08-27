import React, { Component } from "react";
import SubjectAndBtnSimple from "../SubjectAndBtn/SubjectAndBtnSimple";
import CommonFooter from "../../../Components/CommonFooter/CommonFooter";
import "./MainModelY.scss";

const mainModelYInfo = {
  subjectName: "Model Y",
  btnName: "자세히 알아보기",
};

class MainModelY extends Component {
  render() {
    const { subjectName, btnName } = mainModelYInfo;
    return (
      <div className="MainModelY">
        <SubjectAndBtnSimple subjectName={subjectName} btnName={btnName} />
        <CommonFooter />
      </div>
    );
  }
}

export default MainModelY;
