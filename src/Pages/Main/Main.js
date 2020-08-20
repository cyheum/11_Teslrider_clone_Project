import React, { Component } from "react";
import Models from "./Models/Models";
import KnowingTesla from "./KnowingTesla/KnowingTesla";
import PowerSupply from "./PowerSupply/PowerSupply";
import MainModelY from "./MainModelY/MainModelY";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <Models />
        <KnowingTesla />
        <PowerSupply />
        <MainModelY />
      </>
    );
  }
}

export default Main;
