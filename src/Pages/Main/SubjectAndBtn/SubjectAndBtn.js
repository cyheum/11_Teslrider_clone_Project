import React, { Component } from "react";
import "./SubjectAndBtn.scss";

class SubjectAndBtn extends Component {
  render() {
    return (
      <div className="SubjectAndBtn">
        <div className="subjectAndBtn">
          <h1 className="mainModelNames">Model 3</h1>
        </div>
        <div className="mainOrderBtnLine">
          <div className="mainOrderBtnContainer">
            <a className="mainOrderbtn" href="/" title="Model 3 주문하기">
              지금 주문하기
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectAndBtn;
