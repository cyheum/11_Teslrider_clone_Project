import React, { Component } from 'react';
import OverflowContents from '../Components/OverflowContents';
import ModelFooter from '../Components/ModelFooter';
import './CarAutopilot.scss';

class CarAutopilot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      video: ""
    }
  }
  
  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res, video: res.car.video.autopilot }))
  }

  componentDidUpdate(_, prevState) {
    if(prevState.video !== this.state.video){
    }
  }

  render() {
    const { model } = this.props;
    return (
      <div className="CarAutopilot" id="autopilot">
        <div className="autopilotMain">
          <div className="videoWrap">
            <video loop muted autoPlay src={this.state.video} />
          </div>
          <OverflowContents dataname="autopilot"  model={model}/>
        </div>
        <ModelFooter dataname="autopilot" model={model}/>
      </div>
    );
  }
}

export default CarAutopilot;