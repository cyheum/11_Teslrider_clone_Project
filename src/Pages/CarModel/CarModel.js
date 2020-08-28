import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import CommonNav from '../../Components/CommonNav/CommonNav';
import Main from './Main/Main';
import SecNav from '../../Components/SecNav/SecNav';
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
  constructor(props) {
    super(props);
    this.state = {
      secNavDisplay: false,
      currentPosY: 0,
      scroll: false,
      model : this.props.match.params.model,
      secure: false,
      performance: false,
      distance: false,
      carAuto: false,
      interior: false,
      exterior: false,
      specs: false
    };
  }
  
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY >= 770) {
        this.setState({ secure: true })
      }
      if (scrollY >= 1440) {
        this.setState({ performance: true })
      }
      if (scrollY >= 2310) {
        this.setState({ distance: true })
      }
      if (scrollY >= 3080) {
        this.setState({ carAuto: true })
      }
      if (scrollY >= 3850) {
        this.setState({ interior: true })
      }
      if (scrollY >= 5390) {
        this.setState({ exterior: true })
      }
      if (scrollY >= 6000) {
        this.setState({ specs: true })
      }

        if (scrollY >= 770) {
        this.setState({ secNavDisplay: true});
        } else {
          this.setState({ secNavDisplay: false});
        }
    });
    window.addEventListener('keydown', this.handleScroll);
  }

  handleScroll = e => {
    let scrollY = window.scrollY
    if (this.state.scroll && scrollY < this.state.currentPosY) return;
    this.setState({ scroll: false });
    if (e.keyCode === 90) {
    // if (this.prev > scrollY && scrollY < this.state.currentPosY) {
      this.setState({ scroll: true, currentPosY: this.state.currentPosY - 943},
        () => window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" }));
      } else if ( e.keyCode === 88) {
    // } else if (this.prev < scrollY && scrollY > this.state.currentPosY) {
      this.setState({ scroll: true, currentPosY: this.state.currentPosY + 943},
        () => window.scrollTo({ top: this.state.currentPosY, behavior: "smooth" }));
    }
    this.prev = scrollY;
  }
  
  render() {
    const { model, secNavDisplay } = this.state;
    const { secure, performance, distance, carAuto, interior, exterior, specs, order} = this.state;
    return (
      <div className="models">
        <CommonNav />
        <Main model={model}/>
        {secNavDisplay && <SecNav model={model}/>}
        <Secure model={model}  secure={secure}/>
        <Performance model={model} performance={performance}/>
        <Distance model={model} distance={distance}/>
        <CarAutopilot model={model} carAuto={carAuto}/>
        <Interior model={model} interior={interior}/>
        <Exterior model={model} exterior={exterior}/>
        <Specs model={model} specs={specs}/>
        <Order model={model} />
        <SideNav model={model}/>
        <CommonFooter model={model}/>
      </div>
    );
  }
}

export default withRouter(CarModel);