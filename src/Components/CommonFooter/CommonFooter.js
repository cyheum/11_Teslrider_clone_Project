import React, { Component } from "react";
import "./CommonFooter.scss";

class CommonFooter extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      backColor: false
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data: res }));
    if (this.props.model ==="model3" ) {
      this.setState({
        backColor: true
      })
    }
  };

  render() {
    return (
      <>
      <footer className={`CommonFooter ${this.state.backColor ? "invert" : ""}`}>
        <ul className="footerList">
          <li>
            <a className="footerListVersionOfTesla" href="/">
              Tesla © 2020
            </a>
          </li>
          <li>
            <a href="/">개인정보 처리방침 및 법적고지</a>
          </li>
          <li>
            <a href="/">연락처</a>
          </li>
          <li>
            <a href="/">채용정보</a>
          </li>
          <li>
            <a href="/">뉴스레터 받기</a>
          </li>
          <li>
            <a href="/">새 소식</a>
          </li>
          <li>
            <a className="footerListPlaceOfTesla" href="/">
              위치
            </a>
          </li>
        </ul>
        <p className="footerBusinessInfo">
          사업자등록번호 : 524-88-00237 | 마크해수스썰다, 데이비드존 파인스타인
          | 통신판매업신고: 제2016-서울강남-02964호 | 사업자정보확인 | 주소 :
          서울특별시 강남구 영동대로 730 | 대표전화 : 080-822-0291 |
          southkorea@tesla.com
        </p>
      </footer>
      </>
    );
  }
}

export default CommonFooter;