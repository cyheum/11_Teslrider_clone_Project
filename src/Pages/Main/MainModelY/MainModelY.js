import React, { Component } from "react";
import SecNav from "../SecNav/SecNav";
import SubjectAndBtnSimple from "../SubjectAndBtn/SubjectAndBtnSimple";
import "./MainModelY.scss";

class MainModelY extends Component {
  constructor() {
    super();
    this.state = {
      subjectName: "Model Y",
      btnName: "자세히 알아보기",
    };
  }

  render() {
    const { subjectName, btnName } = this.state;
    return (
      <div className="MainModelY">
        <SecNav />
        <SubjectAndBtnSimple subjectName={subjectName} btnName={btnName} />
      </div>
    );
  }
}

export default MainModelY;
