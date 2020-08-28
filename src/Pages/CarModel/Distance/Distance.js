import React, { Component } from 'react';
import DistanceSum from '../Components/DistanceSum/DistanceSum';
import Aside from '../Components/Aside/Aside';
import './Distance.scss';

class Distance extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      video : ""
    }

  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res.car }))
    .then(() => this.setState({
      video : this.state.data.video.distance
    }))
  }

  render() {
    return (
      <div className="Distance" id="distance">
        <div className="distanceMain">
          <div className="videoWrap">
            <video loop autoPlay src={this.state.video} muted/>
          </div>
          {this.props.distance &&
          <div className="distanceMainContainer">
            <div className="spectSumWrap">
              <DistanceSum model={this.props.model}/>
            </div>
          </div>
          }
        </div>
        {this.props.distance &&
        <Aside dataname={"distance"} model={this.props.model} where="distance"/>
        }
      </div>
    );
  }
}

export default Distance;