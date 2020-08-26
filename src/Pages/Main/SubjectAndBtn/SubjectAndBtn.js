import React, { Component } from "react";
import MainStoreBtnContainer from "./MainStoreBtnContainer";
import "./SubjectAndBtn.scss";

class SubjectAndBtn extends Component {
  render() {
    return (
      <div className="SubjectAndBtn">
        <div className="subjectAndBtn">
          <h1 className="mainModelNames">{this.props.title}</h1>
        </div>
        <div className="mainOrderBtnLine">
          <div className="mainOrderBtnContainer">
            <a className="mainOrderbtn" href="/">
              지금 주문하기
            </a>
          </div>
          {this.props.storeBtn === false ? null : <MainStoreBtnContainer />}
        </div>
      </div>
    );
  }
}

export default SubjectAndBtn;
