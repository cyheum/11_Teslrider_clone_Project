import React, { Component } from 'react';
import './InfoContent.scss';

class InfoContent extends Component {
  makeInfo = () => {
    const {data, keyName} = this.props;
    let arr = Object.keys(data[this.props.keyName]);
    const arr1 = arr.slice(0, 6);
    const arr2 = arr.slice(6);
    const newArr = [arr1, arr2]
    let view = newArr.map((key, idx) =>(
      <ul className="infoList" key={idx}>
      {
        key.map((key2, idx) => (
          <li className="infoListItem" key={idx}>
            <span className="infoItemTitle">{key[idx]}</span>
            <span className="infoItemValue">{data[this.props.keyName][key[idx]]}</span>
          </li>
        ))
      }
      </ul>
    ))
    return view;
  }

  render() {
    return (
      <div className="InfoContent" >
          {this.props.data.performance && this.makeInfo()}
      </div>
    );
  }
}

export default InfoContent;