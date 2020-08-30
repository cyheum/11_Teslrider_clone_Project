import React, { Component } from "react";
import CashPayment from "./CashPayment/CashPayment";
import "./FinancingOption.scss";

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
          {PaymentTitle.map((el, idx) => {
            return (
              <li
                className={`paymentMethod ${
                  activePaymentMethod === idx ? "active" : "normal"
                }`}
                key={idx}
                onClick={() => this.clickHandlerPaymentMethod(idx)}
              >
                {el}
              </li>
            );
          })}
        </ul>
        <CashPayment price={this.props.price}/>
      </div>
    );
  }
}

const PaymentTitle = ["현금", "리스", "할부"];
