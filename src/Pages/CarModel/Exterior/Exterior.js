import React, { Component } from 'react';
import Explantation from '../Components/Explantation/Explantation';
import ModelFooter from '../Components/ModelFooter/ModelFooter';
import './Exterior.scss';

class Exterior extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:{},
      backImg: ""
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res }))
    .then(() => this.setState({
      backImg : this.state.data.exterior.img
    }))
  }

  backgroundImg = () => {
    return {
      background: `url(${this.state.backImg}) no-repeat center / 100%`
    }
  }

  render() {
    return (
      <div className="Exterior" id="exterior">
        <div className="exteriorContainer">
          <main className="main" style={this.backgroundImg()}>
            <div className="mainImg">
              {this.props.exterior &&
                <Explantation model={this.props.model}/>
              }
            </div>

          </main>
            {this.props.exterior &&
              <ModelFooter dataname="exterior" model={this.props.model}/>
            }
        </div>
      </div>
    );
  }
}

export default Exterior;