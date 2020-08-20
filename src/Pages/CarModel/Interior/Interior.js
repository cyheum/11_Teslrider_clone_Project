import React, { Component } from 'react';
import OverflowContents from '../Components/OverflowContents';
import ModelFooter from '../Components/ModelFooter';
import './Interior.scss';

class Interior extends Component {
  render() {
    return (
      <div className="Interior">
        <div className="interiorMain">
          <div className="imgWrap"></div>
          <OverflowContents />
        </div>
        <ModelFooter />
      </div>
    );
  }
}

export default Interior;