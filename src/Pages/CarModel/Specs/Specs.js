  import React, { Component } from 'react';
  import InfoContent from './InfoContent';
  import './Specs.scss';

  class Specs extends Component {
    constructor(props){
      super(props);
      this.state = {
        data: {},
        keyName: "performance",
        backImg: "",
        color: 0,
      }
    }

    componentDidMount() {
      // fetch("http://10.58.5.236:8000/car/specification?type=Model_3")
      fetch(`/data/car/${this.props.model}.json`)
      .then((res) => res.json())
      .then((res) => this.setState({
        data : res.car,
        backImg: res.car.img.spec
      }))
  }
  
  handleType = (e, idx) => {
    this.setState({
      keyName: e.target.id,
      color: idx
    })
  }

  makeLabel = () => {
    return LABEL.map(({label}, idx) =>
    (
    <label className={
      `topLabel ${this.state.color === idx ? this.state.keyName : ""}`}
      onClick={(e)=>this.handleType(e, idx)} id={LABEL[idx].className}
      key={idx}>
        {label}
      </label>
    ))
  }

  backgroundImg = () => {
    return {
      background: `url(${this.state.backImg}) no-repeat center / 100%`
    }
  }

  render() {
    const { keyName, data } = this.state;
    return (
      <div className="Specs" id="specs">
        <div className="specContainer">
          <div className="specImg">
            <div className="modelImg" style={this.backgroundImg()} / >
          </div>
          <div className="specInfo">
            <div className="infoWrap">
              <div className="infoHeader">{this.props.model} 제원</div>
              <div className="inforMain">
                <div className="labelWrap">
                  {this.makeLabel()}
                </div>
                {this.state.data.performance && <InfoContent data={data} keyName={keyName}/>} 
              </div>
              <div className="inforFooter">
                <div className="more">
                  <div className="iconWrap">
                    <div className="moreIcon" />
                  </div>
                  목록확장
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const LABEL = [
  {label: "퍼포먼스", className: "performance"},
  {label: "LONG RANGE", className: "longRange"},
]
export default Specs;