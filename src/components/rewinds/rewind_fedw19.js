import React, {Component} from "react"

class fedw extends Component{

  frosting(){

    document.querySelector(".frost_container:hover").onmousemove = e => {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
    
        e.target.style.setProperty("--x", `${x}px`);
        e.target.style.setProperty("--y", `${y}px`);
    };
  }

  close(){
    window.history.go(-1)
  }

  
  render(){
    return(
      <div className="container">
        <div className="col l8 m8 s12">
          <h1 style={{fontSize: "20vh"}}><span>Rewind&lt;&lt;</span></h1><br />
          <button className="btn-large frost_container red lighten-4" onMouseOver={this.frosting} onClick={this.close}>
            <span className="frost">Head To Home</span>
          </button>
          <br /><br />
        </div>
      </div>
    );
  }

}


export default fedw;