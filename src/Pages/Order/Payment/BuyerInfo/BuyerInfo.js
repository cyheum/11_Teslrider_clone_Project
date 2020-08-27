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
          className={`checkBox ${
            isEnterprise !== index ? "normal" : "checked"
          }`}
        >
          <div
            className={`circleInCheckBox ${
              isEnterprise !== index ? "hidden" : "normal"
            }`}
          />
        </div>
        {title}
      </div>
    );
  }
}
