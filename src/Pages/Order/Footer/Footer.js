import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    if (!this.props.totalData.data.carImgPrice) return <div />;
    const {
      data: {
        carImgPrice: {
          price: { fuel_cost_reduction_price, total_price },
        },
      },
    } = this.props.totalData;
    const { clickHdrChangeEptPaymentState, activeComponent, clickHandlerNext } = this.props;
    return (
      <footer className="Footer">
        <div className="wrapTotalPrice">
          <select className="charge">
            현금
            <option value="현금">현금</option>
            <option value="리스">리스</option>
            <option value="할부">할부</option>
          </select>
          <div className="totalPrice">
            <div className="wrapPrice">
              {`₩${fuel_cost_reduction_price.toLocaleString()}`}
              <div>연료비 절감 후</div>
            </div>
            <div className="wrapPrice">
              {`₩${total_price.toLocaleString()}`}
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
          <button className="nextBtn" disabled={activeComponent === 4} onClick={clickHandlerNext}>
            {activeComponent === 4 ? "결제하기" : "다음"}
          </button>
        </div>
      </footer>
    );
  }
}
