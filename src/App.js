import React, {Component} from "react"
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import "materialize-css";
import './App.css';

import Home from "./components/HomeComp";
import FourZeroFour from "./components/FourZeroFourComp";
import Team from "./components/TeamComp";
import Events from "./components/EventComp";

import FEDW from "./components/rewinds/rewind_fedw19";

class App extends Component{
  
  render(){
    return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/team" component={Team} />
            <Route path="/events" component={Events} />
            <Route path="/blogs" component={Events} />

            <Route path="/fedw" component={FEDW} />

            <Route component={FourZeroFour} />

          </Switch>
        </Router>
    );
  }

}


export default App;