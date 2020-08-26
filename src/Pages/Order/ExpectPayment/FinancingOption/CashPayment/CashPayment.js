import React, { Component } from "react";
import "./CashPayment.scss";

export default class CashPayment extends Component {
  render() {
    return (
      <div className="CashPayment">
        <div className="totalPriceContainer">
          <div className="priceTitle">가격</div>
          <div className="priceNum">₩107,990,000</div>
        </div>
        <div className="reductionPriceWrap">
          {priceData.map((data, idx) => {
            return (
              <div className="reductionPriceContainer">
                <div
                  className={
                    idx
                      ? "reductionPriceTitle black"
                      : "reductionPriceTitle gray"
                  }
                >
                  {data.title}
                </div>
                <span className="reductionPriceNum">{data.price}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const priceData = [
  { title: "연료비 절감", price: "- ₩6,800,000" },
  { title: "연료비 절감 후 가격", price: "₩101,190,000" },
];
