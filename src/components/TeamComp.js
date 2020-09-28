import React, {Component} from "react"
import Logo from './static/logo.svg';
import './styles/TeamComp.css';
import TeamLeft from './TeamLeft';
class FourZeroFour extends Component{

  render(){
    return(
      <>
        <div className="header">
          <img src={Logo} className="logo" alt="" srcset=""/>
          DSC REVA
        </div>
        <div className="row">
          <div className="col m4 l4"><TeamLeft /></div>
          <div className="col m8 l8"></div>
        </div>
      </>
    );
  }

}


export default FourZeroFour;