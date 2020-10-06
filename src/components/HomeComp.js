import React, {Component} from "react"
import { NavLink } from "react-router-dom";
class Home extends Component{

  frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
  }

  close(){
    window.history.go(-1);
  }

  
  render(){
    return(
      <div className="container">
        <div className="col l8 m8 s12">
          <h1 style={{fontSize: "20vh"}}><span>Home Page</span></h1><br />
          <button className="btn-large frost_container red lighten-1" onMouseOver={this.frosting} onClick={this.close}>
            <span className="frost">Back</span>
          </button>
          <br /><br />
          <NavLink to="/fedw">
            <button className="btn-large frost_container green lighten-1">
              <span className="frost">Front End Development Workshop 2019</span>
            </button>
          </NavLink>
          <br /><br />
          <NavLink to="/team">
            <button className="btn-large frost_container green lighten-1">
              <span className="frost">The Team</span>
            </button>
          </NavLink>
          
          <br /><br />
        </div>
      </div>
    );
  }

}


export default Home;