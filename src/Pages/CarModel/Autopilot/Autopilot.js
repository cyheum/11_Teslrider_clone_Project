import React, { Component } from 'react';
import OverflowContents from '../Components/OverflowContents';
import ModelFooter from '../Components/ModelFooter';
import './Autopilot.scss';

class Autopilot extends Component {
  render() {
    return (
      <div className="Autopilot">
        <div className="autopilotMain">
          <div className="videoWrap">
            <video loop autoPlay="autoPlay" src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo=" />
          </div>
          <OverflowContents />
        </div>
        <ModelFooter dataname={"autopilot"}/>
      </div>
    );
  }
}

export default Autopilot;