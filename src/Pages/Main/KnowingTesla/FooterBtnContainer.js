import React, { Component } from "react";
import FooterBtn from "../Footerbtn/FooterBtn";
import "./FooterBtnContainer.scss";

class FooterBtnContainer extends Component {
  render() {
    return (
      <div className="FooterBtnContainer">
        <ul className="mainViewBtns">
          <div />
          <FooterBtn />
        </ul>
      </div>
    );
  }
}

export default FooterBtnContainer;
