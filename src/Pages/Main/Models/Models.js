import React, { Component } from "react";
import CommonNav from "../../../Components/CommonNav/CommonNav";
import SubjectAndBtn from "../SubjectAndBtn/SubjectAndBtn";
import MainViewBtnsContainer from "./MainViewBtnsContainer";
import "./Models.scss";

class Models extends Component {
  render() {
    return (
      <div className="Models">
        <CommonNav />
        <div className="container">
          <SubjectAndBtn />
          <MainViewBtnsContainer />
        </div>
      </div>
    );
  }
}

export default Models;
