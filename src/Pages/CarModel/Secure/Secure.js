import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Secure.scss';

class Secure extends Component {
  render() {
    return (
      <div className="Secure">
        <aside className="aside">
          <div className="asideContainer">
            <header className="asideHeader">
              <div className="headerTitle">안전</div>
              <div className="headerSubTitle">높은 충격 보호</div>
            </header>
            <content className="asideContent">
              개발 단계부터 전기차로 고안된 Model S는 견고한 구조와 차체 바닥의 배터리 팩으로 탁월한 충격 보호를 제공합니다.
            </content>
          </div>
          <div className="asideFooter">
            <div className="asideFooterMore">
              <div className="footerMoreBtn">
                <div className="footerMoreBtnImg"></div>
              </div>
              자세히 알아보기
            </div>
            <div className="asideFooterBtn">
              <Link to="/model" className="orderBtn">
                <div className="orderBtnText">지금 주문하기</div>
              </Link>
            </div>
          </div>
        </aside>
        <main className="main">
          <div className="mainImgContainer">
            <ul className="mainSpecs">
              <li className="SpecItem itemCrush">
                <span className="spectItemText">전방 충돌 방지</span>
              </li>
              <li className="SpecItem itemShock">
                <span className="spectItemText">측면 충격 보호</span>
              </li>
              <li className="SpecItem itemReverse">
                <span className="spectItemText">매우 낮은 전복 위험</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Secure;