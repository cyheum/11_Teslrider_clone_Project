import React, { Component } from "react";
import "./SecNav.scss";
import TeslaLogoImg from "../ImgAndVideo/TeslaLogoImg";
import GoToTopBtn from "../ImgAndVideo/GoToTopBtn";

class SecNav extends Component {
  goToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="SecNav">
        <nav className="navContainer">
          <div className="teslaLogoContainer">
            <TeslaLogoImg />
          </div>
          <div className="topBtnContainer">
            <GoToTopBtn gotoTop={this.goToTop} />
          </div>
        </nav>
      </div>
    );
  }
}

export default SecNav;
