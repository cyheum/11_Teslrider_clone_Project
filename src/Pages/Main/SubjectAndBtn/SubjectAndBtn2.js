import React, { Component } from "react";
import "./SubjectAndBtn2.scss";

class SubjectAndBtn2 extends Component {
  render() {
    return (
      <>
        <div className="mainModelNamesLine">
          <h1 className="mainModelNames">{this.props.subjectName}</h1>
        </div>
        <div className="mainOrderBtnLine">
          <div className="mainOrderBtnContainer">
            <a className="mainOrderbtn" href="/" title="Model 3 주문하기">
              {this.props.BtnName}
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default SubjectAndBtn2;
