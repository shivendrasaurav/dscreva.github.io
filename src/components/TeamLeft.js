import React, { Component } from 'react'
import './styles/TeamLeft.css'
export default class TeamLeft extends Component {
    render() {
        return (
            <div className = "leftcol">
                <div className="leftcol_text_big">All Teams</div>
                <div className="leftcol_text" id="management_text">Management</div>
                <div className="leftcol_text" id="design_text">Design</div>
                <div className="leftcol_text" id="tech_text">Tech</div>
                <div className="leftcol_text" id="web_text">Web</div>
                <div className="leftcol_text" id="android_text" >Android</div>
                <div className="leftcol_text" id="mentors_text">Mentors</div>
                <div className="leftcol_text" id="faculty_text">Faculty</div>
            </div>
        )
    }
}
