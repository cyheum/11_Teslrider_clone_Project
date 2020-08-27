import React, { Component } from 'react';
import './Explantation.scss';

class Explantation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:{}
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res.exterior }))
  }

  render() {
    return (
      <div className="Explantation">
              <div className="explain">
                <div className="items">
                  <div className="itemWrap">
                    <header className="itemHeader">
                      <div className="itemImg" />
                      <div className="itemText">{this.state.data.spec?.컬러}</div>
                    </header>
                    <p className="itemContents">{this.state.data.spec?.explain?.컬러}</p>
                  </div>
                </div>
                <div className="itemBorder items">
                  <div className="itemWrap">
                    <header className="itemHeader">
                    <div className="itemHeaderTitle">{this.state.data.spec?.저항}</div>
                    <div className="itemScase"/>
                    </header>
                    <p className="itemContents">{this.state.data.spec?.explain?.저항}</p>
                  </div>
                </div>
                <div className="items">
                  <div className="itemWrap">
                    <header className="itemHeader">
                      <div className="itemRooftop" />
                      <div className="itemText">{this.state.data.spec?.천장}</div>
                    </header>
                    <p className="itemContents">{this.state.data.spec?.explain?.천장}</p>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

export default Explantation;