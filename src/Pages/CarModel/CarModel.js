import React, { Component } from 'react';
import Main from './Main/Main';
import Secure from './Secure/Secure';
import Performance from './Performance/Performance';
import Distance from './Distance/Distance';
import Autopilot from './Autopilot/Autopilot';
import Interior from './Interior/Interior';
import Exterior from './Exterior/Exterior';
import Specs from './Specs/Specs';
import Order from './Order/Order';
import SideNav from '../../Components/SideNav';


class CarModel extends Component {
  render() {
    return (
      <>
        <Main></Main>
        <Secure></Secure>
        <Performance></Performance>
        <Distance></Distance>
        <Autopilot></Autopilot>
        <Interior></Interior>
        <Exterior></Exterior>
        <Specs></Specs>
        <Order></Order>
        <SideNav />
      </>
    );
  }
}

export default CarModel;