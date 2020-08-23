import React, { Component } from "react";
import "./LoginFooter.scss";

class LoginFooter extends Component {
  render() {
    return (
      <footer className="LoginFooter">
        <div className="loginFooterInfoContainer">
          <ul className="loginFooterInfoList">
            <li className="aboutTesla">Tesla © 2020</li>
            <li className="privacyPolicy">개인정보 처리방침 및 법적고지</li>
            <li className="contactInfo">연락처</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default LoginFooter;
