import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import TeslaLogoImgBlack from "../Main/ImgAndVideo/TeslaLogoImgBlack";
import LanguageIcon from "../Main/ImgAndVideo/LanguageIcon";
import "./LogInNav.scss";

class LogInNav extends Component {
  render() {
    return (
      <div className="SecNav">
        <nav className="navContainer">
          <div className="teslaLogoContainer">
            <Link to="/">
              <TeslaLogoImgBlack />
            </Link>
          </div>
          <div className="topBtnContainer">
            <LanguageIcon />
          </div>
        </nav>
      </div>
    );
  }
}

export default LogInNav;
