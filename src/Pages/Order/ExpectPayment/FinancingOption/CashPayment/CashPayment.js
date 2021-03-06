import React, { Component } from "react";
import "./CashPayment.scss";

export default class CashPayment extends Component {
  render() {
    return (
      <div className="CashPayment">
        <div className="totalPriceContainer">
          <div className="priceTitle">가격</div>
          <div className="priceNum">{`₩${this.props.price.price.fuel_cost_reduction_price.toLocaleString()}`}</div>
        </div>
        <div className="reductionPriceWrap">
          {PriceData.map((data, idx) => {
            return (
              <div className="reductionPriceContainer">
                <div
                  className={`reductionPriceTitle ${idx ? "black" : "gray"}`}
                >
                  {data.title}
                </div>
                <span className="reductionPriceNum">{`₩${this.props.price.price.total_price.toLocaleString()}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const PriceData = [
  { title: "연료비 절감", price: "- ₩6,800,000" },
  { title: "연료비 절감 후 가격", price: "₩101,190,000" },
];
