import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    const { totalPrice, fuelCostReductionPrice } = this.props;
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
              {fuelCostReductionPrice}
              <div>연료비 절감 후</div>
            </div>
            <div className="wrapPrice">
              {totalPrice}
              <div>연료비 절감 전</div>
            </div>
            <span>예상 결제 가격</span>
          </div>
        </div>
        <div className="wrapNextBtn">
          <button className="nextBtn">다음</button>
        </div>
      </footer>
    );
  }
}
