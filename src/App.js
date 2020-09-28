import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "materialize-css";
import './App.css';

import Home from "./components/HomeComp";
import FourZeroFour from "./components/FourZeroFourComp";
import Team from "./components/TeamComp";

class App extends Component{
  
  render(){
    return(
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/team" component={Team} />

            <Route component={FourZeroFour} />

          </Switch>
        </Router>
    );
  }

}


export default App;