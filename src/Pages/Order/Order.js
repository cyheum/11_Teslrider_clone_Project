import React, { Component } from "react";
import AsideNav from "./AsideNav/AsideNav";
import HeaderNav from "./HeaderNav/HeaderNav";
import Footer from "./Footer/Footer";
import Battery from "./Battery/Battery";
import Paint from "./Paint/Paint";
import Interior from "./Interior/Interior";
import Autopilot from "./Autopilot/Autopilot";
import Payment from "./Payment/Payment";
import "./Order.scss";

const orderComponentList = {
  0: <Battery />,
  1: <Paint />,
  2: <Interior />,
  3: <Autopilot />,
  4: <Payment />,
};

class Order extends Component {
  constructor() {
    super();

    this.state = {
      activeComponent: 0,
    };
  }

  clickHandler = (componentIdx) => {
    this.setState({
      activeComponent: componentIdx,
    });
  };

  render() {
    const { activeComponent } = this.state;
    return (
      <article className="Order">
        <HeaderNav
          changeComponent={this.clickHandler}
          activeComponent={activeComponent}
        />
        <section>
          <main>
            {orderComponentList[activeComponent]}
            <AsideNav activeComponent={activeComponent} />
            <Footer />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;
