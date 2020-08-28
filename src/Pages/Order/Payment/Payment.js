import React, { Component } from "react";
import InputUserInfo from "./InputUserInfo/InputUserInfo";
import AgreeCheckBox from "./AgreeCheckBox/AgreeCheckBox";
import InputUserExpirationCardInfo from "./InputUserExpirationCardInfo/InputUserExpirationCardInfo";
import InputUserAddress from "./InputUserAddress/InputUserAddress";
import InputUserDetailAddressInfo from "./InputUserDetailAddressInfo/InputUserDetailAddressInfo";
import BuyerInfo from "./BuyerInfo/BuyerInfo";
import "./Payment.scss";

export default class Payment extends Component {
  state = {
    isEnterprise: 0,
  };

  clickHandlerChangeBuyer = (index) => {
    if (this.state.isEnterprise === index) return;
    this.setState({
      isEnterprise: index,
    });
  };

  render() {
    const {
      buyerInfo,
      infoTitleList,
      agreeList,
      creditCardInfo: { cardNameNum, expiration },
      userAddressInfo: { mainAddress, detailAddress, userCountry },
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
              {buyerInfo.map((title, idx) => {
                return (
                  <BuyerInfo
                    key={title}
                    title={title}
                    index={idx}
                    isEnterprise={isEnterprise}
                    clickHandlerChangeBuyer={this.clickHandlerChangeBuyer}
                  />
                );
              })}
            </div>
          </div>
          <div className="wrapInputUserInfo">
            {infoTitleList[isEnterprise].map((title, index) => {
              return (
                <InputUserInfo
                  key={index}
                  title={title}
                  isEnterprise={isEnterprise}
                />
              );
            })}
          </div>
          <div className="agreeBtnContainer">
            {agreeList.map((text, index) => {
              return (
                <AgreeCheckBox
                  key={index}
                  index={`agreeCheckBox${index}`}
                  text={text}
                />
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
                <div className="inputUserCardInfoContainer" key={title}>
                  <div>{title}</div>
                  <input type="text" />
                </div>
              );
            })}
            <div className="wrapUserExpirationCardInfo">
              {expiration.map((select, idx) => {
                return (
                  <InputUserExpirationCardInfo key={idx} select={select} />
                );
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
              <div className="inputUserExpirationCardInfoContainer">
                <div>국가</div>
                <div className="selectBoxWrap">
                  <select name="cars" id="cars">
                    {userCountry.map((el) => (
                      <option value={el}>{el}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="agreeBtnContainer">
            <div className="wrapAgreeCheckBox">
              <label className="wrapAgreeCheckBox" for="finalCheckBox">
                <input
                  type="checkbox"
                  className="agreeCheckBox"
                  id="finalCheckBox"
                />
                Tesla가 서비스 지불 조건에 따라 향후 거래를 위해 결제 수단
                정보를 저장할 수 있도록 허용합니다.
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const paymentData = {
  buyerInfo: ["개인", "기업"],
  infoTitleList: [
    ["이메일 주소", "이름 (영문)", "성명 (한글)", "전화번호", "성(영문)"],
    [
      "이메일 주소",
      "이름 (영문)",
      "성명 (한글)",
      "전화번호",
      "성(영문)",
      "회사명",
    ],
  ],
  agreeList: [
    "Tesla의 개인정보처리방침 에 따른 개인정보 수집 이용 및 국내외 사업자에 대한 개인정보 제공에 동의 합니다.",
    "Tesla의 자동차구매계약 상세조건 및 수퍼차저 공정 이용 정책에 동의합니다",
    "Tesla의 위치기반서비스약관 에 동의합니다.",
  ],
  creditCardInfo: {
    cardNameNum: ["카드상의 이름", "카드 번호"],
    expiration: [
      { title: "만료 월", option: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      {
        title: "만료 연도",
        option: [
          2020,
          2021,
          2022,
          2023,
          2024,
          2025,
          2026,
          2027,
          2028,
          2029,
          2030,
          2031,
          2032,
          2033,
          2034,
          2035,
        ],
      },
    ],
  },
  userAddressInfo: {
    mainAddress: ["청구지 주소1", "청구지 주소2"],
    detailAddress: ["구/군/시", "우편번호"],
    userCountry: ["South Korea", "U.S.A", "U.K"],
  },
};
