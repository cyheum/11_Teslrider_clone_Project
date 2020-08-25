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
import ExpectPayment from "./ExpectPayment/ExpectPayment";

const orderComponentList = {
  0: Battery,
  1: Paint,
  2: Interior,
  3: Autopilot,
  4: Payment,
};

class Order extends Component {
  constructor() {
    super();

    this.state = {
      activeComponent: 0,
      batteryIsPushedAt: 0,
      isColorBtnPushedAt: 0,
      isWheelBtnPushedAt: 0,
      interiorPushedAt: 0,
      isAutopilotChecked: false,
      expectPaymentClicked: false,
      totalPrice: "",
    };
  }

  passProp = (Comp) => {
    return class extends React.Component {
      render() {
        return <Comp {...this.props} />;
      }
    };
  };

  componentDidMount() {
    // fetch("http://10.58.4.12:8000/customizing/totalprice", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     model: "Model 3",
    //     battery: "Long Range",
    //     color: "Pearl White Multi-Coat",
    //     wheel: "18인치 에어로 휠",
    //     interior: "All Black",
    //     auto_pilot: 0,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ totalPrice: res.total_price }));
  }

  clickHandler = (componentIdx) => {
    this.setState({
      activeComponent: componentIdx,
    });
  };

  handleClickChangeCarBtn = (num) => {
    this.setState({
      batteryIsPushedAt: num,
    });
  };

  handleClickChangeBtn = (index, num) => {
    if (index === 0) {
      this.setState({
        isColorBtnPushedAt: num,
      });
    } else {
      this.setState({
        isWheelBtnPushedAt: num,
      });
    }
  };

  clickHandlerChangeStyle = (num) => {
    this.setState({
      interiorPushedAt: num,
    });
  };

  clickHandlerChangeAutopilotCheckedState = () => {
    this.setState({
      isAutopilotChecked: !this.state.isAutopilotChecked,
    });
  };

  clickHandlerChangeExpectPaymentClickState = () => {
    this.setState({
      expectPaymentClicked: !this.state.expectPaymentClicked,
    });
  };

  render() {
    const { activeComponent, expectPaymentClicked } = this.state;
    const NewProp = this.passProp(
      orderComponentList[this.state.activeComponent]
    );
    console.log(expectPaymentClicked);
    return (
      <article className="Order">
        <HeaderNav
          changeComponent={this.clickHandler}
          activeComponent={activeComponent}
        />
        <section>
          <main>
            <NewProp
              totalData={this.state}
              handleClickChangeCarBtn={this.handleClickChangeCarBtn}
            />
            <AsideNav
              totalData={this.state}
              handleClickChangeCarBtn={this.handleClickChangeCarBtn}
              handleClickChangeBtn={this.handleClickChangeBtn}
              clickHandlerChangeStyle={this.clickHandlerChangeStyle}
              clickHandlerChangeAutopilotCheckedState={
                this.clickHandlerChangeAutopilotCheckedState
              }
            />
            {expectPaymentClicked ? (
              <ExpectPayment
                clickHandlerChangeExpectPaymentClickState={
                  this.clickHandlerChangeExpectPaymentClickState
                }
              />
            ) : (
              ""
            )}
            <Footer
              totalPrice={this.state.totalPrice}
              clickHandlerChangeExpectPaymentClickState={
                this.clickHandlerChangeExpectPaymentClickState
              }
            />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;
