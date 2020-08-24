import React, { Component } from 'react';
import './Explantation.scss';

class Explantation extends Component {
  render() {
    return (
      <div className="Explantation">
              <div className="explain">
                <div className="items">
                  <div className="itemWrap">
                    <header className="itemHeader">
                      <div className="itemImg" />
                      <div className="itemText">시그니처 컬러</div>
                    </header>
                    <p className="itemContents">시그니처 멀티레이어 페인트로 Model S 커스터마이즈</p>
                  </div>
                </div>
                <div className="itemBorder items">
                  <div className="itemWrap">
                    <header className="itemHeader">
                    <div className="itemHeaderTitle">0.23</div>
                    <div className="itemScase"/>
                    </header>
                    <p className="itemContents">동급 차량 중 가장 낮은 공기저항계수를 자랑하는 가장 공기역학적인 차</p>
                  </div>
                </div>
                <div className="items">
                  <div className="itemWrap">
                    <header className="itemHeader">
                      <div className="itemRooftop" />
                      <div className="itemText">루프랙 호환</div>
                    </header>
                    <p className="itemContents">광활한 글래스 루프로 더 넓은 헤드룸과 자외선 차단 제공</p>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default Explantation;