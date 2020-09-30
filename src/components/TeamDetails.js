import React, { Component } from 'react';
import './styles/TeamDetails.css';
import prev from './static/prev.png';
import next from './static/next.png';

export default class TeamDetails extends Component {

    render() {
        return (
            <div className="details">
                <div className="prev_button_container">
                    <img src={prev} alt="Previous Member" onClick={()=>this.props.handlePrev()}/>
                </div>
                
                <div className="details_container">
                    <div className="details_container_top">
                        <img className="member_image" src={this.props.member.image_url} alt="" srcset=""/>
                        <div className="details_row">
                            <div className="member_name">{this.props.member.name}</div>
                            <div className="member_title">{this.props.member.title}</div>
                            <div className="member_socials"></div>
                        </div>
                    </div>
                    <div className="member_tags">{this.props.member.tags.join(' | ')}</div>
                    <div className="member_description">{this.props.member.description}</div>
                </div>
                
                <div className="next_button_container">
                    <img src={next} alt="Next Member" onClick={()=>this.props.handleNext()}/>
                </div>
            </div>
        )
    }
}
