import React, { Component } from 'react';
import './styles/TeamDetails.css';
import prev from './static/prev.png';
import next from './static/next.png';

export default class TeamDetails extends Component {

    render() {
        return (
            <div className="details">
                <div className="h-100 valign-wrapper" onClick={()=>this.props.handlePrev()}>
                    <img class="hovermousepointer" src={prev} alt="Previous Member"/>
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
                    <div className="member_description flow-text">{this.props.member.description}</div>
                </div>
                
                <div className="h-100 valign-wrapper" onClick={()=>this.props.handleNext()}>
                    <img class="hovermousepointer" src={next} alt="Next Member"/>
                </div>
            </div>
        )
    }
}
