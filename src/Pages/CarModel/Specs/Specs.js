import React, { Component } from 'react';
import InfoContent from './InfoContent';
import './Specs.scss';

class Specs extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      keyName: "performance"
    }
  }

  componentDidMount() {
    fetch("/data/Data.json")
    // {method: "GET",
    // body:JSON.stringify({
    //   model: this.state.data,
    // })})
    .then((res) => res.json())
    .then((res) => this.setState({ data: res.car}));
  }
  
  handleType = (e) => {
    this.setState({
      keyName: e.target.id
    })
  }

  render() {
    return (
      <div className="Specs">
        <div className="specContainer">
          <div className="specImg">
            <div className="modelImg"/ >
          </div>
          <div className="specInfo">
            <div className="infoWrap">
              <div className="infoHeader">Model S 제원</div>
              <div className="inforMain">
                <div className="labelWrap">
                  <label className="topLabel" onClick={this.handleType} id="performance">퍼포먼스</label>
                  <label className="topLabel" onClick={this.handleType} id="longRange">LONG RANGE</label>
                </div>
                <InfoContent data={this.state.data} keyName={this.state.keyName}/>
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

export default Specs;