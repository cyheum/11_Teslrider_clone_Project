  import React, { Component } from 'react';
  import InfoContent from './InfoContent';
  import './Specs.scss';

  class Specs extends Component {
    constructor(){
      super();
      this.state = {
        data: {},
        keyName: "performance",
        css: 0
      }
    }

    componentDidMount() {
      // fetch("http://10.58.5.236:8000/car/86")
      fetch("/data/Data.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data : res.car }))
  }
  
  handleType = (e, idx) => {
    this.setState({
      keyName: e.target.id,
      css: idx
    })
  }

  makeLabel = () => {
    return LABEL.map(({label}, idx) =>
    (
    <label className={`topLabel ${this.state.css === idx ? this.state.keyName : ""}`} onClick={(e)=>this.handleType(e, idx)} id={LABEL[idx].className} key={idx}>{label}</label>
    ))
  }
  render() {
    return (
      <div className="Specs" id="8">
        <div className="specContainer">
          <div className="specImg">
            <div className="modelImg"/ >
          </div>
          <div className="specInfo">
            <div className="infoWrap">
              <div className="infoHeader">Model S 제원</div>
              <div className="inforMain">
                <div className="labelWrap">
                  {this.makeLabel()}
                </div>
                {this.state.data.performance && <InfoContent data={this.state.data} keyName={this.state.keyName}/>} 
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