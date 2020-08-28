import React, { Component } from "react";
import "./SubjectAndBtnOfPower.scss";

class SubjectAndBtnOfPower extends Component {
  render() {
    const { subjectName, subName, btnName } = this.props;
    return (
      <div className="SubjectAndBtnOfPower">
        <div className="subjectAndBtn">
          <h1 className="mainModelNames">{subjectName}</h1>
        </div>
        <div className="subName">{subName}</div>
        <div className="mainOrderBtnLine">
          <div className="mainOrderBtnContainer">
            <a className="mainOrderbtn" href="/" title="Model 3 주문하기">
              {btnName}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectAndBtnOfPower;
