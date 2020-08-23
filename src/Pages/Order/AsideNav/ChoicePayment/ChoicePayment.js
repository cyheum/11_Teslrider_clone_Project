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
      totalCarImg: {},
    };
  }

  componentDidMount() {
    fetch("/yeheum/MockData/choiceCar.json")
      .then((res) => res.json())
      .then((res) => this.setState({ totalCarImg: res }));
  }

  render() {
    const { userCustomData, totalCarImg } = this.state;
    const {
      batteryIsPushedAt,
      isWheelBtnPushedAt,
      isColorBtnPushedAt,
      interiorPushedAt,
      isAutopilotChecked,
    } = this.props.totalData;
    console.log(totalCarImg);

    return (
      <div className="ChoicePayment">
        <div className="wrapUserCustomCar">
          <img
            alt="userCustomCar"
            src={
              totalCarImg.carImgData &&
              totalCarImg.carImgData[batteryIsPushedAt][isWheelBtnPushedAt][
                isColorBtnPushedAt
              ]
            }
          />
          <div>귀하의 Model S</div>
        </div>
        <div className="subTitle">요약</div>
        <div className="detailUserChoiceContainer">
          {userCustomData.map((data, index) => {
            const { title, content } = data;
            return (
              <div className="detailUserChoice" key={index}>
                <div>{title}</div>
                <div>{content}</div>
              </div>
            );
          })}
        </div>
        <div className="totalPrice">
          <div>구매가격</div>
          <div>₩107,990,000</div>
        </div>
        <div className="savingPrice">
          <div>향후 5년 간 예상 연료비 절감</div>
          <div>- ₩6,800,000</div>
        </div>
        <div className="afterSavingTotalPrice">
          <div>예상 전체 절감 비용 반영 후 가격</div>
          <div>₩101,190,000</div>
        </div>
        <div className="savingPriceDescription">
          모든 절감 비용은 구매 이후 경험하게 됩니다.
        </div>
        <div className="savingPriceDescription">절감 계산 방법 보기</div>
        <button className="detailButton">
          <div className="detailButtonDeco" />
          세부 사항 감추기
        </button>
        <div className="showTotalPrice">
          <ul>
            <li>현금</li>
            <li>리스</li>
            <li>할부</li>
          </ul>
          <div className="afterSavingTotalPrice">
            <div>예상 전체 절감 비용 반영 후 가격</div>
            <div>₩101,190,000</div>
          </div>
          <div className="afterSavingTotalPrice">
            <div>구매 가격</div>
            <div>₩107,990,000</div>
          </div>
          <div>세금 및 수수료 제외</div>
          <div className="feesContainer">
            <div className="fees">
              <div>주문 수수료</div>
              <div>₩100,000</div>
            </div>
            <div>주문 수수료 환불 불가</div>
          </div>
        </div>
      </div>
    );
  }
}
