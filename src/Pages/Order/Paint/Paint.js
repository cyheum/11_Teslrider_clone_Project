import React, { Component } from "react";
import "./Paint.scss";

export default class Paint extends Component {
  constructor() {
    super();

    this.state = {
      activeClass: "",
      totalCarImg: {},
    };
  }
  componentDidMount() {
    fetch("/yeheum/MockData/choiceCar.json")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          totalCarImg: res,
        })
      );
    this.delay();
  }

  delay = () => {
    setTimeout(() => {
      this.setState(() => ({ activeClass: "appearComponent" }));
    }, 100);
  };

  render() {
    const {
      batteryIsPushedAt,
      isColorBtnPushedAt,
      isWheelBtnPushedAt,
    } = this.props.totalData;
    const { totalCarImg } = this.state;
    return (
      <div className="Paint">
        <div>
          <img
            className={`carImg ${this.state.activeClass}`}
            alt="carImg"
            src={
              totalCarImg.carImgData &&
              totalCarImg.carImgData[batteryIsPushedAt][isWheelBtnPushedAt][
                isColorBtnPushedAt
              ]
            }
          />
        </div>
      </div>
    );
  }
}
