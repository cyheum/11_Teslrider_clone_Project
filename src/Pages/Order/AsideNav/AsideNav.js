import React, { Component } from "react";
import ChoiceCar from "./ChoiceCar/ChoiceCar";
import ChoiceColor from "./ChoiceColor/ChoiceColor";
import ChoiceInterior from "./ChoiceInterior/ChoiceInterior";
import ChoiceAutopilot from "./ChoiceAutopilot/ChoiceAutopilot";
import ChoicePayment from "./ChoicePayment/ChoicePayment";
import "./AsideNav.scss";

const asideComponentList = {
  0: ChoiceCar,
  1: ChoiceColor,
  2: ChoiceInterior,
  3: ChoiceAutopilot,
  4: ChoicePayment,
};

export default class AsideNav extends Component {
  passProp = (Comp) => {
    return class extends React.Component {
      render() {
        return <Comp {...this.props} />;
      }
    };
  };

  render() {
    const {
      handleClickChangeCarBtn,
      handleClickChangeBtn,
      clickHandlerChangeStyle,
      clickHandlerChangeAutopilotCheckedState,
      totalData,
      totalData: { activeComponent },
    } = this.props;
    const NewProp = this.passProp(asideComponentList[activeComponent]);
    return (
      <aside className="AsideNav">
        <div className="wrapDescription">
          <NewProp
            handleClickChangeCarBtn={handleClickChangeCarBtn}
            handleClickChangeBtn={handleClickChangeBtn}
            clickHandlerChangeStyle={clickHandlerChangeStyle}
            clickHandlerChangeAutopilotCheckedState={
              clickHandlerChangeAutopilotCheckedState
            }
            totalData={totalData}
          />
        </div>
      </aside>
    );
  }
}
