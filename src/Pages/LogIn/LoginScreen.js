import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
    fetch("http://10.58.1.69:8000/user/signin", {
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
                <input type={inputType} name="password" onChange={userInfo} />
                <div className="showPwContainer">
                  <span className="showPw" onClick={handlePassword}>
                    {visible}
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
