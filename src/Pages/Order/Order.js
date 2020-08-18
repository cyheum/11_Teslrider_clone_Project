import React, { Component } from "react";
import "./Order.scss";

class Order extends Component {
  render() {
    return (
      <section className="Order">
        <nav className="headerNav">
          <img alt="logo" src="./logo.png" />
          <ol>
            <li>자동차</li>
            <li>외부</li>
            <li>인테리어</li>
            <li>오토파일럿</li>
            <li>결제</li>
          </ol>
        </nav>
      </section>
    );
  }
}

export default Order;
