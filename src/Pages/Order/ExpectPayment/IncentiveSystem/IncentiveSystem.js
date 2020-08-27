import React, { Component } from "react";
import "./IncentiveSystem.scss";

export default class IncentiveSystem extends Component {
  render() {
    return (
      <div className="IncentiveSystem">
        <div className="title">전기차 인센티브</div>
        <div className="subTitle">전기차 구매보조금</div>
        <div className="description">
          ‘전기자동차 보급대상 평가에 관한 규정’을 발표함에 따라 국고보조금 및
          각 지자체별 지방보조금을 포함한 전기자동차 보조금 혜택을 받으실 수
          있습니다. 매년 국고보조금 및 지방보조금액은상이할 수도 있으며,
          지방보조금은 각 지자체 별로 보조금 지급 물량에 따라 지급 여부가
          달라질수 있습니다.
        </div>
        <div className="description">
          환경친화적 자동차로 지정됨으로써, 개별 소비세 및 교육세를 최대
          ₩3,900,000까지 감면 받으실 수 있으며, 현재 현금 가격에는 해당 절감
          내용이 반영되어 있습니다.또한, 차량 등록시 환경친화적 자동차로서
          ₩1,400,000의 추가 세금 감면 혜택을 받으실 수 있습니다.
        </div>
      </div>
    );
  }
}
