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
    this.delay();
  }

  delay = () => {
    setTimeout(() => {
      this.setState(() => ({ activeClass: "appearComponent" }));
    }, 100);
  };

  render() {
    const {
      data: { carImgPrice },
    } = this.props.totalData;
    return (
      <div className="OrderInterior">
        <div className="wrapInsideCarImg">
          <img
            className={`insideCarImg ${this.state.activeClass}`}
            alt="insideCarImg"
            src={carImgPrice && carImgPrice.image.interior}
          />
        </div>
      </div>
    );
  }
}
