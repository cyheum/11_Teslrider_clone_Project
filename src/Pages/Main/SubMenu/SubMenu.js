import React, { Component } from "react";
import "./SubMenu.scss";

class SubMenu extends Component {
  render() {
    return (
      <div className="submenuActive" style={{ display: this.props.Active }}>
        <ul className="submenuListContaner">
          <li>
            <span className="submenuIconContainer">
              <span>트레이드인</span>
              <span>
                {/* <i class="fas fa-times fa-2x" /> */}
                <img
                  className="submenuquit"
                  onClick={this.props.handleSubMenu}
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNOTguMiAyLjdjMi40IDIuNCAyLjQgOC40IDAgMTJsLTM2IDM1LjYgMzYgMzYuMmMyLjMgMi40IDIuNCA4LjEuMiAxMC42bC0uMi4yYy0zLjYgMy42LTkuNSAzLjYtMTIgMEw1MC41IDYyIDE0LjYgOTcuM2MtMy42IDMuNi05LjUgMy42LTEyIDBDLS44IDk1LS44IDg5IDIuNyA4Ni41bDM2LjItMzYuMkwyLjcgMTQuN0MtLjggMTEtMSA1LjMgMi41IDIuOGwuMi0uMUM1LTEgMTEtMSAxNC43IDIuN2wzNS43IDM2IDM1LjktMzZjMi40LTMuNiA4LjMtMy42IDEyIDB6Ij48L3BhdGg+PC9zdmc+"
                />
              </span>
            </span>
          </li>
          <li>
            <span>ROADSTER</span>
          </li>
          <li>
            <span>ENERGY</span>
          </li>
          <li>
            <span>법인 판매</span>
          </li>
          <li>
            <span>충전</span>
          </li>
          <li>
            <span>TESLA 찾기</span>
          </li>
          <li>
            <span>지원</span>
          </li>
          <li>
            <span>대한민국</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default SubMenu;
