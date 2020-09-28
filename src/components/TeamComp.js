import React, {Component} from "react"
import Logo from './static/logo.svg';
import './styles/TeamComp.css';
import TeamLeft from './TeamLeft';
import TeamDetails from './TeamDetails';
class FourZeroFour extends Component{

  render(){
    return(
      <>
        <div className="header">
          <img src={Logo} className="logo" alt="" srcset=""/>
          DSC REVA
        </div>
        <div className="row">
          <div className="col m3 l3"><TeamLeft/></div>
          <div className="col m9 l9"><TeamDetails/></div>
        </div>
      </>
    );
  }

}


export default FourZeroFour;