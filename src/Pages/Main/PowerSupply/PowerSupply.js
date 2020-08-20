import React, { Component } from "react";
import SubjectAndBtn3 from "../SubjectAndBtn/SubjectAndBtn3";
import FooterBtnContainer from "../KnowingTesla/FooterBtnContainer";
import "./PowerSupply.scss";
import SecNav from "../SecNav/SecNav";

class PowerSupply extends Component {
  constructor() {
    super();
    this.state = {
      subjectName: "모든 전력을 공급",
      subName: "태양광과 Powerwall",
      BtnName: "자세히 알아보기",
    };
  }

  render() {
    return (
      <div className="powerSupply">
        <SecNav />
        <SubjectAndBtn3
          subjectName={this.state.subjectName}
          subName={this.state.subName}
          BtnName={this.state.BtnName}
        />
        <FooterBtnContainer />
      </div>
    );
  }
}

export default PowerSupply;
