import React, { Component } from "react";
import "./FinancingOption.scss";
import CashPayment from "./CashPayment/CashPayment";

export default class FinancingOption extends Component {
  constructor() {
    super();
    this.state = {
      activePaymentMethod: 0,
    };
  }

  clickHandlerPaymentMethod = (idx) => {
    this.setState({
      activePaymentMethod: idx,
    });
  };

  render() {
    const { activePaymentMethod } = this.state;
    return (
      <div className="FinancingOption">
        <ul>
          {payment.map((el, idx) => {
            return (
              <li
                className={
                  activePaymentMethod === idx
                    ? "paymentMethod active"
                    : "paymentMethod normal"
                }
                key={idx}
                onClick={() => this.clickHandlerPaymentMethod(idx)}
              >
                {el}
              </li>
            );
          })}
        </ul>
        <CashPayment />
      </div>
    );
  }
}

const payment = ["현금", "리스", "할부"];
