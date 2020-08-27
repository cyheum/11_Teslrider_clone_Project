import React, { Component } from "react";

class GoToTopBtn extends Component {
  render() {
    return (
      <img
        onClick={this.props.gotoTop}
        className="GoToTopBtn"
        alt="logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDAgMTAwJyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWlkWU1pZCBNZWV0JyB3aWR0aD0nMTAwJyBoZWlnaHQ9JzEwMCc+PHBhdGggZD0nTTEwMCA1LjVjMCAxLjMtLjUgMi42LTEuNSAzLjVMNTAgNTcuNSAxLjUgOWMtMi0yLTItNS4xIDAtNy4xczUuMS0yIDcuMSAwTDUwIDQzLjQgOTEuNSAxLjljMi0yIDUuMS0yIDcuMSAwIC45IDEgMS40IDIuMyAxLjQgMy42eicvPjwvc3ZnPg=="
      />
    );
  }
}

export default GoToTopBtn;
