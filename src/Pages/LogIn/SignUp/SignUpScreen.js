import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
      isChecked: false,
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

  basicCondition = () => {
    this.setState(
      {
        isChecked: this.state.isChecked === false ? true : false,
      },
      () => {
        console.log(this.state.isChecked);
      }
    );
  };

  createAccount = (e) => {
    e.preventDefault();
    fetch("http://10.58.1.69:8000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (!this.state.last_name) {
          alert("성에는 글자만 포함될 수 있습니다.");
        } else if (!this.state.first_name) {
          alert("이름에는 글자만 포함될 수 있습니다.");
        } else if (!this.state.email) {
          alert("유효한 이메일 주소를 입력해야 합니다.");
        } else if (!this.state.password) {
          alert("비밀번호가 필요합니다.");
        } else if (this.state.isChecked === false) {
          alert("계속하려면 개인 정보 공지 및 이용 약관에 동의해야 합니다.");
        } else if (!this.state.email.includes("@")) {
          alert("이메일 주소에 '@'를 포함해 주세요.");
        } else if (
          !(
            this.state.password.length >= 8 &&
            this.state.password.match(
              /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
            )
          )
        ) {
          alert(
            "최소 8자 이상의 유효한 비밀번호를 입력하시기 바랍니다. 비밀번호에는 최소 1개의 숫자와 1개의 문자가 포함되어야 합니다."
          );
        } else if (res.message === "SUCCESS") {
          localStorage.setItem("access_token", res.access_token);
          this.props.history.push("/");
        }
      });
  };

  render() {
    const { accountInfo, createAccount, handlePassword } = this;
    const { inputType, visible } = this.state;
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
                <input type="text" name="first_name" onChange={accountInfo} />
              </div>
              <div className="NameContainer">
                <label>
                  <span>성</span>
                </label>
                <input type="text" name="last_name" onChange={accountInfo} />
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
                    type={inputType}
                    name="password"
                    onChange={accountInfo}
                  />
                  <div className="showPwContainer">
                    <span onClick={handlePassword} className="showPw">
                      {visible}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <CheckAgreeContainer
              check={check.privacyNotice}
              checked={this.basicCondition}
            />
            <CheckAgreeContainer check={check.receiveUpdates} />
            <div className="signupBtnContainer">
              <SignupCreateAccountBtn signup={createAccount} />
              <LineContainer />
              <SignupLoginBtn />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpScreen);
