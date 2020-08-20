import React, { Component } from "react";
import CommonNav from "../CommonNav/CommonNav";
import FooterBtn from "../Footerbtn/FooterBtn";
import SubjectAndBtn from "../SubjectAndBtn/SubjectAndBtn";
import MainViewBtnsContainer from "./MainViewBtnsContainer";
import "./Models.scss";

class Models extends Component {
  render() {
    return (
      <div className="models" id="top">
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
