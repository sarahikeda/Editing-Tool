import React, { Component } from 'react';
import PostNavs from './../PostNavs/PostNavs';
import Icon from './../../../assets/Icons/Icon';
import {ICONS} from './../../../assets/Icons/icon.constants';

class ResearchPost extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.id;
        //this.toggle = this.toggle.bind(this);
        this.state = {
          popoverOpen: false
        };
      }
    
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {
        return (
            <article className="Post animated bounceInDown">
                <div className="clearfix">
                    <div className="research-author mb-1 float-left">
                    <span><Icon icon={ICONS.STAR} size={14} color={this.props.specs.following ? "#F5A623" : "#9B9B9B"} w={42} h={42}/></span>
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