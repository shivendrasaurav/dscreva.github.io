import React, { Component } from 'react'
import './styles/TeamLeft.css'
export default class TeamLeft extends Component {
    constructor(props) {
        super(props);
        this.state= {
            curr_team: 'All', //selected team
            selected_team_element: null
        }
    }

    handleTeamSelect(e, _team) {
        if(this.state.selected_team_element!==null) {
            this.state.selected_team_element.classList.remove("active"); //If any element is active, set it to not active
        }
        e.target.classList.add("active");
        let filtered_members = [];
        this.setState({curr_team: _team});
        if(_team!="All")
            filtered_members = this.props.members.filter(member => member.team===_team); //filter the members array
        else
            filtered_members = this.props.members;
        this.props.setCurrMember(0); //reset member index
        this.props.setTeamMembers(filtered_members); //set the team_members state with filtered members
        this.setState({selected_team_element: e.target});
    }

    render() {
        return (
            <div className = "leftcol">
                <div className="leftcol_text_big all_text" onClick={(e)=>this.handleTeamSelect(e, "All")}>All Teams</div>
                <div className="leftcol_text management_text" onClick={(e)=>this.handleTeamSelect(e, "Management")}>Management</div>
                <div className="leftcol_text design_text" onClick={(e)=>this.handleTeamSelect(e, "Design")}>Design</div>
                <div className="leftcol_text tech_text" onClick={(e)=>this.handleTeamSelect(e, "Tech")}>Tech</div>
                <div className="leftcol_text web_text" onClick={(e)=>this.handleTeamSelect(e, "Web")}>Web</div>
                <div className="leftcol_text android_text" onClick={(e)=>this.handleTeamSelect(e, "Android")}>Android</div>
                <div className="leftcol_text mentors_text" onClick={(e)=>this.handleTeamSelect(e, "Mentors")}>Mentors</div>
                <div className="leftcol_text faculty_text" onClick={(e)=>this.handleTeamSelect(e, "Faculty")}>Faculty</div>
            </div>
        )
    }
}
