import React, { Component } from 'react';
import SpecSum from '../Components/SpecSum/SpecSum';
import ModelFooter from '../Components/ModelFooter';
import './Performance.scss';

class Performance extends Component {
  render() {
    return (
      <div className="Performance" id="3">
        <div className="performanceContainer">
          <div className="performanceMain">
            <SpecSum />
          </div>
          <ModelFooter dataname={"performance"}/>
        </div>
      </div>
    );  
  }
}

export default Performance;