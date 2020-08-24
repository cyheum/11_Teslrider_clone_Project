import React, { Component } from "react";
import "./SubjectAndBtnSimple.scss";

class SubjectAndBtnSimple extends Component {
  render() {
    const { subjectName, btnName } = this.props;
    return (
      <div className="SubjectAndBtnSimple">
        <div className="subjectAndBtn">
          <h1 className="mainModelNames">{subjectName}</h1>
        </div>
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

export default SubjectAndBtnSimple;
