import React, { Component } from "react";
import SubjectAndBtnOfPower from "../SubjectAndBtn/SubjectAndBtnOfPower";
import FooterBtnContainer from "../KnowingTesla/FooterBtnContainer";
import SecNav from "../SecNav/SecNav";
import "./PowerSupply.scss";

const powerSupplyInfo = {
  subjectName: "모든 전력을 공급",
  subName: "태양광과 Powerwall",
  btnName: "자세히 알아보기",
};

class PowerSupply extends Component {
  render() {
    const { subjectName, subName, btnName } = powerSupplyInfo;
    return (
      <div className="PowerSupply">
        <SecNav />
        <SubjectAndBtnOfPower
          subjectName={subjectName}
          subName={subName}
          btnName={btnName}
        />
        <FooterBtnContainer />
      </div>
    );
  }
}

export default PowerSupply;
