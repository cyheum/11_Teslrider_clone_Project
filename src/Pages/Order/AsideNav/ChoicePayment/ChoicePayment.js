import React, { Component } from "react";
import "./ChoicePayment.scss";

export default class ChoicePayment extends Component {
  constructor(props) {
    super(props);
    const {
      modelPushedAt,
      batteryIsPushedAt,
      isWheelBtnPushedAt,
      isColorBtnPushedAt,
      interiorPushedAt,
      isAutopilotChecked,
    } = this.props.totalData;
    this.state = {
      userCustomData: [
        {
          title: `${carList[modelPushedAt].model} ${carList[modelPushedAt].battery[batteryIsPushedAt]}`,
          content: carList[modelPushedAt].batteryPrice[batteryIsPushedAt],
        },
        {
          title: carList[modelPushedAt].color[isColorBtnPushedAt],
          content: carList[modelPushedAt].colorPrice[isColorBtnPushedAt],
        },
        {
          title: carList[modelPushedAt].wheel[isWheelBtnPushedAt],
          content: carList[modelPushedAt].wheelPrice[isWheelBtnPushedAt],
        },
        {
          title: `${carList[modelPushedAt].interior[interiorPushedAt]} 프리미엄 인테리어 및 ${carList[modelPushedAt].interiorName[batteryIsPushedAt][interiorPushedAt]}`,
          content: carList[modelPushedAt].interiorPrice[interiorPushedAt],
        },
        { title: "오토파일럿", content: "포함" },
        isAutopilotChecked
          ? { title: "완전 자율 주행 기능", content: "₩9,043,000" }
          : {},
      ],
      detailBtnPushed: false,
      totalCarImg: {},
    };
  }

  componentDidMount() {
    fetch("/yeheum/MockData/choiceCar.json")
      .then((res) => res.json())
      .then((res) => this.setState({ totalCarImg: res }));
  }

  clickHandlerChangeDetailBtn = () => {
    this.setState({
      detailBtnPushed: !this.state.detailBtnPushed,
    });
  };

  render() {
    const { userCustomData, totalCarImg, detailBtnPushed } = this.state;
    const {
      modelPushedAt,
      batteryIsPushedAt,
      isWheelBtnPushedAt,
      isColorBtnPushedAt,
      interiorPushedAt,
      isAutopilotChecked,
      totalPrice,
      fuelCostReductionPrice,
    } = this.props.totalData;
    console.log(this.state);
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
        <div
          className={
            detailBtnPushed ? "totalPrice normal" : "totalPrice hidden"
          }
        >
          <div>구매가격</div>
          <div>{fuelCostReductionPrice}</div>
        </div>
        <div
          className={
            detailBtnPushed ? "savingPrice normal" : "savingPrice hidden"
          }
        >
          <div>향후 5년 간 예상 연료비 절감</div>
          <div>- ₩6,800,000</div>
        </div>
        <div
          className={
            detailBtnPushed
              ? "afterSavingTotalPrice normal"
              : "afterSavingTotalPrice hidden"
          }
        >
          <div>예상 전체 절감 비용 반영 후 가격</div>
          <div>{totalPrice}</div>
        </div>
        <div
          className={
            detailBtnPushed
              ? "savingPriceDescription normal"
              : "savingPriceDescription hidden"
          }
        >
          모든 절감 비용은 구매 이후 경험하게 됩니다.
        </div>
        <div
          className={
            detailBtnPushed
              ? "savingPriceDescription normal"
              : "savingPriceDescription hidden"
          }
        >
          절감 계산 방법 보기
        </div>
        <button
          className="detailButton"
          onClick={this.clickHandlerChangeDetailBtn}
        >
          <div className="detailButtonDeco">
            <div className={detailBtnPushed ? "minus" : "plus"} />
          </div>
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
            <div>{totalPrice}</div>
          </div>
          <div className="afterSavingTotalPrice">
            <div>구매 가격</div>
            <div>{fuelCostReductionPrice}</div>
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

const carList = [
  {
    model: "Model S",
    battery: ["Long Range", "Performance"],
    batteryPrice: ["₩107,990,000", "₩132,990,000"],
    color: [
      "Pearl White Multi-Coat",
      "Solid Black",
      "Midnight Silver Metallic",
      "Deep Blue Metallic",
      "Red Multi-Coat",
    ],
    colorPrice: [
      "포함",
      "₩1,929,000",
      "₩1,929,000",
      "₩1,929,000",
      "₩3,279,000",
    ],
    wheel: ["19인치 실버 휠", "21인치 소닉 카본 트윈 터빈 휠"],
    wheelPrice: ["포함", "₩4,672,000"],
    interior: ["All black", "Black & White", "Cream"],
    interiorName: {
      0: ["애쉬 우드 데코", "다크 우드 데코", "오크 우드 데코"],
      1: ["카본 파이버 데코", "카본 파이버 데코", "오크 우드 데코"],
    },
    interiorPrice: ["포함", "₩1,929,000", "₩1,929,000"],
  },
];
