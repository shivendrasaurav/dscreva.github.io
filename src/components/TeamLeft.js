import React, { Component } from 'react'
import './styles/TeamLeft.css'
export default class TeamLeft extends Component {
    constructor(props) {
        super(props);
        this.state= {
            curr_team: 'All' //selected team
        }
    }

    handleTeamSelect(_team) {
        console.log(`handleteamselect called with ${_team}`);
        let filtered_members = [];
        this.setState({curr_team: _team});
        if(_team!="All")
            filtered_members = this.props.members.filter(member => member.team===_team); //filter the members array
        else
            filtered_members = this.props.members;
        this.props.setCurrMember(0); //reset member index
        this.props.setTeamMembers(filtered_members); //set the team_members state with filtered members
    }

    render() {
        return (
            <div className = "leftcol">
                <div className="leftcol_text_big" onClick={()=>this.handleTeamSelect("All")}>All Teams</div>
                <div className="leftcol_text" id="management_text" onClick={()=>this.handleTeamSelect("Management")}>Management</div>
                <div className="leftcol_text" id="design_text" onClick={()=>this.handleTeamSelect("Design")}>Design</div>
                <div className="leftcol_text" id="tech_text" onClick={()=>this.handleTeamSelect("Tech")}>Tech</div>
                <div className="leftcol_text" id="web_text" onClick={()=>this.handleTeamSelect("Web")}>Web</div>
                <div className="leftcol_text" id="android_text" onClick={()=>this.handleTeamSelect("Android")}>Android</div>
                <div className="leftcol_text" id="mentors_text" onClick={()=>this.handleTeamSelect("Mentors")}>Mentors</div>
                <div className="leftcol_text" id="faculty_text" onClick={()=>this.handleTeamSelect("Faculty")}>Faculty</div>
            </div>
        )
    }
}
