import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Order.scss';


class Order extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {},
      backImg: "",
      backColor: false
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => this.setState({
      data: res,
      backImg: res.car.img.order
    }))

    if (this.props.model ==="model3" ) {
      this.setState({
        backColor: true
      })
    }
  }

  title = (title) => {
    return title = title[0].toUpperCase()
    + title.substring(1, title.length - 1)
    +" "
    + title[title.length -1].toUpperCase()
  }

  render() {
    const {backColor, backImg} = this.state;
    return (
      <>
      <div className={`Order ${backColor ? "black" : ""}`} id="order">
        <div className="mainContainer">
          <div className={`mainContents itemLayout ${backColor ? "invert" : ""}`}>
            <div className="contenstHeader">{this.title(this.props.model)} 주문하기</div>
            <div className="contentsBtn">
              <Link to="/order" className="orderBtn">지금 주문하기</Link>
            </div>
          </div>
          <div className="mainImgWrap itemLayout">
            <img className="mainImg" alt={this.props.model} src={backImg} />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Order;