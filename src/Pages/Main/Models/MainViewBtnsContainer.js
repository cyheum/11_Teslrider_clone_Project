import React, { Component } from "react";
import FooterBtn from "../Footerbtn/FooterBtn";
import "./MainViewBtnsContainer.scss";

class MainViewBtnsContainer extends Component {
  render() {
    return (
      <div className="MainViewBtnsContainer">
        <ul className="mainViewBtns">
          <div>
            <li />
            <li />
            <li />
          </div>
          <FooterBtn />
        </ul>
      </div>
    );
  }
}

export default MainViewBtnsContainer;
