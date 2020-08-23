import React, { Component } from "react";
import "./SubjectAndBtnOfPower.scss";

class SubjectAndBtnOfPower extends Component {
  render() {
    const { subjectName, subName, btnName } = this.props;
    return (
      <div className="SubjectAndBtnOfPower">
        <div className="subjectAndBtn">
          <h1 className="mainModelNames">{this.props.subjectName}</h1>
        </div>
        <div className="subName">{this.props.subName}</div>
        <div className="mainOrderBtnLine">
          <div className="mainOrderBtnContainer">
            <a className="mainOrderbtn" href="/" title="Model 3 주문하기">
              {this.props.btnName}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectAndBtnOfPower;
