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
      agreeList: [
        "Tesla의 개인정보처리방침 에 따른 개인정보 수집 이용 및 국내외 사업자에 대한 개인정보 제공에 동의 합니다.",
        "Tesla의 자동차구매계약 상세조건 및 수퍼차저 공정 이용 정책에 동의합니다",
        "Tesla의 위치기반서비스약관 에 동의합니다.",
      ],
      creditCardInfo: {
        cardNameNum: ["카드상의 이름", "카드 번호"],
        expiration: ["만료 월", "만료 연도"],
      },
      userAdressInfo: {
        mainAdress: ["청구지 주소1", "청구지 주소2"],
        detailAdress: ["구/군/시", "우편번호", "국가"],
      },
    };
  }
  render() {
    const {
      userInfoTitle,
      agreeList,
      creditCardInfo: { cardNameNum, expiration },
      userAdressInfo: { mainAdress, detailAdress },
    } = this.state;
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
          <div className="agreeBtnContainer">
            {agreeList.map((text) => {
              return (
                <div className="wrapAgreeCheckBox">
                  <div className="agreeCheckBox"></div>
                  <div>{text}</div>
                </div>
              );
            })}
          </div>
          <div className="paymentInfoTitle">
            <div>결제</div>
            <div>
              주문 수수료: ₩100,000 (환불 불가). 주문 후 디자인을 수정할 수
              있습니다.
            </div>
          </div>
          <div className="userCreditCardInfo">
            <div className="titleAboutSection">신용카드</div>
            {cardNameNum.map((title) => {
              return (
                <div className="inputUserCardInfoContainer">
                  <div>{title}</div>
                  <input type="text" />
                </div>
              );
            })}
            <div className="wrapUserExpirationCardInfo">
              {expiration.map((title) => {
                return (
                  <div className="inputUserExpirationCardInfoContainer">
                    <div>{title}</div>
                    <input type="text" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="userAdressContainer">
            <div className="titleAboutSection">결제 정보</div>
            {mainAdress.map((title) => {
              return (
                <div className="inputUserAdressContainer">
                  <div>{title}</div>
                  <input type="text" />
                </div>
              );
            })}
            <div className="wrapUserDetailAdressInfo">
              {detailAdress.map((title) => {
                return (
                  <div className="inputUserDetailAdressInfoContainer">
                    <div>{title}</div>
                    <input type="text" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="agreeBtnContainer">
            <div className="wrapAgreeCheckBox">
              <div className="agreeCheckBox"></div>
              <div>
                Tesla가 서비스 지불 조건에 따라 향후 거래를 위해 결제 수단
                정보를 저장할 수 있도록 허용합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
