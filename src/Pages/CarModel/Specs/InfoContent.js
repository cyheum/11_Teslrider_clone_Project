import React, { Component } from 'react';
import './InfoContent.scss';

class InfoContent extends Component {
  render() {
    const {data, keyName} = this.props;
    const arr = Object.keys(data[keyName]);
    const arrFirst = arr.slice(0, 6);
    const arrSecond = arr.slice(6);
    const newArr = [arrFirst, arrSecond];
    return (
      <div className="InfoContent" >
        {
          newArr.map((key, idx) =>(
            <ul className="infoList" key={idx}>
            {
              key.map((key2, idx) => {
                if(key[idx] === "휠"){
                  return(
                  <li className="infoListItem" key={idx}>
                    <span className="infoItemTitle">{key[idx]}</span>
                    <span className="infoItemValue">{`${data[keyName][key[idx]].join(' 또는 ')}`}</span>
                  </li>
                )
                }
                return(
                <li className="infoListItem" key={idx}>
                  <span className="infoItemTitle">{key[idx]}</span>
                  <span className="infoItemValue">{data[keyName][key[idx]]}</span>
                </li>
              )})
            }
            </ul>
          ))
        }
      </div>
    );
  }
}

export default InfoContent;