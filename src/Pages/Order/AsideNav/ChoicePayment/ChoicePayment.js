import React, { Component } from "react";
import "./ChoicePayment.scss";

export default class ChoicePayment extends Component {
  constructor() {
    super();
    this.state = {
      userCustomData: [
        { title: "Model S Long Range", content: "₩107,990,000" },
        { title: "Pearl White Multi-Coat", content: "포함" },
        { title: "19인치 실버 휠", content: "포함" },
        {
          title: "All Black 프리미엄 인테리어 및 애쉬 우드 데코",
          content: "포함",
        },
        { title: "오토파일럿", content: "포함" },
      ],
    };
  }

  render() {
    const { userCustomData } = this.state;
    return (
      <div className="ChoicePayment">
        <div className="wrapUserCustomCar">
          <img
            alt="userCustomCar"
            src="https://static-assets.tesla.com/configurator/compositor?&options=$WTAS,$PPSW,$MTS03&view=STUD_3QTR_V2&model=ms&size=1441&bkba_opt=1&version=v0028d202008190353"
          />
          <div>귀하의 Model S</div>
        </div>
        <div className="subTitle">요약</div>
        <div className="detailUserChoiceContainer">
          {userCustomData.map((data) => {
            const { title, content } = data;
            return (
              <div className="detailUserChoice">
                <div>{title}</div>
                <div>{content}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
