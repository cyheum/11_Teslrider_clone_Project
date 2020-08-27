import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    const { clickHdrChangeEptPaymentState, activeComponent } = this.props;
    return (
      <footer className="Footer">
        <div className="wrapTotalPrice">
          <span className="charge">현금</span>
          <div className="totalPrice">
            <div className="wrapPrice">
              ₩101,190,000<div>연료비 절감 후</div>
            </div>
            <div className="wrapPrice">
              {/* {this.props.totalPrice} */}
              ₩101,190,000
              <div>연료비 절감 전</div>
            </div>
            <span
              className="expectPaymentBtn"
              onClick={clickHdrChangeEptPaymentState}
            >
              예상 결제 가격
            </span>
          </div>
        </div>
        <div className="wrapNextBtn">
          <button className="nextBtn" disabled={activeComponent === 4}>
            {activeComponent === 4 ? "결제하기" : "다음"}
          </button>
        </div>
      </footer>
    );
  }
}
