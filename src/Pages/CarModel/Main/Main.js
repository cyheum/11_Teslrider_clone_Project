import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      innerCirlce: false,
      dailParams: false,
      distance: 0,
      speed: 0,
      loading: 0,
      data : {},
      backImg : "",
      backColor: false,
      scrollTop : 0
    };
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({
      data : res.car,
      backImg : res.car.img.main,
      speed: parseFloat(res.car.spec.제로백)
    }))
    .then(() => {
      this.countNum("distance", this.state.data.spec.적재공간);
      this.countNum("loading", this.state.data.spec.주행가능거리);
      }
    )

    if (this.props.model ==="model3" ) {
      this.setState({
        backColor: true
      })
    }

    setTimeout(()=>this.setState({
      innerCirlce: true,
      dailParams: true
    }), 500)
  }

  countNum = (name, limit) => {
    let increase = setInterval(() => {
      this.setState({
        [name]: this.state[name] + 1,
      });
      if (this.state[name] > limit - 1) {
        clearInterval(increase);
      }
    }, 1);
  };

  backgroundImg = () => {
    return {
      background: `url(${this.state.backImg}) no-repeat center / 100%`
    }
  }

  title = (title) => {
    return title = title[0].toUpperCase()
    + title.substring(1, title.length - 1)
    +" "
    + title[title.length -1].toUpperCase()
  }

  render() {
    const { distance, speed, loading } = this.state;
    return (
      <div className="Main" id="main" style={this.backgroundImg()}>
        <div className="mainTitle">{this.title(this.props.model)}</div>
        <div className="mainCenter"/ >
        <div className={`mainSpecs ${this.state.backColor ? "turnColor" : ""}`}>
          <ul className="mainSpecsContainer">
            <li className="mainSpecsItem">
              <div className="specItemCallout">
                <div className="calloutTitle">
                  <section className="dialAnimate">
                    <div className="dial">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 21">
                        <path d="M 39.999999,19.798617 A 19.824417,19.633985 0 0 0 34.877782,6.6213841 L 34.16909,5.8402141 C 26.397915,-1.9017959 13.745528,-1.9531229 5.9107311,5.7258771 A 19.91037,19.719113 0 0 0 1.8907042e-4,19.833252 V 21 H 3.9064221 V 19.833252 H 2.3727481 A 17.490621,17.322608 0 0 1 6.8692771,8.2425621 l 1.181013,1.060755 0.778213,-0.874643 -1.18017,-1.038221 A 17.570675,17.401893 0 0 1 19.4513,2.4230131 v 2.227086 h 1.180592 v -2.273822 a 17.589214,17.420254 0 0 1 11.802124,5.002908 l -1.179328,0.991068 0.778213,0.874643 1.180171,-1.014019 a 17.484722,17.316765 0 0 1 4.461979,11.5447899 h -1.582128 v 1.165911 h 3.907076 z"></path>
                      </svg>
                      <div className={this.state.innerCirlce ? "dialInnerCircle active" : "dialInnerCircle inactive"}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 14">
                            <path d="M 28,14 H 0 C 0,6.2697403 6.2698076,0 14.000646,0 21.730623,0 28,6.2697403 28,14 Z"></path>
                          </svg>
                      </div>
                      <div className={this.state.dailParams ? "dialInnerParameter done" : "dialInnerParameter start"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 16">
                          <path d="m 3.9966676,14.119499 c 0,0.01426 0.00178,0.02809 0.00178,0.04236 a 1.8542546,1.8030219 0 0 1 -0.2773389,0.919658 1.8986998,1.8462391 0 0 1 -0.4084515,0.485329 c -0.3133387,0.261032 -0.7013456,0.40192 -1.1324642,0.42569 a 2.188927,2.1284474 0 0 1 -0.2102259,0.0073 c -0.042667,-4.32e-4 -0.084891,-0.0048 -0.1271133,-0.0078 a 2.0587025,2.001821 0 0 1 -0.4920101,-0.09415 2.0102572,1.9547142 0 0 1 -0.48178617,-0.210468 1.7991425,1.7494325 0 0 1 -0.7644577,-0.967201 1.8471433,1.7961071 0 0 1 -0.1035575,-0.61671 c 0,-0.0086 0.00134,-0.01728 0.00178,-0.02593 -4.444e-4,-0.02636 -0.003560001,-0.05143 -0.002660001,-0.07822 0,-0.01599 8.8890101e-4,-0.03155 0.002660001,-0.04711 L 1.4015113,0.54108535 C 1.4330673,0.23294635 1.7112944,-0.00129065 2.0428558,5.3517167e-6 2.3735282,8.7035172e-4 2.6508663,0.23813235 2.6815336,0.54670335 L 3.9975564,14.011024 c 0.00266,0.02247 0.00266,0.04495 0.00222,0.06699 -4.444e-4,0.01426 -0.00266,0.02766 -0.00311,0.04148 z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="digits">
                      <div className="digisitsNum">{speed}</div>
                      <span className="digisitsNum">초</span>
                    </div>
                  </section>
                </div>
                <p>0-100 km/h<br/>도달 시간</p>
              </div>
            </li>
            <li className="mainSpecsItem">
              <div className="specItemCallout">
                <div className="calloutTitle">
                  <div className="calloutTitleText">{loading}리터</div>
                </div>
                <div className="calloutText">동급 최고의 적재 공간</div>
              </div>
            </li>
            <li className="mainSpecsItem itemBorder">
              <div className="specItemCallout">
                <div className="calloutTitle">
                  <div className="calloutTitleText">{distance}km</div>
                </div>
                <div className="calloutText">주행 가능 거리</div>
              </div>
            </li>
            <li className="mainSpecsItem SpecBtn itemBorder">
              <div className="specItemBtn">
                <Link className="specBtnLink" to="/order">지금 주문하기</Link>
              </div>
            </li>           
          </ul>
        </div>
        <div className="mainFooter">
          <button className="footerBtn" onClick={this.toMove}></button>
        </div>
      </div>
    );
  }
}

export default Main;