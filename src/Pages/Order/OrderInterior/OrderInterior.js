import React, { Component } from "react";
import "./OrderInterior.scss";

export default class OrderInterior extends Component {
  constructor() {
    super();

    this.state = {
      activeClass: "",
    };
  }

  componentDidMount() {
    this.animationDelay();
  }

  animationDelay = () => {
    setTimeout(() => {
      this.setState(() => ({ activeClass: "appearComponent" }));
    }, 400);
  };

  render() {
    const { carImgPrice } = this.props.totalData;
    return (
      <div className="OrderInterior">
        <div className="wrapInsideCarImg">
          <img
            className={`insideCarImg ${this.state.activeClass}`}
            alt="insideCarImg"
            src={carImgPrice.image && carImgPrice.image.interior}
          />
        </div>
      </div>
    );
  }
}
