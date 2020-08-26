import React, { Component } from "react";
import "./InstallmentPayment.scss";

export default class InstallmentPayment extends Component {
  render() {
    return (
      <div className="InstallmentPayment">
        <div>할부 기간동안 선납금과 월 할부금으로 차량 가격을 지불합니다.</div>
        <div className="advancePaymentContainer">
          <div></div>
        </div>
      </div>
    );
  }
}
