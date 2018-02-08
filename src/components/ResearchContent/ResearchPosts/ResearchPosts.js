import React, { Component } from 'react';
import PostNavs from './../PostNavs/PostNavs';

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
            <article className="Post">
                <div className="clearfix">
                    <div className="research-author mb-1 float-left">{this.props.author} 
                        <span className="ml-2 display-date">
                            {
                                new Intl.DateTimeFormat('en-GB', { 
                                year: 'numeric', 
                                month: 'short', 
                                day: '2-digit' 
                                }).format(new Date(this.props.date))
                            }
                        </span>
                    </div>
                    <div className="float-right">
                       <PostNavs id={this.props.id} />
                    </div>
                </div>
                <h1 className="research-title"> {this.props.title} </h1>
                <p className="research.body">{this.props.body} </p>
            </article>
        )
    }
}

export default ResearchPost