import React, { Component } from "react";
import MainStoreBtnContainer from "./MainStoreBtnContainer";
import "./SubjectAndBtn.scss";

class SubjectAndBtn extends Component {
  render() {
    const { title, storeBtn } = this.props;
    return (
      <div className="SubjectAndBtn">
        <div className="subjectAndBtn">
          <h1 className="mainModelNames">{title}</h1>
        </div>
        <div className="mainOrderBtnLine">
          <div className="mainOrderBtnContainer">
            <a className="mainOrderbtn" href="/order/Model_S" title="Model 3 주문하기">
              지금 주문하기
            </a>
          </div>
          {storeBtn === false ? null : <MainStoreBtnContainer />}
        </div>
      </div>
    );
  }
}

export default SubjectAndBtn;
