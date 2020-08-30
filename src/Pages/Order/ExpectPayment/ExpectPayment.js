import React, { Component } from "react";
import FinancingOption from "./FinancingOption/FinancingOption";
import FuelCostReduction from "./FuelCostReduction/FuelCostReduction";
import IncentiveSystem from "./IncentiveSystem/IncentiveSystem";
import "./ExpectPayment.scss";

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
    const { clickHdrChangeEptPaymentState } = this.props;
    const { navBtnPushedAt } = this.state;
    const ActiveModalCompo = [
      <FinancingOption price={this.props.totalData}/>,
      <FuelCostReduction />,
      <IncentiveSystem />,
    ];
    return (
      <div className="ExpectPayment">
        <div className="exitModal" onClick={clickHdrChangeEptPaymentState} />
        <div className="wrapmodalContainer">
          <img
            alt="exitBtnImg"
            className="exitBtn"
            onClick={clickHdrChangeEptPaymentState}
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiMxNzFBMjAiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48cGF0aCBkPSJNMTYuMDcxIDEuOTI5TDEuOTMgMTYuMDdNMTYuMDcxIDE2LjA3MUwxLjkzIDEuOTMiLz48L2c+PC9zdmc+"
          />
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
                {NavTitle.map((title, idx) => {
                  return (
                    <li
                      className={`modalNavTitle ${
                        navBtnPushedAt === idx ? "pushed" : "normal"
                      }`}
                      key={idx}
                      onClick={() => this.clickHandlerChnageNavBtnPushed(idx)}
                    >
                      {title}
                    </li>
                  );
                })}
                <span
                  className={`modalLeftNavActiveLine ${
                    !navBtnPushedAt
                      ? "first"
                      : navBtnPushedAt === 1
                      ? "second"
                      : "third"
                  }`}
                />
              </ul>
            </div>
          </div>
          <div className="modalContent">{ActiveModalCompo[navBtnPushedAt]}</div>
        </div>
      </div>
    );
  }
}

const NavTitle = ["파이낸싱 옵션", "연료비 절감", "인센티브 제도"];
