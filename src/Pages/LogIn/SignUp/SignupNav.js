import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import TeslaLogoImgBlack from "../../Main/ImgAndVideo/TeslaLogoImgBlack";
import LanguageIcon from "../../Main/ImgAndVideo/LanguageIcon";
import "./SignupNav.scss";

class SignupNav extends Component {
  render() {
    return (
      <div className="SignupNav">
        <nav className="signupNavContainer">
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

export default SignupNav;
