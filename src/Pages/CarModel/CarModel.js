import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import CommonNav from '../../Components/CommonNav/CommonNav';
import SecNav from '../Main/SecNav/SecNav';
import Main from './Main/Main';
import Secure from './Secure/Secure';
import Performance from './Performance/Performance';
import Distance from './Distance/Distance';
import CarAutopilot from './CarAutopilot/CarAutopilot';
import Interior from './CarInterior/CarInterior';
import Exterior from './Exterior/Exterior';
import Specs from './Specs/Specs';
import Order from './Order/Order';
import SideNav from '../../Components/SideNav/SideNav';
import CommonFooter from '../../Components/CommonFooter/CommonFooter';
import './CarModel.scss';


class CarModel extends Component {
  constructor() {
    super();

    this.state = {
      secNavDisplay: false,
      currentPosY: 0,
      scroll: false
    };

    this.firstCom = React.createRef();
  }
  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 770) {
        this.setState({ secNavDisplay: true });
      } else {
        this.setState({ secNavDisplay: false });
      }
    });
    window.addEventListener('keydown', this.handleScroll);
  }

  handleScroll = e => {
    let scrollY = window.scrollY
    if (this.state.scroll && scrollY < this.state.currentPosY) return;
    this.setState({ scroll: false });
    if (e.keyCode == 90) {
    // if (this.prev > scrollY && scrollY < this.state.currentPosY) {
      this.setState({ scroll: true, currentPosY: this.state.currentPosY - 943},
        () => window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" }));
      } else if ( e.keyCode == 88) {
    // } else if (this.prev < scrollY && scrollY > this.state.currentPosY) {
      this.setState({ scroll: true, currentPosY: this.state.currentPosY + 943},
        () => window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" }));
    }
    this.prev = scrollY;
  }
  
  render() {
    return (
      <div className="models">
        <CommonNav />
        <Main />
        {this.state.secNavDisplay && <SecNav />}
        <Secure/>
        <Performance />
        <Distance />
        <CarAutopilot/>
        <Interior/>
        <Exterior />
        <Specs />
        <Order  />
        <SideNav />
        <CommonFooter />
      </div>
    );
  }
}

export default withRouter(CarModel);