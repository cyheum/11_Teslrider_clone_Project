import React, { Component } from 'react';
import DialIcon from './DialIcon';
import './SpecSum.scss';

class SpecSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerCirlce: false,
      dailParams: false,
      distance: 0,
      speed: 0,
      loading: 0,
      activeClass: "",
      motor:"",
      explainMotor: "",
      explainZero: "",
      explainMaxSpeed: ""
    };
  }

  componentDidMount () {

    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({
      data: res.car,
      motor : res.car.spec.모터,
      explainMotor : res.car.spec.explain.모터,
      explainZero : res.car.spec.explain.제로백,
      explainMaxSpeed : res.car.spec.explain.최고속도,
      speed: parseFloat(res.car.spec.제로백)
    }))
    .then(() => {
      this.countNum("distance", this.state.data.spec.최고속도);
    }
    )
    
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

  render() {
    const { distance, speed } = this.state;
    return (
      <div className="SpecSum">
        <ul className="specSumContainer">
          <li className="specSumContents">
            <div className="contentsHeder">{this.state.motor}</div>
            <div className="contentsText">
              {this.state.explainMotor}
            </div>
          </li>
          <li className="specSumContents border">
            <div className="contentsHeder">
              <section className="dialAnimate">
                <DialIcon />
                <div className="digits">
                  <div className="digisitsNum">{speed}</div>
                  <span className="digisitsNum">초</span>
                </div>
                </section>
            </div>
            <div className="contentsText">
              {this.state.explainZero}
            </div>
          </li>
          <li className="specSumContents">
            <div className="contentsHeder">{distance} km/h</div>
            <div className="contentsText">{this.state.explainMaxSpeed}</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default SpecSum;