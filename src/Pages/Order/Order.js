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
      modelPushedAt: 0,
      activeComponent: 0,
      batteryIsPushedAt: 0,
      isColorBtnPushedAt: 0,
      isWheelBtnPushedAt: 0,
      interiorPushedAt: 0,
      isAutopilotChecked: false,
      totalPrice: "",
      fuelCostReductionPrice: "",
    };
  }

  passProp = (Comp) => {
    return class extends React.Component {
      render() {
        return <Comp {...this.props} />;
      }
    };
  };

  runFetch = () => {
    const {
      modelPushedAt,
      batteryIsPushedAt,
      isColorBtnPushedAt,
      isWheelBtnPushedAt,
      interiorPushedAt,
      isAutopilotChecked,
    } = this.state;
    fetch("http://10.58.5.163:8000/customizing/totalprice", {
      method: "POST",
      body: JSON.stringify({
        model: carList[modelPushedAt].model,
        battery: carList[modelPushedAt].battery[batteryIsPushedAt],
        color: carList[modelPushedAt].color[isColorBtnPushedAt],
        wheel: carList[modelPushedAt].wheel[isWheelBtnPushedAt],
        interior: carList[modelPushedAt].interior[interiorPushedAt],
        auto_pilot: isAutopilotChecked ? 1 : 0,
      }),
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          totalPrice: res.total_price,
          fuelCostReductionPrice: res.fuel_cost_reduction_price,
        })
      );
  };

  componentDidMount() {
    this.runFetch();
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
      () => this.runFetch()
    );
  };

  handleClickChangeBtn = (index, num) => {
    const { isWheelBtnPushedAt, isColorBtnPushedAt } = this.state;
    if (
      (index && isWheelBtnPushedAt === num) ||
      (!index && isColorBtnPushedAt === num)
    ) {
      return;
    }
    const btnPushedAt = index ? "isWheelBtnPushedAt" : "isColorBtnPushedAt";
    this.setState(
      {
        [btnPushedAt]: num,
      },
      () => this.runFetch()
    );
  };

  clickHandlerChangeStyle = (num) => {
    if (this.state.interiorPushedAt === num) return;
    this.setState(
      {
        interiorPushedAt: num,
      },
      () => this.runFetch()
    );
  };

  clickHandlerChangeAutopilotCheckedState = () => {
    this.setState(
      {
        isAutopilotChecked: !this.state.isAutopilotChecked,
      },
      () => this.runFetch()
    );
  };

  render() {
    const { activeComponent, totalPrice, fuelCostReductionPrice } = this.state;
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
            <Footer
              totalPrice={totalPrice}
              fuelCostReductionPrice={fuelCostReductionPrice}
            />
          </main>
        </section>
      </article>
    );
  }
}

export default Order;

const carList = [
  {
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
  },
];
