import React, {Component} from "react"
import Logo from './static/logo.svg';
import TeamLeft from './TeamLeft';
import TeamDetails from './TeamDetails';
import TeamSidenav from './TeamSidenav';
import members from '../teamMembers';
// import Swiper core and required components
import Swiper from 'swiper';
import swiper from 'swiper/bundle';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
//Style file
import './styles/TeamComp.css';

class Team extends Component{
  constructor(props) {
    super(props);
    this.state = {
      team_members: members, //team members array which is initially set to all members
      curr_member:0 //member index in a certain team
    }
    this.setTeamMembers= this.setTeamMembers.bind(this);
    this.setCurrMember= this.setCurrMember.bind(this);
  }

  setTeamMembers(_team_members) {
    this.setState({team_members: _team_members});
  }

  setCurrMember(_curr_member) {
    this.setState({curr_member: _curr_member});
  }

  handleNext = () => {
    if(this.state.curr_member<this.state.team_members.length-1){
      this.setState({curr_member: this.state.curr_member+1})
    }
  }

  handlePrev = () =>{
    if(this.state.curr_member>0){
      this.setState({curr_member: this.state.curr_member-1})
    }
  }

  componentDidMount () {
    // For bottom image slider
    var swiper = new Swiper('.swiper-container', {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 10,
          coverflowEffect: {
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          loop: true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
            },
          breakpoints: {
            1700: {
              slidesPerView: 14,
              spaceBetween: 7,
              coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows: true,
              },

            },
            1500: {
              slidesPerView: 10,
              spaceBetween: 5,
            },
            1000: {
              slidesPerView: 10,
              spaceBetween: 5,
            }
          }

         });
  }

  render(){
    return(
      <div>
        <TeamSidenav members={members} setTeamMembers={this.setTeamMembers} setCurrMember={this.setCurrMember}/>
        <div className="header">
          <img src={Logo} className="logo" alt=""/>
          DSC REVA
          <a href="#/team" data-target="slide-out" className="sidenav-trigger "><i className="material-icons">menu</i></a>
        </div>
        <div className="row">
          <div className="col m3 l3 hide-on-small-only"><TeamLeft members={members} setTeamMembers={this.setTeamMembers} setCurrMember={this.setCurrMember}/></div>
          <div className="col m9 l9"><TeamDetails member={this.state.team_members[this.state.curr_member]} handlePrev={this.handlePrev} handleNext={this.handleNext}/></div>
        </div>
        <div className="bottom_slider">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              {members.map(function (member, index) {
                  return <div class="swiper-slide"><img class="member-image-slider" alt="Team Members" src={require(`${member.image_url}`)} key={index}/></div>
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default Team;