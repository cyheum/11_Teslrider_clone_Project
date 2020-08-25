import React, { Component } from "react";
import "./ExpectPayment.scss";
import FinancingOption from "./FinancingOption/FinancingOption";
import FuelCostReduction from "./FuelCostReduction/FuelCostReduction";
import IncentiveSystem from "./IncentiveSystem/IncentiveSystem";

export default class ExpectPayment extends Component {
  constructor() {
    super();
    this.state = {
      navBtnPushedAt: 0,
    };
  }

  clickHandlerChnageNavBtnPushed = (idx) => {
    this.setState({
      navBtnPushedAt: idx,
    });
  };

  render() {
    const { clickHandlerChangeExpectPaymentClickState } = this.props;
    const { navBtnPushedAt } = this.state;
    return (
      <div className="ExpectPayment">
        <div
          className="exitModal"
          onClick={clickHandlerChangeExpectPaymentClickState}
        />
        <div className="wrapmodalContainer">
          <div className="modalLeftNav">
            <div className="wrapModalLogo">
              <img
                className="modalLogo"
                alt="modalLogo"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIE1lZXQiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBjbGFzcz0idGRzLWljb24tZmlsbC0tcHJpbWFyeSIgZD0iTTUwIDk5LjhsMTQtNzguN2MxMy4zIDAgMTcuNSAxLjUgMTguMSA3LjQgMCAwIDguOS0zLjMgMTMuNS0xMC4xQzc4IDEwLjMgNjAuMyA5LjkgNjAuMyA5LjlMNTAgMjIuNSAzOS43IDkuOXMtMTcuNy40LTM1LjMgOC41YzQuNSA2LjggMTMuNSAxMC4xIDEzLjUgMTAuMS42LTYgNC44LTcuNCAxOC4xLTcuNGwxNCA3OC43eiIvPjxwYXRoIGNsYXNzPSJ0ZHMtaWNvbi1maWxsLS1wcmltYXJ5IiBkPSJNNTAgNi4zYzE0LjItLjEgMzAuNSAyLjIgNDcuMiA5LjUgMi4yLTQgMi44LTUuOCAyLjgtNS44QzgxLjggMi43IDY0LjcuMyA1MCAuMiAzNS4zLjMgMTguMiAyLjcgMCAxMGMwIDAgLjggMi4yIDIuOCA1LjggMTYuNy03LjMgMzMtOS42IDQ3LjItOS41eiIvPjwvc3ZnPg=="
              />
            </div>
            <div className="modalNavContainer">
              <ul className="modalNavList">
                {navTitle.map((title, idx) => {
                  return (
                    <li
                      className={
                        navBtnPushedAt === idx
                          ? "modalNavTitle pushed"
                          : "modalNavTitle normal"
                      }
                      key={idx}
                      onClick={() => this.clickHandlerChnageNavBtnPushed(idx)}
                    >
                      {title}
                    </li>
                  );
                })}
                <span
                  className={
                    navBtnPushedAt === 0
                      ? "modalLeftNavActiveLine first"
                      : navBtnPushedAt === 1
                      ? "modalLeftNavActiveLine second"
                      : "modalLeftNavActiveLine third"
                  }
                />
              </ul>
            </div>
          </div>
          <div className="modalContent">
            {(() => {
              if (navBtnPushedAt === 0) return <FinancingOption />;
              if (navBtnPushedAt === 1) return <FuelCostReduction />;
              if (navBtnPushedAt === 2) return <IncentiveSystem />;
            })()}
          </div>
        </div>
      </div>
    );
  }
}

const navTitle = ["파이낸싱 옵션", "연료비 절감", "인센티브 제도"];
