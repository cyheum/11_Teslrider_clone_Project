import React, { Component } from "react";
import SecNav from "../SecNav/SecNav";
import SubjectAndBtn2 from "../SubjectAndBtn/SubjectAndBtn2";
import "./MainModelY.scss";

class MainModelY extends Component {
  constructor() {
    super();
    this.state = {
      subjectName: "Model Y",
      BtnName: "자세히 알아보기",
    };
  }

  render() {
    return (
      <div className="mainModelY">
        <SecNav />
        <SubjectAndBtn2
          subjectName={this.state.subjectName}
          BtnName={this.state.BtnName}
        />
      </div>
    );
  }
}

export default MainModelY;
