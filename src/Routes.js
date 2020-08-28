import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import CarModel from "./Pages/CarModel/CarModel";
import LogIn from "./Pages/LogIn/LogIn";
import Order from "./Pages/Order/Order";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/car/:model" component={CarModel} />
          <Route exact path="/order/:model" component={Order} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
