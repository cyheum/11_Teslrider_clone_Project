import React, { Component } from "react";
import ChoiceCar from "./ChoiceCar/ChoiceCar";
import ChoiceColor from "./ChoiceColor/ChoiceColor";
import ChoiceInterior from "./ChoiceInterior/ChoiceInterior";
import ChoiceAutopilot from "./ChoiceAutopilot/ChoiceAutopilot";
import ChoicePayment from "./ChoicePayment/ChoicePayment";
import "./AsideNav.scss";

const asideComponentList = {
  0: <ChoiceCar />,
  1: <ChoiceColor />,
  2: <ChoiceInterior />,
  3: <ChoiceAutopilot />,
  4: <ChoicePayment />,
};

export default class AsideNav extends Component {
  render() {
    const { activeComponent } = this.props;
    return (
      <aside className="AsideNav">
        <div className="wrapDescription">
          {asideComponentList[activeComponent]}
        </div>
      </aside>
    );
  }
}
