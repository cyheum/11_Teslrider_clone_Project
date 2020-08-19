import React, { Component } from "react";
import "./Paint.scss";

export default class Paint extends Component {
  render() {
    return (
      <div className="Paint">
        <div>
          <img
            className="carImg"
            alt="carImg"
            src="https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PPSW,$MTS03&view=STUD_3QTR_V2&model=ms&size=1441&bkba_opt=1&version=v0028d202008130539&version=v0028d202008130539}"
          />
        </div>
      </div>
    );
  }
}
