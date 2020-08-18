import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Main from './Pages/Main/Main';
import Order from './Pages/Order/Order';
import CarModel from './Pages/CarModel/CarModel';
import LogIn from './Pages/LogIn/LogIn'


class Routes extends React.Component {
    render() {
        return (
        <Router>
            <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/model" component={CarModel} />
            </Switch>
        </Router>
        )
    }
}

export default Routes;