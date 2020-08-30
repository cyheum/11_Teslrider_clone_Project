import React, { Component } from "react";
import AsideNav from "./AsideNav/AsideNav";
import HeaderNav from "./HeaderNav/HeaderNav";
import Footer from "./Footer/Footer";
import Battery from "./Battery/Battery";
import Paint from "./Paint/Paint";
import OrderInterior from "./OrderInterior/OrderInterior";
import OrderAutopilot from "./OrderAutopilot/OrderAutopilot";
import Payment from "./Payment/Payment";
import ExpectPayment from "./ExpectPayment/ExpectPayment";
import "./Order.scss";

const orderComponentList = [
  Battery,
  Paint,
  OrderInterior,
  OrderAutopilot,
  Payment,
];

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modelPushedAt: this.props.match.params.model,
      activeComponent: 0,
      batteryIsPushedAt: "",
      colorBtnPushedAt: "",
      wheelBtnPushedAt: "",
      interiorPushedAt: "",
      batteryIsPushedIndex: 0,
      colorBtnPushedIndex: 0,
      wheelBtnPushedIndex: 0,
      interiorPushedIndex: 0,
      isAutopilotChecked: false,
      carImgPrice: {},
      icons: {},
      expectPaymentClicked: false,
    };
  }

  componentDidMount() {
    this.runFetchForIcons();
  }

  runFetchForIcons = () => {
    fetch("http://18.222.175.48:8000/customizing/icons?model=Model_S")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ icons: res }, () => this.stateInitializing())
      );
  };

  stateInitializing = () => {
    const {
      icons: { battery_value, color_icon, wheel_icon, interior_icon },
    } = this.state;

    this.setState(
      {
        batteryIsPushedAt: Object.keys(battery_value[0])[0],
        colorBtnPushedAt: Object.keys(color_icon[0])[0],
        wheelBtnPushedAt: Object.keys(wheel_icon[0])[0],
        interiorPushedAt: Object.keys(interior_icon[0])[0],
      },
      () => this.runFetchForPrice()
    );
  };

  runFetchForPrice = () => {
    const {
      modelPushedAt,
      batteryIsPushedAt,
      colorBtnPushedAt,
      wheelBtnPushedAt,
      interiorPushedAt,
      isAutopilotChecked,
    } = this.state;

    fetch("http://18.222.175.48:8000/customizing/products", {
      method: "POST",
      body: JSON.stringify({
        model: modelPushedAt,
        battery_id: batteryIsPushedAt,
        color_id: colorBtnPushedAt,
        wheel_id: wheelBtnPushedAt,
        interior_id: interiorPushedAt,
        auto_pilot: isAutopilotChecked,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ carImgPrice: res }));
  };

  clickHandler = (componentIdx) => {
    if (this.state.activeComponent === componentIdx) return;
    this.setState({
      activeComponent: componentIdx,
    });
  };

  handleClickChangeCarBtn = (num, idx, name) => {
    if (this.state.batteryIsPushedAt === num) return;
    this.setState(
      {
        [`${name}PushedAt`]: num,
        [`${name}PushedIndex`]: idx,
      },
      () => this.runFetchForPrice()
    );
  };

  handleClickChangeBtn = (index, num, pushIdx) => {
    const btnPushedAt = index ? "wheelBtnPushedAt" : "colorBtnPushedAt";
    const btnPushedIndex = index
      ? "wheelBtnPushedIndex"
      : "colorBtnPushedIndex";
    if (btnPushedAt === num) return;
    this.setState(
      {
        [btnPushedAt]: num,
        [btnPushedIndex]: pushIdx,
      },
      () => this.runFetchForPrice()
    );
  };

  changeAutopilotBtnState = () => {
    this.setState(
      {
        isAutopilotChecked: !this.state.isAutopilotChecked,
      },
      () => this.runFetchForPrice()
    );
  };

  clickHandlerNext = () => {
    if (this.state.activeComponent === 5) return;
    this.setState({
      activeComponent: this.state.activeComponent + 1,
    });
  };

  clickHdrChangeEptPaymentState = () => {
    this.setState({
      expectPaymentClicked: !this.state.expectPaymentClicked,
    });
  };

  render() {
    const { activeComponent, expectPaymentClicked } = this.state;
    const ActiveMain = orderComponentList[this.state.activeComponent];
    return (
      <article className="Order">
        <HeaderNav
          changeComponent={this.clickHandler}
          activeComponent={activeComponent}
        />
        <section>
          <main>
            <ActiveMain
              totalData={{ ...this.state }}
              changePropState={this.changePropState}
              handleClickChangeCarBtn={this.handleClickChangeCarBtn}
            />
            <AsideNav
              totalData={{ ...this.state }}
              handleClickChangeCarBtn={this.handleClickChangeCarBtn}
              handleClickChangeBtn={this.handleClickChangeBtn}
              changeAutopilotBtnState={this.changeAutopilotBtnState}
            />
            {expectPaymentClicked && (
              <ExpectPayment
                clickHdrChangeEptPaymentState={
                  this.clickHdrChangeEptPaymentState
                }
                totalData={this.state.carImgPrice}
              />
            )}
            <Footer
              totalData={{ ...this.state }}
              clickHandlerNext={this.clickHandlerNext}
              activeComponent={activeComponent}
              clickHdrChangeEptPaymentState={this.clickHdrChangeEptPaymentState}
            />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;
