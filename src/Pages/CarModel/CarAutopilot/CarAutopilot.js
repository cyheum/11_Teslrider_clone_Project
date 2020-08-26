import React, { Component } from 'react';
import OverflowContents from '../Components/OverflowContents';
import ModelFooter from '../Components/ModelFooter';
import './CarAutopilot.scss';

class CarAutopilot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: "autopilot"
    }
  }
  render() {
    return (
      <div className="CarAutopilot" id="5">
        <div className="autopilotMain">
          <div className="videoWrap">
            <video loop autoPlay="autoPlay" src="https://tesla-cdn.thron.com/static/WCL9WK_autopilot.mp4-2000_QQHSUM.mp4?xseo=" />
          </div>
          <OverflowContents compName={this.state.Component} />
        </div>
        <ModelFooter dataname={"autopilot"} />
      </div>
    );
  }
}

export default CarAutopilot;