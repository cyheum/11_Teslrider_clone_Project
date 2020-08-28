import React, { Component } from 'react';
import Aside from '../Components/Aside/Aside';
import './Secure.scss';

class Secure extends Component {
  constructor(props){
    super(props);
    this.state = {
      backImg: "",
      pointers: {}
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res.car }))
    .then(()=> this.setState({
      backImg : this.state.data.img.secure,
      pointers : this.state.data.secure.pointer
    }))
  }

  backgroundImg = () => {
    return {
      background: `url(${this.state.backImg}) no-repeat center / 100%`
    }
  }
  
  pointer = () => {
    let pointerArray = Object.keys(this.state.pointers);
    return pointerArray.map((key, idx) =>
      <li className="SpecItem" key={idx}>
        <span className="spectItemText">{this.state.pointers[key]}</span>
      </li>
    )
  }

  render() {
    return (
      <div className="Secure" id="secure">
        {this.props.secure &&
        <>
        <Aside dataname={"secure"} model={this.props.model} where="secure" />
        <main className="main">
          <div className="mainImgContainer" style={this.backgroundImg()}>
            <ul className="mainSpecs">
              {this.pointer()}
            </ul>
          </div>
        </main>
        </>
        }
      </div>
    );
  }
}

export default Secure;