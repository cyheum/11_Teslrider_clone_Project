import React, { Component } from "react";
import "./Battery.scss";

export default class Battery extends Component {
  constructor() {
    super();

    this.state = {
      distance: 0,
      speed: 0,
      arrivalTime: 0,
      activeClass: "",
    };
  }

  componentDidMount() {
    this.countNum("distance", 487, 1);
    this.countNum("speed", 250, 1);
    this.countNum("arrivalTime", 3.8, 0.1);
    this.animationDelay();
  }

  countNum = (name, limit, incNum) => {
    let increase = setInterval(() => {
      if (limit % 1 !== 0) {
        this.setState({
          [name]: (this.state[name] * 10 + incNum * 10) / 10,
        });
        if (this.state[name] > (limit * 10 - incNum * 10) / 10) {
          clearInterval(increase);
        }
      } else {
        this.setState({
          [name]: this.state[name] + incNum,
        });
        if (this.state[name] > limit - incNum) {
          clearInterval(increase);
        }
      }
    });
  };

  animationDelay = () => {
    setTimeout(() => {
      this.setState(() => ({ activeClass: "appearComponent" }));
    }, 400);
  };

  render() {
    const { distance, speed, arrivalTime, activeClass } = this.state;
    const {
      data: { carImgPrice },
    } = this.props.totalData;
    return (
      <div className="Battery">
        <div>
          <img
            className={`carImg ${activeClass}`}
            alt="carImg"
            src={carImgPrice && carImgPrice.image.car}
          />
        </div>
        <div className="carDescription">
          <ul>
            <li>
              <span className="carDescriptiontopText">{distance}Km</span>
              <span className="carDescriptionbottomText">주행 가능 거리</span>
            </li>
            <li>
              <span className="carDescriptiontopText">{speed}Km/h</span>
              <span className="carDescriptionbottomText">최고속도</span>
            </li>
            <li>
              <span className="carDescriptiontopText">{arrivalTime}초</span>
              <span className="carDescriptionbottomText">
                0-100km/h 도달시간
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
