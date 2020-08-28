import React, { Component } from "react";
import { Link } from "react-router-dom";
import SubMenu from "../../Pages/Main/SubMenu/SubMenu";
import TeslaLogoImg from "../../Pages/Main/ImgAndVideo/TeslaLogoImg";
import "./CommonNav.scss";

class CommonNav extends Component {
  constructor() {
    super();
    this.state = {
      subMenuDisplay: false,
    };
  }

  handleSubMenu = (e) => {
    this.setState({
      subMenuDisplay: !this.state.subMenuDisplay,
    });
  };

  render() {
    const { handleSubMenu } = this;
    return (
      <nav className="CommonNav">
        {this.state.subMenuDisplay && <SubMenu handleSubMenu={handleSubMenu} />}
        <div className="teslaLogoContainer">
          <a href={"/main"} >
          <TeslaLogoImg />
          </a>
        </div>
        <div>
          <ul className="carList">
            <a href={"/car/models"} className="link">
              <li>MODEL S</li>
            </a>
            <a href={"/car/model3"} className="link">
              <li>MODEL 3</li>
            </a>
            <li>MODEL X</li>
            <li>MODEL Y</li>
            <li>CYBERTRUCK</li>
            <li>POWERWALL</li>
          </ul>
        </div>
        <div className="navLoginContainer">
          <Link to="/login">
            <div className="navLoginBtn">로그인</div>
          </Link>
          <i className="fas fa-bars fa-2x" onClick={handleSubMenu} />
        </div>
      </nav>
    );
  }
}

export default CommonNav;
