import React, { Component } from "react";
import "./ChoicePayment.scss";

export default class ChoicePayment extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        userCustomData: [],
        detailBtnPushed: false,
        activePaymentMethod: 0,
        totalCarImg: {},
      };
    }
  }

  componentDidMount() {
    this.updatePaymentState();
  }

  updatePaymentState = () => {
    if (!this.props.totalData.batteryIsPushedAt) return <div />;
    const {
      modelPushedAt,
      batteryIsPushedAt,
      batteryIsPushedIndex,
      colorBtnPushedIndex,
      wheelBtnPushedIndex,
      interiorPushedIndex,
      isAutopilotChecked,
      icons,
    } = this.props.totalData;
    this.setState({
      userCustomData: [
        {
          title: `${carList[modelPushedAt].model} ${
            icons && icons.battery_value[batteryIsPushedAt]
          }`,
          content: carList[modelPushedAt].batteryPrice[batteryIsPushedIndex],
        },
        {
          title: carList[modelPushedAt].color[colorBtnPushedIndex],
          content: carList[modelPushedAt].colorPrice[colorBtnPushedIndex],
        },
        {
          title: carList[modelPushedAt].wheel[wheelBtnPushedIndex],
          content: carList[modelPushedAt].wheelPrice[wheelBtnPushedIndex],
        },
        {
          title: `${carList[modelPushedAt].interior[interiorPushedIndex]} 프리미엄 인테리어 및 ${carList[modelPushedAt].interiorName[batteryIsPushedIndex][interiorPushedIndex]}`,
          content: carList[modelPushedAt].interiorPrice[interiorPushedIndex],
        },
        { title: "오토파일럿", content: "포함" },
        isAutopilotChecked
          ? { title: "완전 자율 주행 기능", content: "₩9,043,000" }
          : {},
      ],
    });
  };

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
    const { carImgPrice } = this.props.totalData;
    if (!carImgPrice.price) return <div />;
    const { userCustomData, detailBtnPushed, activePaymentMethod } = this.state;
    const {
      carImgPrice: {
        price: { total_price, fuel_cost_reduction_price },
        image,
      },
    } = this.props.totalData;
    return (
      <div className="ChoicePayment">
        <div className="wrapUserCustomCar">
          <img alt="userCustomCar" src={image.car} />
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
            <div>{`₩${total_price.toLocaleString()}`}</div>
          </div>
          <div className="savingPrice">
            <div>향후 5년 간 예상 연료비 절감</div>
            <div>- ₩6,800,000</div>
          </div>
          <div className="afterSavingTotalPrice">
            <div>예상 전체 절감 비용 반영 후 가격</div>
            <div>{`₩${fuel_cost_reduction_price.toLocaleString()}`}</div>
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
            <div>{`₩${fuel_cost_reduction_price.toLocaleString()}`}</div>
          </div>
          <div className="afterSavingTotalPrice">
            <div>구매 가격</div>
            <div>{`₩${total_price.toLocaleString()}`}</div>
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
    wheel: [
      "19인치 실버 휠",
      "21인치 소닉 카본 트윈 터빈 휠",
      "19인치 실버 휠",
      "21인치 소닉 카본 트윈 터빈 휠",
    ],
    wheelPrice: ["포함", "₩4,672,000", "포함", "₩4,672,000"],
    interior: ["All black", "Black & White", "Cream"],
    interiorName: [
      ["애쉬 우드 데코", "다크 우드 데코", "오크 우드 데코"],
      ["카본 파이버 데코", "카본 파이버 데코", "오크 우드 데코"],
    ],
    interiorPrice: ["포함", "₩1,929,000", "₩1,929,000"],
  },
};

const payment = ["현금", "리스", "할부"];
