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

const orderComponentList = {
  0: Battery,
  1: Paint,
  2: OrderInterior,
  3: OrderAutopilot,
  4: Payment,
};

class Order extends Component {
  constructor() {
    super();

    this.state = {
      modelPushedAt: "Model_S",
      activeComponent: 0,
      batteryIsPushedAt: 9,
      isColorBtnPushedAt: 16,
      isWheelBtnPushedAt: 15,
      interiorPushedAt: 8,
      isAutopilotChecked: false,
      data: {},
    };
  }

  passProp = (Comp) => {
    return class extends React.Component {
      render() {
        return <Comp {...this.props} />;
      }
    };
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

    fetch("http://10.58.4.178:8000/customizing/products", {
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

  runFetchForIcons = () => {
    const { data } = this.state;
    fetch("http://10.58.4.178:8000/customizing/icons?model=Model_S")
      .then((res) => res.json())
      .then((res) =>
        this.setState({ data: { ...data, icons: res } }, () =>
          this.runFetchForPrice()
        )
      );
  };

  componentDidMount() {
    this.runFetchForIcons();
  }

  clickHandler = (componentIdx) => {
    if (this.state.activeComponent === componentIdx) return;
    this.setState({
      activeComponent: componentIdx,
    });
  };

  handleClickChangeCarBtn = (num) => {
    if (this.state.batteryIsPushedAt === num) return;
    this.setState(
      {
        batteryIsPushedAt: num,
      },
      () => this.runFetchForPrice()
    );
  };

  handleClickChangeBtn = (index, num) => {
    const btnPushedAt = index ? "isWheelBtnPushedAt" : "isColorBtnPushedAt";
    if (btnPushedAt === num) return;
    this.setState(
      {
        [btnPushedAt]: num,
      },
      () => this.runFetchForPrice()
    );
  };

  clickHandlerChangeStyle = (num) => {
    if (this.state.interiorPushedAt === num) return;
    this.setState(
      {
        interiorPushedAt: num,
      },
      () => this.runFetchForPrice()
    );
  };

  clickHandlerChangeAutopilotCheckedState = () => {
    this.setState(
      {
        isAutopilotChecked: !this.state.isAutopilotChecked,
      },
      () => this.runFetchForPrice()
    );
  };

  render() {
    const { activeComponent } = this.state;
    const NewProp = this.passProp(
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
            <NewProp
              totalData={this.state}
              changePropState={this.changePropState}
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
            <Footer totalData={this.state} />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;

const carList = {
  model: "Model S",
  battery: ["Long Range", "Performance"],
  color: [
    "Pearl White Multi-Coat",
    "Solid Black",
    "Midnight Silver Metallic",
    "Deep Blue Metallic",
    "Red Multi-Coat",
  ],
  price: ["포함", "₩1,929,000", "₩1,929,000", "₩1,929,000", "₩3,279,000"],
  wheel: ["19인치 실버 휠", "21인치 소닉 카본 트윈 터빈 휠"],
  interior: ["All black", "Black & White", "Cream"],
};
