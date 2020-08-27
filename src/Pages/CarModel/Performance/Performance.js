import React, { Component } from 'react';
import SpecSum from '../Components/SpecSum/SpecSum';
import ModelFooter from '../Components/ModelFooter';
import './Performance.scss';

class Performance extends Component {
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
      backImg : this.state.data.img.performance,
    }))
  }

  backgroundImg = () => {
    return {
      background: `url(${this.state.backImg}) no-repeat center / 100%`
    }
  }

  render() {
    const { model } = this.props;
    return (
      <div className="Performance" id="performance">
        <div className="performanceContainer">
          <div className="performanceMain" style={this.backgroundImg()}>
            <SpecSum model={model}/>
          </div>
          <ModelFooter dataname={"performance"} model={model}/>
        </div>
      </div>
    );  
  }
}

export default Performance;