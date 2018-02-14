import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { Popover, PopoverHeader } from 'reactstrap';
import Icon from './../../../assets/Icons/Icon';
import {ICONS} from './../../../assets/Icons/icon.constants';


class PostNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
          popoverOpen: false
        };
      }
    
    toggle = () => {
        let popOpen = this.state.popoverOpen;
        this.setState({
            popoverOpen: !popOpen
        });
        this.props.isOpen(this.state.popoverOpen);
    }

    render() {
        let checkClicked = [];
        
        if(this.state.popoverOpen) checkClicked.push('click');

        return (
            <div className="float-right" >
                <FontAwesomeIcon id={`pop${this.props.id}`} 
                    icon="times-circle" size="lg" transform="rotate-45" 
                    className={checkClicked.join(' ')}
                    onClick={this.toggle}/>
                <Popover placement="bottom" isOpen={this.state.popoverOpen} target={`pop${this.props.id}`} toggle={this.toggle}>
                    <PopoverHeader>
                        <div onClick={this.toggle} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.BLURB} size={14} color="#ffffff"/>
                            </span>
                            <span className="dropdown-label">
                                 Standard Format 
                            </span>
                        </div>
                        <div onClick={this.toggle} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.BLURB} size={14} color="#ffffff"/>
                            </span>
                            <span className="dropdown-label">
                                 Classic Format 
                            </span>
                        </div>
                        <div onClick={this.toggle} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.HEADLINE} size={14} color="#ffffff" w={80} h={80}/>
                            </span>
                            <span className="dropdown-label"> 
                                Headline Only 
                            </span>
                        </div>
                        <div onClick={this.toggle} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.LINK} size={14} color="#ffffff" w={36} h={36}/>
                            </span>
                            <span className="dropdown-label"> 
                                Hyperlink Only 
                            </span>
                        </div>
                        <div onClick={this.toggle} className="w-100 d-flex flex-nowrap justify-content-start dd-item-container">
                            <span className="mr-2">
                                <Icon icon={ICONS.BLURB} size={14} color="#ffffff"/>
                            </span>
                            <span className="dropdown-label">
                                 Whole Summary 
                            </span>
                        </div>
                    </PopoverHeader>
                </Popover>
            </div>
        )
    }
}

export default PostNav