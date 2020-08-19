import React, { Component } from "react";
import "./Payment.scss";

export default class Payment extends Component {
  constructor() {
    super();
    this.state = {
      userInfoTitle: [
        "이메일 주소",
        "이름 (영문)",
        "성명 (한글)",
        "전화번호",
        "성(영문)",
      ],
    };
  }
  render() {
    const { userInfoTitle } = this.state;
    return (
      <div className="Payment">
        <div className="fixDesignBtn">
          <span>{`<`}</span>
          <span>디자인 편집</span>
        </div>
        <div className="paymentInfo">
          <div className="checkBoxContainer">
            <div className="titleAboutUserInfo">계정 세부 사항 입력</div>
            <div className="checkBoxList">
              <div className="checkBox">
                <div></div>
                개인
              </div>
              <div className="checkBox">
                <div></div>
                기업
              </div>
            </div>
          </div>
          <div className="wrapInputUserInfo">
            {userInfoTitle.map((title) => {
              return (
                <div className="inputUserInfoContainer">
                  <div>{title}</div>
                  <input type="text" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
