import React, { Component } from "react";
import "./ChoiceInterior.scss";

export default class ChoiceInterior extends Component {
  render() {
    const {
      data: { icons },
      interiorPushedAt,
    } = this.props.totalData;
    if (!icons || !interiorPushedAt) return <div />;
    const {
      handleClickChangeCarBtn,
      totalData: {
        batteryIsPushedAt,
        batteryIsPushedIndex,
        interiorPushedIndex,
        data: {
          icons: { battery_value, interior_icon },
        },
      },
    } = this.props;
    const { title, name, price } = interiorDetail;
    const newInterior_icon =
      battery_value[batteryIsPushedAt] === "Long Range"
        ? interior_icon.slice(0, 3)
        : interior_icon.slice(3);
    return (
      <div className="ChoiceInterior">
        <div className="choiceContainer">
          <div className="headText">프리미엄 인테리어 선택하기</div>
          <div className="wrapChoiceStyleButton">
            {newInterior_icon.map((style, index) => {
              const keyName = Object.keys(style)[0];
              return (
                <div
                  className={
                    interiorPushedAt === keyName
                      ? "choiceStyleButton pushed"
                      : "choiceStyleButton normal"
                  }
                  key={index}
                >
                  <img
                    onClick={() =>
                      handleClickChangeCarBtn(keyName, index, "interior")
                    }
                    alt="stylebuttonImg"
                    src={style[keyName]}
                  />
                </div>
              );
            })}
          </div>
          <div className="StyleDescription">
            <span>{title[interiorPushedIndex]}</span>
            <span>{price[interiorPushedIndex]}</span>
          </div>
          <div className="descriptionText">
            {name[batteryIsPushedIndex][interiorPushedIndex]}
          </div>
        </div>
        <div className="subTitle">기본사항:</div>
        <ul>
          {liText.map((text, index) => {
            const { mainText, subText } = text;
            return (
              <li className="mainDescription" key={index}>
                {mainText}
                <ul>
                  {subText &&
                    subText.map((subText, index) => {
                      return (
                        <li className="subDescription" key={index}>
                          {subText}
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const interiorDetail = {
  title: ["All Black", "Black/White", "Cream"],
  name: [
    ["애쉬 우드 데코", "다크 우드 데코", "오크 우드 데코"],
    ["카본 파이버 데코", "카본 파이버 데코", "오크 우드 데코"],
  ],
  price: ["포함", "₩1,929,000", "₩1,929,000"],
};

const liText = [
  {
    mainText: "Tesla의 조용한 실내에 맞춰 특별히 튜닝된 프리미엄 오디오 시스템",
  },
  {
    mainText:
      "전좌석 열선 시트, 열선 스티어링 휠, 와이퍼 블레이드 서리 제거 장치 및 워셔 노즐 히터를 포함한 동절기 기능",
  },
  {
    mainText:
      "HEPA 필터 시스템을 이용한 바이러스, 박테리아 및 악취의 실내 침투 방지",
  },
  {
    mainText: "프리미엄 커넥티비티 (1년 제공)",
    subText: [
      "실시간 교통 상황을 나타내는 위성 지도",
      "차량 내 인터넷 스트리밍 음악 및 미디어",
      "셀룰러를 이용한 주기적인 OTA(Over-the-air) 업데이트",
      "인터넷 브라우저",
    ],
  },
  {
    mainText: "Bluetooth®를 통한 음악 및 미디어 재생",
  },
  {
    mainText: "LED 안개등",
  },
  {
    mainText: "자외선 및 적외선 보호장치가 장착된 틴티드 글래스 루프",
  },
  {
    mainText: "자동 조도 조절, 전동식 폴딩이 가능한 열선 사이드 미러",
  },
  {
    mainText: "사용자 지정 운전자 프로필",
  },
];
