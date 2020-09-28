import React, { Component } from 'react';
import './styles/TeamDetails.css';
import prev from './static/prev.png';
import next from './static/next.png'
export default class TeamDetails extends Component {
    render() {
        return (
            <div className="details">
                <div className="prev_button_container">
                    <img src={prev} alt="" srcset=""/>
                </div>
                
                <div className="details_container">
                    <div className="details_container_top">
                        <img className="member_image" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset=""/>
                        <div className="details_row">
                            <div className="member_name">Team Member</div>
                            <div className="member_title">Member&nbsp;Title</div>
                            <div className="member_socials"></div>
                        </div>
                    </div>
                    <div className="member_tags">Product | Caffeine | Art | Music | Films </div>
                    <div className="member_description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
                
                <div className="next_button_container">
                    <img src={next} alt="" srcset=""/>
                </div>
            </div>
        )
    }
}
