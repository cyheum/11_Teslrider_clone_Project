import React, { Component } from 'react';
import DistanceSum from '../Components/DistanceSum/DistanceSum';
import Aside from '../Components/Aside';
import './Distance.scss';

class Distance extends Component {
  render() {
    return (
      <div className="Distance" id="4">
        <div className="distanceMain">
          <div className="videoWrap">
            <video loop autoPlay="autoPlay" src="https://tesla-cdn.thron.com/static/119ZLJ_range.mp4-2000_TSMBHB.mp4?xseo=" />
          </div>
          <div className="distanceMainContainer">
            <div className="spectSumWrap">
              <DistanceSum />
            </div>
          </div>
        </div>
        <Aside dataname={"distance"}/>
      </div>
    );
  }
}

export default Distance;