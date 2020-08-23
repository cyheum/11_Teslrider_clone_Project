import React, { Component } from "react";
import LoginTooltipIcon from "./LoginTooltipIcon";
import LoginPageLoginBtn from "./LoginPageLoginBtn";
import CreateAccountBtn from "./CreateAccountBtn";
import LineContainer from "./LineContainer";

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      inputType: "password",
      visible: "표시",
    };
  }

  userInfo = (e) => {
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

  tryLogin = (e) => {
    e.preventDefault();
    fetch("localhost:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  render() {
    console.log(this.state);
    const { userInfo, handlePassword, tryLogin } = this;
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
                  type={this.state.inputType}
                  name="password"
                  onChange={userInfo}
                />
                <div className="showPwContainer">
                  <span className="showPw" onClick={handlePassword}>
                    {this.state.visible}
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

export default LoginScreen;
