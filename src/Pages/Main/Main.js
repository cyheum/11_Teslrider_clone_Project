import React, { Component } from "react";
import Models from "./Models/Models";
import SecNav from "../../Components/SecNav/SecNav";
import KnowingTesla from "./KnowingTesla/KnowingTesla";
import PowerSupply from "./PowerSupply/PowerSupply";
import MainModelY from "./MainModelY/MainModelY";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      secNavDisplay: false,
    };
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 770) {
        this.setState({ secNavDisplay: true });
      } else {
        this.setState({ secNavDisplay: false });
      }
    });
  }

  render() {
    return (
      <div className="Main">
        <Models />
        {this.state.secNavDisplay && <SecNav />}
        <KnowingTesla />
        <PowerSupply />
        <MainModelY />
      </div>
    );
  }
}

export default Main;
