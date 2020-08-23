import React, { Component } from "react";
import LogInNav from "./LogInNav";
import LoginTooltipIcon from "./LoginTooltipIcon";
import LoginFooter from "./LoginFooter";
import "./Login.scss";

class LogIn extends Component {
  render() {
    return (
      <div className="LogIn">
        <LogInNav />
        <div className="loginScreen">
          <div className="loginContainer">
            <h1 className="titleLogin">로그인</h1>
            <form className="inputContainer">
              <div className="emailContainer">
                <label>
                  <span>이메일 주소</span>
                  <LoginTooltipIcon />
                </label>
                <input type="text" />
              </div>
              <div className="passwordContainer">
                <label>
                  <span>비밀번호</span>
                </label>
                <div className="pwInputContainer">
                  <input type="password" />
                  <div className="showPwContainer">
                    <span className="showPw">표시</span>
                  </div>
                </div>
              </div>
              <button className="loginPageLoginBtn" type="submit">
                로그인
              </button>
              <p className="helpUser">
                <a href="/">이메일 주소를 잊으셨나요?</a>
                <span>|</span>
                <a href="/">비밀번호를 잊으셨나요?</a>
              </p>
            </form>
            <div className="lineContainer">
              <span className="or">또는</span>
            </div>
            <button className="createAccountBtn">계정 만들기</button>
          </div>
        </div>
        <LoginFooter />
      </div>
    );
  }
}

export default LogIn;
