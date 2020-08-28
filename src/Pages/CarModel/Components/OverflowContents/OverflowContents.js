import React, { Component } from 'react';
import './OverflowContents.scss';

class OverflowContents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount () {
    fetch(`/data/car/${this.props.model}.json`)
    .then((res) => res.json())
    .then((res) => {
        this.setState({ data : res[this.props.dataname] })
      }
    )
  }

  icon(is){
    const { spec } = this.state.data;
    const { dataname } = this.props;
    if(is){
      return <div className="overflowItemsHeader">
      <div className="overflowItemsHeaderLast" />
      <span>{dataname === "autopilot" ? spec?.sensor : spec?.load}</span>
      </div>
    }else {
      return <div className="overflowItemsHeader">
      {dataname === "autopilot" ? spec?.sensor : spec?.load}
      </div>
    }
  }


  render() {
    const { spec } = this.state.data;
    const { dataname } = this.props;
    return (
      <div className="OverflowContents">
        <div className="overflowContentsLeft">
          <ul className={`overflowItemContainer ${this.state.data.overflow === "right" ? "overflowright" : "overflowLeft"}`} >
            <li className="overflowItems">
              <div className="overflowItemsHeader">{dataname === "autopilot" ? spec?.wide : spec?.display}</div>
              <div className="overflowItemsContent">{dataname === "autopilot" ? spec?.explain?.wide : spec?.explain.display}</div>
            </li>
            <li className="overflowItems">
              <div className="overflowItemsHeader">{dataname === "autopilot" ? spec?.distance : spec?.d}</div>
              <div className="overflowItemsContent">{dataname === "autopilot" ? spec?.explain?.distance : spec?.explain?.update}</div>
            </li>
            <li className="overflowItems">
                {dataname == "autopilot" ?  this.icon(true) : this.icon()}
              <div className="overflowItemsContent">{dataname === "autopilot" ? spec?.explain?.sensor : spec?.explain?.load}</div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default OverflowContents;