import React, { Component } from "react";
import "./HeaderNav.scss";

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className="HeaderNav">
        <img
          className="logo"
          alt="logo"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIE1lZXQiIHdpZHRoPSIzNDIiIGhlaWdodD0iMzUiPjxwYXRoIGNsYXNzPSJ0ZHMtaWNvbi1maWxsLS1wcmltYXJ5IiBkPSJNMCAuMWE5LjcgOS43IDAgMDA3IDYuOTNoMTAuOTNsLjU2LjIydjI3LjU4aDYuODJWNy4yOWwuNjItLjIyaDEwLjk0YTkuODIgOS44MiAwIDAwNy02LjkzVi4wN0gwVi4xek0yMzguNjEuMDZoLTYuOHYzNC44NWgzMS4xNGE5LjY4IDkuNjggMCAwMDUuOTQtNi44NmgtMzAuM2wuMDItMjcuOTl6bS01Mi4zMyA2Ljg2YzMuNjItMSA2LjY2LTMuODIgNy4zOS02Ljg4bC0zOC4xLjA2djIwLjU1aDMxLjE3djcuMjNoLTI0LjQ2YTEzLjYgMTMuNiAwIDAwLTguNzEgN2gzOS44OVYxMy44MUgxNjIuM1Y2LjkyaDIzLjk4em0xMTYuMTcgMjcuOTdoNi43NlYyMC44N2gyNC41OHYxNC4wMmg2Ljc1VjEzLjg3bC0zOC4wOS0uMDR6TTg1LjM1IDdoMjZhOS41NyA5LjU3IDAgMDA3LjA1LTdINzguM2E5LjYxIDkuNjEgMCAwMDcuMDUgN3ptMCAxMy43N2gyNmE5LjU5IDkuNTkgMCAwMDcuMDUtN0g3OC4zYTkuNjMgOS42MyAwIDAwNy4wNSA3em0wIDE0LjE0aDI2YTkuNTkgOS41OSAwIDAwNy4wNS03SDc4LjNhOS42MiA5LjYyIDAgMDA3LjA1IDd6TTMwOC40NiA3LjAyaDI2YTkuNTggOS41OCAwIDAwNy4wNi03aC00MC4xMWE5LjU5IDkuNTkgMCAwMDcuMDUgN3oiLz48L3N2Zz4="
        />
        <ol>
          <li>1.자동차</li>
          <li>2.외부</li>
          <li>3.인테리어</li>
          <li>4.오토파일럿</li>
          <li>5.결제</li>
        </ol>
        <span>KR</span>
      </nav>
    );
  }
}
