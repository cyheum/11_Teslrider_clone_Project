import React, { Component } from "react";
import "./SignupFooter.scss";

class SignupFooter extends Component {
  render() {
    return (
      <footer className="SignupFooter">
        <div className="signupFooterInfoContainer">
          <ul className="signupFooterInfoList">
            <li className="aboutTesla">Tesla © 2020</li>
            <li className="privacyPolicy">개인정보 처리방침 및 법적고지</li>
            <li className="contactInfo">연락처</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default SignupFooter;
