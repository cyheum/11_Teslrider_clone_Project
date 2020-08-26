import React, { Component } from 'react';
import Explantation from '../Components/Explantation/Explantation';
import ModelFooter from '../Components/ModelFooter';
import './Exterior.scss';

class Exterior extends Component {
  render() {
    return (
      <div className="Exterior" id="7">
        <div className="exteriorContainer">
          <main className="main">
            <div className="mainImg">
              <Explantation />
            </div>

          </main>
          <ModelFooter dataname="exterior" />
        </div>
      </div>
    );
  }
}

export default Exterior;