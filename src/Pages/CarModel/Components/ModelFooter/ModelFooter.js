import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ModelFooter.scss';

class ModelFooter extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
      }
    }
  }

  componentDidMount() {
    fetch(`/data/car/${this.props.model}.json`)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.ModelFooter[this.props.dataname] }));
  }

  render() {
    return (
      <div className="ModelFooter">
        <div className="container">
          <div className="footerLeft">
            <header className="header">
              <div className="headerName">{this.state.data?.headerName}</div>
              <div className="headerContent">{this.state.data?.headerContent}</div>
            </header>
            <div className="contents">
              <div className="more">
                <div className="iconWrap">
                  <div className="moreIcon"></div>
                </div>
                자세히 알아보기
              </div>
              <div className="order">
                <Link to="/order/Model_S" className="orderBtn">
                  <div className="orderBtnText">지금 주문하기</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="aside">
          {this.state.data?.aside}
          </div>
        </div>
      </div>
    );
  }
}

export default ModelFooter;