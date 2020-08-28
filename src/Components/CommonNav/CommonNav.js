import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import SubMenu from "../../Pages/Main/SubMenu/SubMenu";
import TeslaLogoImg from "../../Pages/Main/ImgAndVideo/TeslaLogoImg";
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

  goToModelS = () => {
    this.props.history.push("/car/models");
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
          <Link to="/">
            <TeslaLogoImg />
          </Link>
        </div>
        <div>
          <ul className="carList">
            <a className="listTag" href="/car/models">
            <li onClick={this.goToModelS}>MODEL S</li>
            </a>
            <a className="listTag" href="/car/model3">
              <li>MODEL 3</li>
            </a>
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

export default withRouter(CommonNav);
