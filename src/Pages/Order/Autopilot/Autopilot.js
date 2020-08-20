import React, { Component } from "react";
import "./Autopilot.scss";

export default class Autopilot extends Component {
  render() {
    return (
      <div className="Autopilot">
        <div className="autopilotDescription">
          <div>오토파일럿</div>
          <div>
            오토파일럿 첨단 안전 및 편의 기술은 주행 시에 가장 부담스러울 수
            있는 부분을 돕도록 설계되었습니다. 새로운 Tesla 차량에는 긴급 제동,
            충돌 경고 및 사각지대 모니터링 등과 같은 운전자 보조 기능이 기본으로
            탑재됩니다.
          </div>
        </div>
        <div className="wrapVideo">
          <video
            className="autoPilotVideo"
            src="https://www.tesla.com/ns_videos/models/autonomy/hero.mp4"
            title="autopilot"
            autoplay=""
            loop
          />
        </div>
      </div>
    );
  }
}
