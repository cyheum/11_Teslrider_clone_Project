import React, { Component } from "react";
import "./Interior.scss";

export default class Interior extends Component {
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
    const { batteryIsPushedAt, interiorPushedAt } = this.props.totalData;
    return (
      <div className="Interior">
        <div className="wrapInsideCarImg">
          <img
            className={`insideCarImg ${this.state.activeClass}`}
            alt="insideCarImg"
            src={interiorImgData[batteryIsPushedAt][interiorPushedAt]}
          />
        </div>
      </div>
    );
  }
}

const interiorImgData = {
  0: [
    "https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPMR&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008200649&version=v0028d202008200649",
    "https://static-assets.tesla.com/configurator/compositor?&options=$INB3W,$PPMR&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008200649&version=v0028d202008200649",
    "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPMR&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008200649&version=v0028d202008200649",
  ],
  1: [
    "https://static-assets.tesla.com/configurator/compositor?&options=$INBC3P,$PPMR&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008200649&version=v0028d202008200649",
    "https://static-assets.tesla.com/configurator/compositor?&options=$INBC3W,$PPMR&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008200649&version=v0028d202008200649",
    "https://static-assets.tesla.com/configurator/compositor?&options=$INB3C,$PPMR&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008200649&version=v0028d202008200649",
  ],
};
