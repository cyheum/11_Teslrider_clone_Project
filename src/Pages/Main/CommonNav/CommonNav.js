import React, { Component } from "react";
import SubMenu from "../SubMenu/SubMenu";
import "./CommonNav.scss";

class CommonNav extends Component {
  constructor() {
    super();
    this.state = {
      SubMenuDisplay: "none",
    };
  }

  handleSubMenu = (e) => {
    this.setState({
      SubMenuDisplay: this.state.SubMenuDisplay === "none" ? "" : "none",
    });
  };

  render() {
    return (
      <div className="commonNav">
        <nav className="navContainer">
          <SubMenu
            Active={this.state.SubMenuDisplay}
            handleSubMenu={this.handleSubMenu}
          />
          <div className="teslaLogoContainer">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzNDIgMzUnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaWRZTWlkIE1lZXQnIHdpZHRoPSczNDInIGhlaWdodD0nMzUnPjxwYXRoIGNsYXNzPSd0ZHMtaWNvbi1maWxsLS1wcmltYXJ5JyBkPSdNMCAuMWE5LjcgOS43IDAgMDA3IDYuOTNoMTAuOTNsLjU2LjIydjI3LjU4aDYuODJWNy4yOWwuNjItLjIyaDEwLjk0YTkuODIgOS44MiAwIDAwNy02LjkzVi4wN0gwVi4xek0yMzguNjEuMDZoLTYuOHYzNC44NWgzMS4xNGE5LjY4IDkuNjggMCAwMDUuOTQtNi44NmgtMzAuM2wuMDItMjcuOTl6bS01Mi4zMyA2Ljg2YzMuNjItMSA2LjY2LTMuODIgNy4zOS02Ljg4bC0zOC4xLjA2djIwLjU1aDMxLjE3djcuMjNoLTI0LjQ2YTEzLjYgMTMuNiAwIDAwLTguNzEgN2gzOS44OVYxMy44MUgxNjIuM1Y2LjkyaDIzLjk4em0xMTYuMTcgMjcuOTdoNi43NlYyMC44N2gyNC41OHYxNC4wMmg2Ljc1VjEzLjg3bC0zOC4wOS0uMDR6TTg1LjM1IDdoMjZhOS41NyA5LjU3IDAgMDA3LjA1LTdINzguM2E5LjYxIDkuNjEgMCAwMDcuMDUgN3ptMCAxMy43N2gyNmE5LjU5IDkuNTkgMCAwMDcuMDUtN0g3OC4zYTkuNjMgOS42MyAwIDAwNy4wNSA3em0wIDE0LjE0aDI2YTkuNTkgOS41OSAwIDAwNy4wNS03SDc4LjNhOS42MiA5LjYyIDAgMDA3LjA1IDd6TTMwOC40NiA3LjAyaDI2YTkuNTggOS41OCAwIDAwNy4wNi03aC00MC4xMWE5LjU5IDkuNTkgMCAwMDcuMDUgN3onLz48L3N2Zz4="
              className="teslaLogo"
            />
          </div>
          <div>
            <ul className="carList">
              <li>MODEL S</li>
              <li>MODEL 3</li>
              <li>MODEL X</li>
              <li>MODEL Y</li>
              <li>CYBERTRUCK</li>
              <li>POWERWALL</li>
            </ul>
          </div>
          <div className="navLoginContainer">
            <div className="navLoginBtn">로그인</div>
            <i className="fas fa-bars fa-2x" onClick={this.handleSubMenu}></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default CommonNav;
