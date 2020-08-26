import React, { Component } from "react";
import "./Paint.scss";

export default class Paint extends Component {
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
      <div className="Paint">
        <div>
          <img
            className={`carImg ${this.state.activeClass}`}
            alt="carImg"
            src={carImgPrice && carImgPrice.image.car}
          />
        </div>
      </div>
    );
  }
}
