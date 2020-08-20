import React, { Component } from 'react';
import SpecSum from '../Components/SpecSum';
import Aside from '../Components/Aside';
import './Distance.scss';

class Distance extends Component {
  render() {
    return (
      <div className="Distance">
        <div className="distanceMain">
          <div className="videoWrap">
            <video loop autoPlay="autoPlay" src="https://tesla-cdn.thron.com/static/119ZLJ_range.mp4-2000_TSMBHB.mp4?xseo="></video>
          </div>
          <div className="distanceMainContainer">
            <div className="spectSumWrap">
              <SpecSum />
            </div>
          </div>
        </div>
        <Aside />
      </div>
    );
  }
}

export default Distance;