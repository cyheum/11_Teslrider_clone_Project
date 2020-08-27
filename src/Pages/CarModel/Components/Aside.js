import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Aside.scss';

class Aside extends Component {
  constructor(props){
    super(props);
    this.state= {
      data: {
      }
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({ data : res.aside }))
  }

  render() {
    return (
      <div className="Aside">
        <div className="container">
            <div className="header">
            <header>
              <div className="smallHeader">{this.props.where === "secure" ? this.state.data.secure?.title : this.state.data.distance?.title}</div>
              <div className="bigHeader">{this.props.where === "secure" ? this.state.data.secure?.subTitle : this.state.data.distance?.subTitle}</div>
            </header>
          </div>
          <div className="contents">
            <p className="contentText">{this.props.where === "secure" ? this.state.data.secure?.contentText : this.state.data.distance?.contentText}</p>
            <div className="lowBtn">
              <div className="lowLeft orderBtnText">
                <div className="lowLeftBtnWrap">
                  <div className="lowLeftBtn" />
                </div>
                자세히 알아보기
              </div>
              <div className="lowright">
                <Link to="/order" className="orderBtn">
                  <div className="orderBtnText">지금 주문하기</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aside;