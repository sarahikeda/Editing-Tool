import React, { Component } from 'react';
import PostNavs from './../PostNavs/PostNavs';
import Icon from './../../../assets/Icons/Icon';
import {ICONS} from './../../../assets/Icons/icon.constants';
import { Tooltip } from 'reactstrap';

class ResearchPost extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        this.state = {
          popoverOpen: false,
          tooltipOpen: false
        };
      }
    
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    togglett = () => {
        let tooltipOpen = this.state.tooltipOpen;
        this.setState({
            tooltipOpen: !tooltipOpen
        });
    }
    render() {
        return (
            <article className="Post animated bounceInDown">
                <div className="clearfix">
                    <div className="research-author mb-1 float-left">
                            <span onClick={this.props.follow} id={`tt_${this.props.specs.id}`}>
                                <Icon icon={ICONS.STAR} size={14} color={this.props.specs.following ? "#F5A623" : "#9B9B9B"} w={42} h={42}/>
                            </span>
                            <Tooltip className="app_tool_tip" placement="top" isOpen={this.state.tooltipOpen} autohide={true} target={`tt_${this.props.specs.id}`} toggle={this.togglett}>
                                {this.props.specs.following ? 'Unfollow' : 'Follow'}
                            </Tooltip>
                    {this.props.specs.author} 
                        <span className="ml-2 display-date">
                            {
                                new Intl.DateTimeFormat('en-GB', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: '2-digit' 
                                }).format(new Date(this.props.specs.date))
                            }
                        </span>
                    </div>
                    <div className="float-right">
                       <PostNavs id={this.props.specs.id} />
                    </div>
                </div>
                <h1 className="research-title"> {this.props.specs.title} </h1>
                <p className="research.body">{this.props.specs.body} </p>
            </article>
        )
    }
}

export default ResearchPost