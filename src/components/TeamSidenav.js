import React, { Component } from 'react';
import './styles/TeamSidenav.css';

export default class TeamSidenav extends Component {
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
        if(_team!=="All")
            filtered_members = this.props.members.filter(member => member.team===_team); //filter the members array
        else
            filtered_members = this.props.members;
        this.props.setCurrMember(0); //reset member index
        this.props.setTeamMembers(filtered_members); //set the team_members state with filtered members
        this.setState({selected_team_element: e.target});
    }

    render() {
        return (
            <div>
            <ul id="slide-out" className="sidenav">
                <div className="sidenav_items">
                    <li className="sidenav_elem"><div className="leftcol_text_big all_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "All")}>All Teams</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text management_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Management")}>Management</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text design_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Design")}>Design</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text tech_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Tech")}>Tech</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text web_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Web")}>Web</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text android_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Android")}>Android</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text mentors_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Mentors")}>Mentors</div></li>
                    <li className="sidenav_elem"><div className="leftcol_text faculty_text sidenav-team-selector" onClick={(e)=>this.handleTeamSelect(e, "Faculty")}>Faculty</div></li>
                </div>
            </ul>
            </div>
        )
    }
}
