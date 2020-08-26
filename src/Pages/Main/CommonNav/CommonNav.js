import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubMenu from "../SubMenu/SubMenu";
import TeslaLogoImg from "../ImgAndVideo/TeslaLogoImg";
import "./CommonNav.scss";

class CommonNav extends Component {
  constructor() {
    super();
    this.state = {
      subMenuDisplay: false,
      isLoggedIn: false,
    };
  }

  handleSubMenu = () => {
    this.setState({
      subMenuDisplay: !this.state.subMenuDisplay,
    });
  };

  componentDidMount = () => {
    if (localStorage.getItem("access_token")) {
      this.setState({
        isLoggedIn: true,
      });
    }
  };

  render() {
    const { handleSubMenu } = this;
    const { subMenuDisplay, isLoggedIn } = this.state;
    return (
      <nav className="CommonNav">
        {subMenuDisplay && <SubMenu handleSubMenu={handleSubMenu} />}
        <div className="teslaLogoContainer">
          <TeslaLogoImg />
        </div>
        <div>
          <ul className="carList">
            <li>MODEL S</li>
            <li>MODEL 3</li>
            <li>MODEL X</li>
            <li>MODEL Y</li>
            <li>CYBERTRUCK</li>
            <li>POWERWALL</li>
          </ul>
        </div>
        <div className="navLoginContainer">
          {isLoggedIn ? (
            <div className="navLoginBtn">TESLA 계정</div>
          ) : (
            <Link to="/login">
              <div className="navLoginBtn">로그인</div>
            </Link>
          )}
          <i className="fas fa-bars fa-2x" onClick={handleSubMenu} />
        </div>
      </nav>
    );
  }
}

export default CommonNav;
