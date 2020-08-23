import React, { Component } from "react";
import "./Payment.scss";
import InputUserInfo from "./InputUserInfo/InputUserInfo";
import AgreeCheckBox from "./AgreeCheckBox/AgreeCheckBox";
import InputUserExpirationCardInfo from "./InputUserExpirationCardInfo/InputUserExpirationCardInfo";
import InputUserAddress from "./InputUserAddress/InputUserAddress";
import InputUserDetailAddressInfo from "./InputUserDetailAddressInfo/InputUserDetailAddressInfo";

export default class Payment extends Component {
  state = {
    isEnterprise: 1,
  };

  clickHandlerChangeBuyer = (index) => {
    this.setState({
      isEnterprise: index,
    });
  };

  render() {
    const {
      userInfoTitle,
      agreeList,
      creditCardInfo: { cardNameNum, expiration },
      userAddressInfo: { mainAddress, detailAddress },
    } = paymentData;
    const { isEnterprise } = this.state;
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
              <div
                className="wrapCheckBox"
                onClick={() => this.clickHandlerChangeBuyer(1)}
              >
                <div
                  className={
                    isEnterprise ? "checkBox checked" : "checkBox normal"
                  }
                >
                  <div
                    className={
                      isEnterprise
                        ? "circleInCheckBox normal"
                        : "circleInCheckBox hidden"
                    }
                  />
                </div>
                개인
              </div>
              <div
                className="wrapCheckBox"
                onClick={() => this.clickHandlerChangeBuyer(0)}
              >
                <div
                  className={
                    isEnterprise ? "checkBox normal" : "checkBox checked"
                  }
                >
                  <div
                    className={
                      isEnterprise
                        ? "circleInCheckBox hidden"
                        : "circleInCheckBox normal"
                    }
                  />
                </div>
                기업
              </div>
            </div>
          </div>
          <div className="wrapInputUserInfo">
            {userInfoTitle.map((title, index) => {
              return <InputUserInfo key={index} title={title} />;
            })}
          </div>
          <div className="agreeBtnContainer">
            {agreeList.map((text, index) => {
              return <AgreeCheckBox key={index} text={text} />;
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
                <div className="inputUserCardInfoContainer" key={title}>
                  <div>{title}</div>
                  <input type="text" />
                </div>
              );
            })}
            <div className="wrapUserExpirationCardInfo">
              {expiration.map((title) => {
                return <InputUserExpirationCardInfo key={title} />;
              })}
            </div>
          </div>
          <div className="userAddressContainer">
            <div className="titleAboutSection">결제 정보</div>
            {mainAddress.map((title) => {
              return <InputUserAddress key={title} title={title} />;
            })}
            <div className="wrapUserDetailAddressInfo">
              {detailAddress.map((title) => {
                return <InputUserDetailAddressInfo key={title} title={title} />;
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

const paymentData = {
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
  userAddressInfo: {
    mainAddress: ["청구지 주소1", "청구지 주소2"],
    detailAddress: ["구/군/시", "우편번호", "국가"],
  },
};
