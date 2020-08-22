import React, { Component } from "react";
import Models from "./Models/Models";
import SecNav from "./SecNav/SecNav";
import KnowingTesla from "./KnowingTesla/KnowingTesla";
import PowerSupply from "./PowerSupply/PowerSupply";
import MainModelY from "./MainModelY/MainModelY";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Models />
        {/* <SecNav /> */}
        <KnowingTesla />
        <PowerSupply />
        <MainModelY />
      </div>
    );
  }
}

export default Main;
