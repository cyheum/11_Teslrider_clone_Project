import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LoginTooltipIcon from "./LoginTooltipIcon";
import LoginPageLoginBtn from "./LoginPageLoginBtn";
import CreateAccountBtn from "./CreateAccountBtn";
import LineContainer from "./LineContainer";
import API from "../../config";

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      inputType: true,
      visible: true,
    };
  }

  userInfo = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handlePassword = () => {
    this.setState({
      inputType: !this.state.inputType,
      visible: !this.state.visible,
    });
  };

  tryLogin = (e) => {
    e.preventDefault();

    if (!this.state.email)
      return alert("유효한 이메일 주소를 입력해야 합니다.");
    if (!this.state.email.includes("@"))
      return alert("이메일 주소에 '@'를 포함해 주세요.");
    if (!this.state.password) return alert("비밀번호가 필요합니다.");
    if (
      !(
        this.state.password.length >= 8 &&
        this.state.password.match(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)
      )
    ) {
      return alert(
        "최소 8자 이상의 유효한 비밀번호를 입력하시기 바랍니다. 비밀번호에는 최소 1개의 숫자와 1개의 문자가 포함되어야 합니다."
      );
    } else {
      fetch(`${API}/user/signin`, {
        method: "POST",
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.access_token) {
            localStorage.setItem("access_token", res.access_token);
            this.props.history.push("/");
          } else {
            alert("입력하신 이메일 주소 및 비밀번호가 등록되어 있지 않습니다.");
          }
        });
    }
  };

  render() {
    const { userInfo, handlePassword, tryLogin } = this;
    const { inputType, visible } = this.state;
    return (
      <div className="LoginScreen">
        <div className="loginContainer">
          <h1 className="titleLogin">로그인</h1>
          <form className="inputContainer">
            <div className="EmailContainer">
              <label>
                <span>이메일 주소</span>
                <LoginTooltipIcon />
              </label>
              <input type="text" name="email" onChange={userInfo} />
            </div>
            <div className="PasswordContainer">
              <label>
                <span>비밀번호</span>
              </label>
              <div className="pwInputContainer">
                <input
                  type={inputType ? "password" : "text"}
                  name="password"
                  onChange={userInfo}
                />
                <div className="showPwContainer">
                  <span className="showPw" onClick={handlePassword}>
                    {visible ? "표시" : "숨김"}
                  </span>
                </div>
              </div>
            </div>
            <LoginPageLoginBtn login={tryLogin} />
            <p className="helpUser">
              <a href="#">이메일 주소를 잊으셨나요?</a>
              <span>|</span>
              <a href="#">비밀번호를 잊으셨나요?</a>
            </p>
          </form>
          <LineContainer />
          <CreateAccountBtn />
        </div>
      </div>
    );
  }
}

export default withRouter(LoginScreen);
