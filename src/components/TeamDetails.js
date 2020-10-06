import React, { Component } from 'react';
import './styles/TeamDetails.css';
import prev from './static/prev.png';
import next from './static/next.png';

export default class TeamDetails extends Component {

    render() {
        return (
            <div className="details">
                <div className="h-100 valign-wrapper" onClick={()=>this.props.handlePrev()}>
                    <img className="hovermousepointer" src={prev} alt="Previous Member"/>
                </div>
                
                <div className="details_container">
                    <div className="details_container_top">
                    <img className="member_image" src={require(`${this.props.member.image_url}`)} alt={this.props.member.name}/>
                        <div className="details_row">
                            <div className="member_name">{this.props.member.name}</div>
                            <div className="member_title">{this.props.member.title}</div>
                            <div className="member_socials">
                                {this.props.member.socials?.map((social, index)=>(
                                    <a href={social.link}><img className="social_image" src={require(`./static/socials/${social.site}.png`)} key={index}/></a>)
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="member_tags">{this.props.member.tags.join(' | ')}</div>
                    <div className="member_description flow-text">{this.props.member.description}</div>
                </div>
                
                <div className="h-100 valign-wrapper" onClick={()=>this.props.handleNext()}>
                    <img className="hovermousepointer" src={next} alt="Next Member"/>
                </div>
            </div>
        )
    }
}
