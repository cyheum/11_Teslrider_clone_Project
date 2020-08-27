import React, { Component } from "react";
import "./SecNav.scss";
import TeslaLogoImg from "../ImgAndVideo/TeslaLogoImg";
import GoToTopBtn from "../ImgAndVideo/GoToTopBtn";

class SecNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      logoColor: true,
      scroll: 0
    }
  }

componentDidUpdate (_, prevState) {
  const { innerHeight, scrollY } = window
  if (prevState.scroll !== scrollY) {
    this.setState ({
      scroll: scrollY
    })
    if ( innerHeight * 8 <=  scrollY && this.props.model ==="model3") {
      this.setState ({ logoColor: false })
    } else if (innerHeight * 8 <= scrollY ) {
      this.setState ({ logoColor: true })
    } else if ( innerHeight * 7 <=  scrollY ) {
      this.setState ({ logoColor: false })
    } else if ( innerHeight * 6 <= scrollY ) {
      this.setState ({ logoColor: true })
    } else if ( innerHeight * 5 <= scrollY ) {
      this.setState ({ logoColor: false })
   } else if ( innerHeight * 1 <=  scrollY) {
    this.setState ({ logoColor: true })
   }
  }
}

  goToTop = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="SecNav">
        <nav className={`navContainer ${this.state.logoColor ? "invert" : ""}`}>
          <div className="teslaLogoContainer">
            <TeslaLogoImg />
          </div>
          <div className="topBtnContainer">
            <GoToTopBtn gotoTop={this.goToTop} />
          </div>
        </nav>
      </div>
    );
  }
}

export default SecNav;
