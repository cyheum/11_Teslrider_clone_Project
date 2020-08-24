import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Order.scss';


class Order extends Component {
  render() {
    return (
      <div className="Order">
        <div className="mainContainer">
          <div className="mainContents itemLayout">
            <div className="contenstHeader">Model S 주문하기</div>
            <div className="contentsBtn">
              <Link to="/" className="orderBtn">지금 주문하기</Link>
            </div>
          </div>
          <div className="mainImgWrap itemLayout">
            <img className="mainImg" alt="Model S" src="https://tesla-cdn.thron.com/delivery/public/image/tesla/ea5293bf-a57a-4e55-a68e-aa9eb41638ad/bvlatuR/std/0x0/models@2" />
          </div>
        </div>
      </div>
    );
  }
}

export default Order;