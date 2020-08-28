import React, { Component } from "react";
import AsideNav from "./AsideNav/AsideNav";
import HeaderNav from "./HeaderNav/HeaderNav";
import Footer from "./Footer/Footer";
import Battery from "./Battery/Battery";
import Paint from "./Paint/Paint";
import OrderInterior from "./OrderInterior/OrderInterior";
import OrderAutopilot from "./OrderAutopilot/OrderAutopilot";
import Payment from "./Payment/Payment";
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
      isColorBtnPushedAt: "",
      isWheelBtnPushedAt: "",
      interiorPushedAt: "",
      batteryIsPushedIndex: 0,
      ColorBtnPushedIndex: 0,
      WheelBtnPushedIndex: 0,
      interiorPushedIndex: 0,
      isAutopilotChecked: false,
      data: {},
    };
  }

  componentDidMount() {
    this.runFetchForIcons();
  }

  runFetchForIcons = () => {
    const { data } = this.state;
    fetch("http://10.58.2.168:8000/customizing/icons?model=Model_S")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ data: { ...data, icons: res } }, () =>
          this.stateiInitializing()
        )
      );
  };

  stateiInitializing = () => {
    const {
      data: {
        icons: { battery_value, color_icon, wheel_icon, interior_icon },
      },
    } = this.state;

    this.setState(
      {
        batteryIsPushedAt: Object.keys(battery_value[0])[0],
        isColorBtnPushedAt: Object.keys(color_icon[0])[0],
        isWheelBtnPushedAt: Object.keys(wheel_icon[0])[0],
        interiorPushedAt: Object.keys(interior_icon[0])[0],
      },
      () => this.runFetchForPrice()
    );
  };

  runFetchForPrice = () => {
    const {
      modelPushedAt,
      batteryIsPushedAt,
      isColorBtnPushedAt,
      isWheelBtnPushedAt,
      interiorPushedAt,
      isAutopilotChecked,
      data,
    } = this.state;

    fetch("http://10.58.2.168:8000/customizing/products", {
      method: "POST",
      body: JSON.stringify({
        model: modelPushedAt,
        battery_id: batteryIsPushedAt,
        color_id: isColorBtnPushedAt,
        wheel_id: isWheelBtnPushedAt,
        interior_id: interiorPushedAt,
        auto_pilot: isAutopilotChecked ? 1 : 0,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ data: { ...data, carImgPrice: res } }));
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
    const btnPushedAt = index ? "isWheelBtnPushedAt" : "isColorBtnPushedAt";
    const btnPushedIndex = index
      ? "WheelBtnPushedIndex"
      : "ColorBtnPushedIndex";
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

  remakeCompo = (Comp) => {
    return class extends React.Component {
      render() {
        return <Comp {...this.props} />;
      }
    };
  };

  render() {
    console.log(this.props.match.params);
    const { activeComponent } = this.state;
    const ActiveMain = this.remakeCompo(
      orderComponentList[this.state.activeComponent]
    );
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
            <Footer totalData={{ ...this.state }} />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;
