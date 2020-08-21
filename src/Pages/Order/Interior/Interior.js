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
    return (
      <div className="Interior">
        <div>
          <img
            className={`insideCarImg ${this.state.activeClass}`}
            alt="insideCarImg"
            src="https://static-assets.tesla.com/configurator/compositor?&options=$INB3P,$PPSW&view=STUD_SEAT_V2&model=ms&size=1441&version=v0028d202008130539&version=v0028d202008130539"
          />
        </div>
      </div>
    );
  }
}
