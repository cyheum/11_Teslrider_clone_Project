import React, { Component } from "react";
import LoginTooltipIcon from "../LoginTooltipIcon";
import CheckAgreeContainer from "../CheckAgreeContainer";
import SignupCreateAccountBtn from "./SignupCreateAccountBtn";
import LineContainer from "../LineContainer";
import SignupLoginBtn from "./SignupLoginBtn";
import "./SignUpScreen.scss";

const check = {
  privacyNotice: `Tesla 계정을 생성함으로써 Tesla의 개인 정보 보호 공지 사항 및 이용 약관을 이해하였으며 이에 동의합니다.`,
  receiveUpdates: `Tesla의 업데이트를 수신하겠습니다.`,
};

class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      inputType: "password",
      visible: "표시",
    };
  }

  accountInfo = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePassword = () => {
    this.setState({
      inputType: this.state.inputType === "password" ? "text" : "password",
      visible: this.state.visible === "표시" ? "숨김" : "표시",
    });
  };

  createAccount = (e) => {
    e.preventDefault();
    fetch("localhost:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    console.log(this.state);
    const { accountInfo, createAccount, handlePassword } = this;
    return (
      <div className="SignupScreen">
        <div className="signupContainer">
          <h1 className="titleSignup">계정 만들기</h1>
          <form className="inputContainer">
            <section className="nameSection">
              <div className="NameContainer">
                <label>
                  <span>이름</span>
                </label>
                <input type="text" name="last_name" onChange={accountInfo} />
              </div>
              <div className="NameContainer">
                <label>
                  <span>성</span>
                </label>
                <input type="text" name="first_name" onChange={accountInfo} />
              </div>
            </section>
            <section className="accountInfo">
              <div className="NameContainer">
                <label>
                  <span>이메일 주소</span>
                </label>
                <input type="text" name="email" onChange={accountInfo} />
              </div>
              <div className="PasswordContainer">
                <label>
                  <span>비밀번호</span>
                  <LoginTooltipIcon />,
                </label>
                <div className="pwInputContainer">
                  <input
                    type={this.state.inputType}
                    name="password"
                    onChange={accountInfo}
                  />
                  <div className="showPwContainer">
                    <span onClick={handlePassword} className="showPw">
                      {this.state.visible}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <CheckAgreeContainer check={check.privacyNotice} />
            <CheckAgreeContainer check={check.receiveUpdates} />
            <div className="signupBtnContainer">
              <SignupCreateAccountBtn signup={this.createAccount} />
              <LineContainer />
              <SignupLoginBtn />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpScreen;
