import React from "react"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "./rewind.css";

import slide1 from "./fedw19/slide1.JPG";
import slide2 from "./fedw19/slide2.JPG";
import slide3 from "./fedw19/slide3.JPG";
import slide4 from "./fedw19/slide4.JPG";
import slide5 from "./fedw19/slide5.JPG";
import slide6 from "./fedw19/slide6.JPG";
import slide7 from "./fedw19/slide7.JPG";
import slide8 from "./fedw19/slide8.JPG";

const close = () =>{
  window.history.go(-1)
}

const fedw = () =>{

    return(
      <div className="ssbg">
        <div className="container">
          <div className="col l10 m8 s12">
            <button className="btn-floating btn-large waves-effect waves-light red right" onClick={close}>
              <i class="material-icons">close</i>
            </button>
            <h1 style={{fontSize: "5vh"}}><span>Front End Development Workshop 2019</span></h1><br />
            <br />
            
            <div className="slide-container">
              <Slide>
              <div className="each-slide">
                  <div>
                    <img src={slide1} className="resp" alt="slide1" />
                    <p className="ta_center">Dr. Manvi introducing everyone to Front End Development and it's importance</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide2} className="resp" alt="slide2" />
                    <p className="ta_center">Saket instructing how to use GitHub CLI</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide3} className="resp" alt="slide3" />
                    <p className="ta_center">Participants installing required software(s)</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide4} className="resp" alt="slide4" />
                    <p className="ta_center">Sahil and Dharshan helping participants</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide5} className="resp" alt="slide5" />
                    <p className="ta_center">Participants developing a JavaScript based Calculator</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide6} className="resp" alt="slide6" />
                    <p className="ta_center">Shivendra taking a hands on HTML + CSS session</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide7} className="resp" alt="slide7" />
                    <p className="ta_center">Participants concentrating</p>
                  </div>
                </div>
                <div className="each-slide">
                  <div>
                    <img src={slide8} className="resp" alt="slide8" />
                    <p className="ta_center">Anjan giving a thumbs up</p>
                  </div>
                </div>
              </Slide>
            </div>

          </div>
        </div>
      </div>
    );

}


export default fedw;