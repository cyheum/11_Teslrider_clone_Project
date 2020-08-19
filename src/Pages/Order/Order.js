import React, { Component } from "react";
import "./Order.scss";
import AsideNav from "./AsideNav/AsideNav";
import HeaderNav from "./HeaderNav/HeaderNav";
import Footer from "./Footer/Footer";
import Battery from "./Battery/Battery";
import Paint from "./Paint/Paint";
import Interior from "./Interior/Interior";
import Autopilot from "./Autopilot/Autopilot";
import Payment from "./Payment/Payment";

class Order extends Component {
  render() {
    return (
      <article className="Order">
        <HeaderNav />
        <section>
          <main>
            {/* <Battery /> */}
            {/* <Paint /> */}
            {/* <Interior /> */}
            {/* <Autopilot /> */}
            <Payment />
            <AsideNav />
            <Footer />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;
