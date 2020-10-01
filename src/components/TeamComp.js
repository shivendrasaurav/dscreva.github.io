import React, {Component} from "react"
import Logo from './static/logo.svg';
import './styles/TeamComp.css';
import TeamLeft from './TeamLeft';
import TeamDetails from './TeamDetails';
import members from '../teamMembers';


class FourZeroFour extends Component{
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

  render(){
    return(
      <>
        <div className="header">
          <img src={Logo} className="logo" alt="" srcset=""/>
          DSC REVA
        </div>
        <div className="row">
          <div className="col m3 l3 hide-on-small-only"><TeamLeft members={members} setTeamMembers={this.setTeamMembers} setCurrMember={this.setCurrMember}/></div>
          <div className="col m9 l9"><TeamDetails member={this.state.team_members[this.state.curr_member]} handlePrev={this.handlePrev} handleNext={this.handleNext}/></div>
        </div>
      </>
    );
  }

}


export default FourZeroFour;