import React, { Component } from 'react';
import OverflowContents from '../Components/OverflowContents/OverflowContents';
import ModelFooter from '../Components/ModelFooter/ModelFooter';
import './CarInterior.scss';

class CarInterior extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:{}
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res }))
  }

  backgroundImg = (img) => {
    return {
      background: `url(${img}) no-repeat center / 100%`
    }
  }

  background = (data) => {
  let background = data.interior.background;
    if(background.type === "video"){
      return <div className="videoWrap">
        <video loop autoPlay="autoPlay" src={background.video} />
      </div>
    }else if(background.type === "img"){
      return <div className="imgWrap" style={this.backgroundImg(background.img)}></div>
    }
  }
  
  render() {
    return (
      <div className="CarInterior" id="interior">
        <div className="interiorMain">
          {this.state.data.interior != null ? this.background(this.state.data) : ""}
          {this.props.interior &&
           <OverflowContents dataname="interior" model={this.props.model}/>
          }
        </div>
        {this.props.interior &&
          <ModelFooter dataname="interior" model={this.props.model}/>
        }
      </div>
    );
  }
}

export default CarInterior;