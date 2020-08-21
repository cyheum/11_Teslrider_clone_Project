import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ModelFooter.scss';

class ModelFooter extends Component {
  render() {
    return (
      <div className="ModelFooter">
        <div className="container">
          <div className="footerLeft">
            <header className="header">
              <div className="headerName">퍼포먼스</div>
              <div className="headerContent">가장 빠른 가속</div>
            </header>
            <div className="contents">
              <div className="more">
                <div className="iconWrap">
                  <div className="moreIcon"></div>
                </div>
                자세히 알아보기
              </div>
              <div className="order">
                <Link to="/model" className="orderBtn">
                  <div className="orderBtnText">지금 주문하기</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="aside">
            Model S는 퍼포먼스와 안전성 측면에서 업계의 표준이 되고 있습니다. Tesla의 순수 전기 파워트레인은 어떤 기상 조건에서도 비교가 불가능한 퍼포먼스를 자랑하며 듀얼 모터 상시 사륜 구동(AWD), 루디크러스 가속을 제공합니다.
          </div>
        </div>
      </div>
    );
  }
}

export default ModelFooter;