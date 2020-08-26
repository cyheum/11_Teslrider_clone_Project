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
      data: {
        icons: { battery_value },
      },
    } = this.props.totalData;
    this.state = {
      userCustomData: [
        {
          title: `${carList[modelPushedAt].model} ${battery_value[batteryIsPushedAt]}`,
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
      activePaymentMethod: 0,
      totalCarImg: {},
    };
  }

  clickHandlerChangeDetailBtn = () => {
    this.setState({
      detailBtnPushed: !this.state.detailBtnPushed,
    });
  };

  clickHandlerPaymentMethod = (index) => {
    this.setState({
      activePaymentMethod: index,
    });
  };

  render() {
    const { userCustomData, detailBtnPushed, activePaymentMethod } = this.state;
    const {
      data: {
        carImgPrice,
        carImgPrice: {
          price: { total_price, fuel_cost_reduction_price },
          image,
        },
      },
    } = this.props.totalData;
    return (
      <div className="ChoicePayment">
        <div className="wrapUserCustomCar">
          <img alt="userCustomCar" src={carImgPrice && image.car} />
          <div>귀하의 Model S</div>
        </div>
        <div className="subTitle">요약</div>
        <div className="detailUserChoiceContainer">
          {userCustomData.map((data, index) => {
            const { title, content } = data;
            return (
              <div className="detailUserChoice" key={index}>
                <div>{title}</div>
                <div className={detailBtnPushed ? "normal" : "hidden"}>
                  {content}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={
            detailBtnPushed
              ? "detailPaymentWrap normal"
              : "detailPaymentWrap hidden"
          }
        >
          <div className="totalPrice">
            <div>구매가격</div>
            <div>{`₩${parseInt(total_price).toLocaleString()}`}</div>
          </div>
          <div className="savingPrice">
            <div>향후 5년 간 예상 연료비 절감</div>
            <div>- ₩6,800,000</div>
          </div>
          <div className="afterSavingTotalPrice">
            <div>예상 전체 절감 비용 반영 후 가격</div>
            <div>{`₩${parseInt(
              fuel_cost_reduction_price
            ).toLocaleString()}`}</div>
          </div>
          <div className="savingPriceDescription">
            모든 절감 비용은 구매 이후 경험하게 됩니다.
          </div>
          <div className="savingPriceDescription">절감 계산 방법 보기</div>
        </div>
        <button
          className="detailButton"
          onClick={this.clickHandlerChangeDetailBtn}
        >
          <div className="detailButtonDeco">
            <div
              className={detailBtnPushed ? "detailBtn minus" : "detailBtn plus"}
            />
          </div>
          {detailBtnPushed ? "세부 사항 감추기" : "세부 사항 표시"}
        </button>
        <div className="showTotalPrice">
          <ul>
            {payment.map((el, idx) => {
              return (
                <li
                  className={
                    activePaymentMethod === idx
                      ? "paymentMethod active"
                      : "paymentMethod normal"
                  }
                  key={idx}
                  onClick={() => this.clickHandlerPaymentMethod(idx)}
                >
                  {el}
                </li>
              );
            })}
          </ul>
          <div className="afterSavingTotalPrice">
            <div>예상 전체 절감 비용 반영 후 가격</div>
            <div>{`₩${parseInt(
              fuel_cost_reduction_price
            ).toLocaleString()}`}</div>
          </div>
          <div className="afterSavingTotalPrice">
            <div>구매 가격</div>
            <div>{`₩${parseInt(total_price).toLocaleString()}`}</div>
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

const carList = {
  Model_S: {
    model: "Model S",
    battery: ["Long Range", "Performance"],
    batteryPrice: { 9: "₩107,990,000", 10: "₩132,990,000" },
    color: {
      16: "Pearl White Multi-Coat",
      17: "Solid Black",
      18: "Midnight Silver Metallic",
      19: "Deep Blue Metallic",
      20: "Red Multi-Coat",
    },
    colorPrice: {
      16: "포함",
      17: "₩1,929,000",
      18: "₩1,929,000",
      19: "₩1,929,000",
      20: "₩3,279,000",
    },
    wheel: {
      15: "19인치 실버 휠",
      16: "21인치 소닉 카본 트윈 터빈 휠",
      17: "19인치 실버 휠",
      18: "21인치 소닉 카본 트윈 터빈 휠",
    },
    wheelPrice: { 15: "포함", 16: "₩4,672,000", 17: "포함", 18: "₩4,672,000" },
    interior: { 8: "All black", 9: "Black & White", 10: "Cream" },
    interiorName: {
      9: { 8: "애쉬 우드 데코", 9: "다크 우드 데코", 10: "오크 우드 데코" },
      10: {
        8: "카본 파이버 데코",
        9: "카본 파이버 데코",
        10: "오크 우드 데코",
      },
    },
    interiorPrice: { 8: "포함", 9: "₩1,929,000", 10: "₩1,929,000" },
  },
};

const payment = ["현금", "리스", "할부"];
