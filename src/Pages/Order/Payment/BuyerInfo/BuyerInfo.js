import React, { Component } from "react";

export default class BuyerInfo extends Component {
  render() {
    const { isEnterprise, clickHandlerChangeBuyer, index, title } = this.props;
    return (
      <div
        className="wrapCheckBox"
        onClick={() => clickHandlerChangeBuyer(index)}
      >
        <div
          className={
            isEnterprise !== index ? "checkBox normal" : "checkBox checked"
          }
        >
          <div
            className={
              isEnterprise !== index
                ? "circleInCheckBox hidden"
                : "circleInCheckBox normal"
            }
          />
        </div>
        {title}
      </div>
    );
  }
}
