import React, { Component } from 'react';
import './DistanceSum.scss';

class DistanceSum extends Component {

  constructor(props){
    super(props);
    this.state = {
      data : {}
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res.car }))
  }

  render() {
    return (
      <div className="DistanceSum">
        <ul className="sumContainer">
          <li className="sumContents">
            <div className="contentsHeder">{this.state.data.spec?.주행가능거리}</div>
            <span className="headerParams"> km</span>
            <div className="contentsText">
              {this.state.data.spec?.explain?.주행가능거리}
            </div>
          </li>
          <li className="sumContents border">
            <div className="contentsHeder">{this.state.data.spec?.충전시간}</div>
            <span className="headerParams"> 분</span>
            <div className="contentsText">
              {this.state.data.spec?.explain?.충전시간}
            </div>
          </li>
          <li className="sumContents">
            <div className="contentsHeder">{this.state.data.spec?.충전소}+</div>
            <div className="contentsText">{this.state.data.spec?.explain?.충전소}</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default DistanceSum;