import React, { Component } from 'react';
import OverflowContents from '../Components/OverflowContents';
import ModelFooter from '../Components/ModelFooter';
import './CarInterior.scss';

class CarInterior extends Component {
  
  render() {
    return (
      <div className="CarInterior" id="6">
        <div className="interiorMain">
          <div className="imgWrap"></div>
          <OverflowContents interior={true}/>
        </div>
        <ModelFooter dataname="interior"/>
      </div>
    );
  }
}

export default CarInterior;